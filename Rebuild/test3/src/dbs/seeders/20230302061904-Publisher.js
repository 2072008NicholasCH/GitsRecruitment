'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   nama: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Publishers', [
      {
        nama: 'Gramedia Pustaka Utama',
        kota: 'Jakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Mahaka Publishing',
        kota: 'Jakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Bentang Pustaka',
        kota: 'Yogyakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Mizan Digital Publishing',
        kota: 'Jakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Penerbit Erlangga',
        kota: 'Jakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], {});
    },
  
    async down (queryInterface, Sequelize) {
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
      await queryInterface.bulkDelete('Authors', null, {});
    }
  };
  