'use strict';

const hashPasswords = require('../helpers/hashPassword')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Profile extends Model{}

  Profile.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    salt : DataTypes.STRING
  }, {hooks:{beforeCreate:(profile,options)=>{
    let salt = String(Math.random()*4444)
      let passwordInput = `${profile.dataValues.password}`
      let pass = hashPasswords(passwordInput,salt)
      profile.setDataValue('password',pass)
      profile.setDataValue('salt',salt)
  }},sequelize,modelName : "Profile"});


  Profile.associate = function(models) {
  Profile.belongsToMany(models.Deed,{through:models.ProfileDeed})
  };
  return Profile;
};