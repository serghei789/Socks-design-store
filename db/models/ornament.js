'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ornament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Sockstype, { foreignKey: 'ornamentId' })
    }
  }
  Ornament.init({
    name: DataTypes.STRING,
    src: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Ornament',
  });
  return Ornament;
};
