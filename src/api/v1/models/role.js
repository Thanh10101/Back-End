'use strict';
const {
    Model
} = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Role.hasMany(models.User, {
                as: 'userData',
                foreignKey: 'roleId',
            })
            Role.belongsToMany(models.Route, {
                as: 'routeData',
                through: 'roleRoute',
                foreignKey: 'roleId',
            })
        }
    }
    Role.init({

        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Role',
        // tableName: 'roles'
    });

    return Role;
};