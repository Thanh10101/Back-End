'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('roleRoutes', [{
      Roleid: 1,
      Routeid: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
    await queryInterface.bulkInsert('roleRoutes', [{
      Roleid: 1,
      Routeid: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
    await queryInterface.bulkInsert('roleRoutes', [{
      Roleid: 2,
      Routeid: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roleRoutes', null, {});

  }
};
