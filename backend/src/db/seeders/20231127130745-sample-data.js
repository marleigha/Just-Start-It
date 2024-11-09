const db = require('../models');
const Users = db.users;

const Rewards = db.rewards;

const Statistics = db.statistics;

const Tasks = db.tasks;

const RewardsData = [
  {
    name: 'Movie Night',

    points_required: 150,

    // type code here for "relation_one" field
  },

  {
    name: 'New Book',

    points_required: 200,

    // type code here for "relation_one" field
  },

  {
    name: 'Ice Cream Treat',

    points_required: 50,

    // type code here for "relation_one" field
  },

  {
    name: 'Video Game Session',

    points_required: 100,

    // type code here for "relation_one" field
  },

  {
    name: 'Day Off',

    points_required: 300,

    // type code here for "relation_one" field
  },
];

const StatisticsData = [
  {
    start_date: new Date('2023-10-01T00:00:00Z'),

    end_date: new Date('2023-10-31T23:59:59Z'),

    // type code here for "relation_one" field
  },

  {
    start_date: new Date('2023-10-01T00:00:00Z'),

    end_date: new Date('2023-10-31T23:59:59Z'),

    // type code here for "relation_one" field
  },

  {
    start_date: new Date('2023-10-01T00:00:00Z'),

    end_date: new Date('2023-10-31T23:59:59Z'),

    // type code here for "relation_one" field
  },

  {
    start_date: new Date('2023-10-01T00:00:00Z'),

    end_date: new Date('2023-10-31T23:59:59Z'),

    // type code here for "relation_one" field
  },

  {
    start_date: new Date('2023-10-01T00:00:00Z'),

    end_date: new Date('2023-10-31T23:59:59Z'),

    // type code here for "relation_one" field
  },
];

const TasksData = [
  {
    title: 'Math Homework',

    description: 'Complete exercises 1 to 10 from chapter 5.',

    hardness_level: 'hard',

    deadline: new Date('2023-11-10T15:00:00Z'),

    urgency_level: 'urgent',

    point_value: 50,

    // type code here for "relation_one" field
  },

  {
    title: 'Science Project',

    description: 'Prepare a presentation on renewable energy.',

    hardness_level: 'medium',

    deadline: new Date('2023-11-15T10:00:00Z'),

    urgency_level: 'non-urgent',

    point_value: 100,

    // type code here for "relation_one" field
  },

  {
    title: 'History Essay',

    description: 'Write an essay on the Industrial Revolution.',

    hardness_level: 'easy',

    deadline: new Date('2023-11-20T12:00:00Z'),

    urgency_level: 'non-urgent',

    point_value: 80,

    // type code here for "relation_one" field
  },

  {
    title: 'Art Assignment',

    description: 'Create a painting inspired by nature.',

    hardness_level: 'medium',

    deadline: new Date('2023-11-25T09:00:00Z'),

    urgency_level: 'non-urgent',

    point_value: 30,

    // type code here for "relation_one" field
  },

  {
    title: 'Computer Science Quiz',

    description: 'Study chapters 3 and 4 for the quiz.',

    hardness_level: 'hard',

    deadline: new Date('2023-11-18T14:00:00Z'),

    urgency_level: 'non-urgent',

    point_value: 40,

    // type code here for "relation_one" field
  },
];

// Similar logic for "relation_many"

async function associateRewardWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Reward0 = await Rewards.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Reward0?.setUser) {
    await Reward0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Reward1 = await Rewards.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Reward1?.setUser) {
    await Reward1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Reward2 = await Rewards.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Reward2?.setUser) {
    await Reward2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Reward3 = await Rewards.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Reward3?.setUser) {
    await Reward3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Reward4 = await Rewards.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Reward4?.setUser) {
    await Reward4.setUser(relatedUser4);
  }
}

async function associateStatisticWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Statistic0 = await Statistics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Statistic0?.setUser) {
    await Statistic0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Statistic1 = await Statistics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Statistic1?.setUser) {
    await Statistic1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Statistic2 = await Statistics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Statistic2?.setUser) {
    await Statistic2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Statistic3 = await Statistics.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Statistic3?.setUser) {
    await Statistic3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Statistic4 = await Statistics.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Statistic4?.setUser) {
    await Statistic4.setUser(relatedUser4);
  }
}

async function associateTaskWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task0 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Task0?.setUser) {
    await Task0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task1 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Task1?.setUser) {
    await Task1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task2 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Task2?.setUser) {
    await Task2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task3 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Task3?.setUser) {
    await Task3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task4 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Task4?.setUser) {
    await Task4.setUser(relatedUser4);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Rewards.bulkCreate(RewardsData);

    await Statistics.bulkCreate(StatisticsData);

    await Tasks.bulkCreate(TasksData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateRewardWithUser(),

      await associateStatisticWithUser(),

      await associateTaskWithUser(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('rewards', null, {});

    await queryInterface.bulkDelete('statistics', null, {});

    await queryInterface.bulkDelete('tasks', null, {});
  },
};
