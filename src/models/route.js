'use strict';
const {
  Model
} = require('sequelize')


module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Route.belongsToMany(models.Role, {
        as: 'roleData',
        through: 'roleRoute',
        foreignKey: 'routeId'
      })
    }
  }
  Route.init({
    url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Route',
    tableName: 'Routes'
  });
  return Route;
};