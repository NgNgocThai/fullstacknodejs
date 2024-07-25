'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: '1234567',
        firstName: 'NgocThai',
        lastName: 'Nguyen',
        address: 'VN',
        phoneNumber: 966315280,
        gender: 1,
        image: 'admin.jpg',
        roleId: 'R1',
        positionId: 'doctor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
