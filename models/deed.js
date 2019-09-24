'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Deed extends Model{}

  Deed.init({
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {sequelize,modelName:"Deed"});



  Deed.associate = function(models) {
    Deed.belongsToMany(models.Profile,{through:models.ProfileDeed})
  };
  return Deed;
};