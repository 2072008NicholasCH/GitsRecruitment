"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   nama: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Authors",
      [
        {
          nama: "Tere Liye",
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Andrea Hirata",
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Pidi Baiq",
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Dee Lestari",
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Authors", null, {});
  },
};
