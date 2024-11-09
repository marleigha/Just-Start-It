const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class TasksDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const tasks = await db.tasks.create(
      {
        id: data.id || undefined,

        title: data.title || null,
        description: data.description || null,
        hardness_level: data.hardness_level || null,
        deadline: data.deadline || null,
        urgency_level: data.urgency_level || null,
        point_value: data.point_value || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await tasks.setUser(data.user || null, {
      transaction,
    });

    return tasks;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const tasksData = data.map((item, index) => ({
      id: item.id || undefined,

      title: item.title || null,
      description: item.description || null,
      hardness_level: item.hardness_level || null,
      deadline: item.deadline || null,
      urgency_level: item.urgency_level || null,
      point_value: item.point_value || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const tasks = await db.tasks.bulkCreate(tasksData, { transaction });

    // For each item created, replace relation files

    return tasks;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const tasks = await db.tasks.findByPk(id, {}, { transaction });

    await tasks.update(
      {
        title: data.title || null,
        description: data.description || null,
        hardness_level: data.hardness_level || null,
        deadline: data.deadline || null,
        urgency_level: data.urgency_level || null,
        point_value: data.point_value || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await tasks.setUser(data.user || null, {
      transaction,
    });

    return tasks;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const tasks = await db.tasks.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of tasks) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of tasks) {
        await record.destroy({ transaction });
      }
    });

    return tasks;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const tasks = await db.tasks.findByPk(id, options);

    await tasks.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await tasks.destroy({
      transaction,
    });

    return tasks;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const tasks = await db.tasks.findOne({ where }, { transaction });

    if (!tasks) {
      return tasks;
    }

    const output = tasks.get({ plain: true });

    output.user = await tasks.getUser({
      transaction,
    });

    return output;
  }

  static async findAll(filter, options) {
    const limit = filter.limit || 0;
    let offset = 0;
    const currentPage = +filter.page;

    offset = currentPage * limit;

    const orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [
      {
        model: db.users,
        as: 'user',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.title) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('tasks', 'title', filter.title),
        };
      }

      if (filter.description) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('tasks', 'description', filter.description),
        };
      }

      if (filter.calendarStart && filter.calendarEnd) {
        where = {
          ...where,
          [Op.or]: [
            {
              deadline: {
                [Op.between]: [filter.calendarStart, filter.calendarEnd],
              },
            },
            {
              deadline: {
                [Op.between]: [filter.calendarStart, filter.calendarEnd],
              },
            },
          ],
        };
      }

      if (filter.deadlineRange) {
        const [start, end] = filter.deadlineRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            deadline: {
              ...where.deadline,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            deadline: {
              ...where.deadline,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.point_valueRange) {
        const [start, end] = filter.point_valueRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            point_value: {
              ...where.point_value,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            point_value: {
              ...where.point_value,
              [Op.lte]: end,
            },
          };
        }
      }

      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active: filter.active === true || filter.active === 'true',
        };
      }

      if (filter.hardness_level) {
        where = {
          ...where,
          hardness_level: filter.hardness_level,
        };
      }

      if (filter.urgency_level) {
        where = {
          ...where,
          urgency_level: filter.urgency_level,
        };
      }

      if (filter.user) {
        const listItems = filter.user.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          userId: { [Op.or]: listItems },
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = options?.countOnly
      ? {
          rows: [],
          count: await db.tasks.count({
            where,
            include,
            distinct: true,
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
            order:
              filter.field && filter.sort
                ? [[filter.field, filter.sort]]
                : [['createdAt', 'desc']],
            transaction,
          }),
        }
      : await db.tasks.findAndCountAll({
          where,
          include,
          distinct: true,
          limit: limit ? Number(limit) : undefined,
          offset: offset ? Number(offset) : undefined,
          order:
            filter.field && filter.sort
              ? [[filter.field, filter.sort]]
              : [['createdAt', 'desc']],
          transaction,
        });

    //    rows = await this._fillWithRelationsAndFilesForRows(
    //      rows,
    //      options,
    //    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit) {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike('tasks', 'title', query),
        ],
      };
    }

    const records = await db.tasks.findAll({
      attributes: ['id', 'title'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['title', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.title,
    }));
  }
};
