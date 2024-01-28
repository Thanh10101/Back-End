'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      phone: 123456,
      createdAt: new Date(),
      updatedAt: new Date(),
      Roleid: 1
    }], {})
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Admin',
      lastName: 'Thanh',
      email: 'Admin@example.com',
      phone: 999999,
      createdAt: new Date(),
      updatedAt: new Date(),
      Roleid: 2
    }], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});

  }
};
