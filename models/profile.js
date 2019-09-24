'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Profile extends Model{}

  Profile.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {sequelize,modelName : "Profile"});


  Profile.associate = function(models) {
  Profile.belongsToMany(models.Deed,{through:models.ProfileDeed})
  };
  return Profile;
};