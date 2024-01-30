'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Roles', [{
      name: 'User',
      description: 'Client',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
    await queryInterface.bulkInsert('Roles', [{
      name: 'Dev',
      description: 'Developer',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});

  }
};
