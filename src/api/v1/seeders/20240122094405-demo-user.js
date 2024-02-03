'use strict';


module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Users', [{
            firstName: 'John',
            lastName: 'Doe',
            email: 'example@example.com',
            password: '123456',
            phone: 123456,
            roleId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {})
        await queryInterface.bulkInsert('Users', [{
            firstName: 'Admin',
            lastName: 'Thanh',
            email: 'Admin@example.com',
            password: '123456',
            phone: 999999,
            roleId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});

    }
};