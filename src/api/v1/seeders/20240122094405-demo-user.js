'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
    async up(queryInterface, Sequelize) {
        // const salt = bcrypt.genSaltSync(12);
        // const hash = bcrypt.hashSync("123456", salt);
        await queryInterface.bulkInsert('Users', [{
            firstName: 'John',
            lastName: 'Doe',
            email: 'example@example.com',
            password: '0123456',
            phone: 123456,
            roleId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            firstName: 'Admin',
            lastName: 'Thanh',
            email: 'Admin@example.com',
            password: '0123456',
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