'use strict';

const hashPasswords = require('../helpers/hashPassword')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Profile extends Model{}

  Profile.init({
    username: {type : DataTypes.STRING,
      validate:{
      isUnique(){
        return Profile.findOne({where:{username:this.username}})
        .then(uname=>{
          if(uname){
            throw new Error
          }
        })
      }}},
    password: DataTypes.STRING,
    email: {type:DataTypes.STRING,
      validate:{
        isUnique(){
          return Profile.findOne({where:{email:this.email}})
          .then(email=>{
            if(email){
              throw new Error
            }
          })
        } , isEmail : true}
      },
    salt : DataTypes.STRING,
    score : DataTypes.INTEGER
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