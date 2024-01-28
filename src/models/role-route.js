'use strict';
const {
    Model
} = require('sequelize')
const Role = require('../models/role')
const Route = require('../models/route')

module.exports = (sequelize, DataTypes) => {
    class roleRoute extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            roleRoute.belongsTo(models.Role, {
                foreignKey: 'roleId',
                as: 'roleData'
            })
            roleRoute.belongsTo(models.Route, {
                foreignKey: 'routeId',
                as: 'routeData'
            })
        }
    }
    roleRoute.init({
        roleId: {
            type: DataTypes.INTEGER,
            field: 'roleId'
        },
        routeId: {
            type: DataTypes.INTEGER,
            field: 'routeId'
        }
    }, {
        sequelize,
        modelName: 'roleRoute',
        tableName: 'roleRoutes'
    });
    return roleRoute;
};