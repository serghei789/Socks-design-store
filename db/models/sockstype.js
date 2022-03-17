'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sockstype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Color, { foreignKey: 'colorId' })
      this.belongsTo(models.Ornament, { foreignKey: 'ornamentId' })
      this.belongsTo(models.Picture, { foreignKey: 'pictureId' })
      this.hasMany(models.Order, { foreignKey: 'socksId' })
      this.hasMany(models.Favourite, { foreignKey: 'socksId' })
    }
  }
  Sockstype.init({
    colorId: DataTypes.INTEGER,
    ornamentId: DataTypes.INTEGER,
    pictureId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sockstype',
  });
  return Sockstype;
};
