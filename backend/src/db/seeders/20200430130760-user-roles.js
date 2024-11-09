const { v4: uuid } = require('uuid');

module.exports = {
  /**
   * @param{import("sequelize").QueryInterface} queryInterface
   * @return {Promise<void>}
   */
  async up(queryInterface) {
    const createdAt = new Date();
    const updatedAt = new Date();

    /** @type {Map<string, string>} */
    const idMap = new Map();

    /**
     * @param {string} key
     * @return {string}
     */
    function getId(key) {
      if (idMap.has(key)) {
        return idMap.get(key);
      }
      const id = uuid();
      idMap.set(key, id);
      return id;
    }

    await queryInterface.bulkInsert('roles', [
      {
        id: getId('Administrator'),
        name: 'Administrator',
        createdAt,
        updatedAt,
      },

      {
        id: getId('ProjectManager'),
        name: 'ProjectManager',
        createdAt,
        updatedAt,
      },

      {
        id: getId('TaskCoordinator'),
        name: 'TaskCoordinator',
        createdAt,
        updatedAt,
      },

      {
        id: getId('RewardManager'),
        name: 'RewardManager',
        createdAt,
        updatedAt,
      },

      { id: getId('Statistician'), name: 'Statistician', createdAt, updatedAt },

      { id: getId('Student'), name: 'Student', createdAt, updatedAt },
    ]);

    /**
     * @param {string} name
     */
    function createPermissions(name) {
      return [
        {
          id: getId(`CREATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `CREATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`READ_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `READ_${name.toUpperCase()}`,
        },
        {
          id: getId(`UPDATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `UPDATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`DELETE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `DELETE_${name.toUpperCase()}`,
        },
      ];
    }

    const entities = [
      'users',
      'rewards',
      'statistics',
      'tasks',
      'roles',
      'permissions',
      ,
    ];
    await queryInterface.bulkInsert(
      'permissions',
      entities.flatMap(createPermissions),
    );
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`READ_API_DOCS`),
        createdAt,
        updatedAt,
        name: `READ_API_DOCS`,
      },
    ]);
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`CREATE_SEARCH`),
        createdAt,
        updatedAt,
        name: `CREATE_SEARCH`,
      },
    ]);

    await queryInterface.sequelize
      .query(`create table "rolesPermissionsPermissions"
(
"createdAt"           timestamp with time zone not null,
"updatedAt"           timestamp with time zone not null,
"roles_permissionsId" uuid                     not null,
"permissionId"        uuid                     not null,
primary key ("roles_permissionsId", "permissionId")
);`);

    await queryInterface.bulkInsert('rolesPermissionsPermissions', [
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('CREATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('TaskCoordinator'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('TaskCoordinator'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('RewardManager'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('RewardManager'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Statistician'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Statistician'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Student'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Student'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('CREATE_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('READ_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('UPDATE_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('DELETE_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('TaskCoordinator'),
        permissionId: getId('READ_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('TaskCoordinator'),
        permissionId: getId('UPDATE_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('RewardManager'),
        permissionId: getId('CREATE_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('RewardManager'),
        permissionId: getId('READ_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('RewardManager'),
        permissionId: getId('UPDATE_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('RewardManager'),
        permissionId: getId('DELETE_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Statistician'),
        permissionId: getId('READ_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Statistician'),
        permissionId: getId('UPDATE_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Student'),
        permissionId: getId('READ_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Student'),
        permissionId: getId('UPDATE_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('CREATE_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('READ_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('UPDATE_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('DELETE_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('TaskCoordinator'),
        permissionId: getId('READ_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('TaskCoordinator'),
        permissionId: getId('UPDATE_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('RewardManager'),
        permissionId: getId('READ_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('RewardManager'),
        permissionId: getId('UPDATE_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Statistician'),
        permissionId: getId('CREATE_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Statistician'),
        permissionId: getId('READ_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Statistician'),
        permissionId: getId('UPDATE_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Statistician'),
        permissionId: getId('DELETE_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Student'),
        permissionId: getId('READ_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Student'),
        permissionId: getId('UPDATE_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('CREATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('READ_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('UPDATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('DELETE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('TaskCoordinator'),
        permissionId: getId('CREATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('TaskCoordinator'),
        permissionId: getId('READ_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('TaskCoordinator'),
        permissionId: getId('UPDATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('TaskCoordinator'),
        permissionId: getId('DELETE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('RewardManager'),
        permissionId: getId('READ_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('RewardManager'),
        permissionId: getId('UPDATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Statistician'),
        permissionId: getId('READ_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Statistician'),
        permissionId: getId('UPDATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Student'),
        permissionId: getId('READ_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Student'),
        permissionId: getId('UPDATE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('ProjectManager'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('TaskCoordinator'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('RewardManager'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Statistician'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Student'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_REWARDS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_REWARDS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_REWARDS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_REWARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_STATISTICS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_STATISTICS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_STATISTICS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_STATISTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_ROLES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_PERMISSIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_API_DOCS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_SEARCH'),
      },
    ]);

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'SuperAdmin',
      )}' WHERE "email"='super_admin@flatlogic.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'Administrator',
      )}' WHERE "email"='admin@flatlogic.com'`,
    );

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'ProjectManager',
      )}' WHERE "email"='client@hello.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'TaskCoordinator',
      )}' WHERE "email"='john@doe.com'`,
    );
  },
};
