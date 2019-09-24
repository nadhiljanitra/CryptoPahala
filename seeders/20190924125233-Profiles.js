'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Profiles',[{
      username : 'JohnDoe',
      password : 'johndoe',
      email : 'johndoe@dummy.com',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username : 'JaneDoe',
      password : 'janedoe',
      email : 'janedoe@dummy.com',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username : 'BrandyGlass',
      password : 'brandyglass',
      email : 'brandyglass@dummy.com',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username : 'DevonteWare',
      password : 'devonteware',
      email : 'devonteware@dummy.com',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username : 'AmeeraFrench',
      password : 'ameerafrench',
      email : 'ameerafrench@dummy.com',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username : 'MatthewMoran',
      password : 'matthewmoran',
      email : 'matthewmoran@dummy.com',
      createdAt : new Date(),
      updatedAt : new Date()
    }],{});


  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Profiles',{})
  }
};
