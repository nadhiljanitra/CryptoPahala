'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class ProfileDeed extends Model{

    

  }


  ProfileDeed.init({
    ProfileId: DataTypes.INTEGER,
    DeedId: DataTypes.INTEGER
  }, {sequelize,modelName:"ProfileDeed"});



  ProfileDeed.associate = function(models) {
  
  };
  return ProfileDeed;
};