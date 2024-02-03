'use strict';
const {
    Model
} = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.belongsTo(models.Role, {
                as: 'roleData',
                foreignKey: 'roleId',

            })

        }
    }
    User.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: {

            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: DataTypes.INTEGER,
        address: DataTypes.STRING,
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'roleId',
            defaultValue: 1
        }
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users'
    });
    return User;
};