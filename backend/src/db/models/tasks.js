const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const tasks = sequelize.define(
    'tasks',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      title: {
        type: DataTypes.TEXT,
      },

      description: {
        type: DataTypes.TEXT,
      },

      hardness_level: {
        type: DataTypes.ENUM,

        values: ['easy', 'medium', 'hard'],
      },

      deadline: {
        type: DataTypes.DATE,
      },

      urgency_level: {
        type: DataTypes.ENUM,

        values: ['urgent', 'non-urgent'],
      },

      point_value: {
        type: DataTypes.DECIMAL,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  tasks.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.tasks.belongsTo(db.users, {
      as: 'user',
      foreignKey: {
        name: 'userId',
      },
      constraints: false,
    });

    db.tasks.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.tasks.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return tasks;
};
