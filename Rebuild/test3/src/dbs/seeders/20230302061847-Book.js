"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Books",
      [
        {
          isbn: "978-602-03-2478-4",
          judul: "Hujan",
          author_id: 1,
          pub_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          isbn: "978-602-9474-03-9",
          judul : "Berjuta Rasanya",
          author_id: 1,
          pub_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          isbn: "979-3062-92-4",
          judul : "Sang Pemimpi",
          author_id: 2,
          pub_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          isbn: "978-602-7870-41-3",
          judul : "Dilan 1",
          author_id: 3,
          pub_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          isbn: "978-979-1227-78-0",
          judul : "Perahu Kertas",
          author_id: 4,
          pub_id: 3,
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
    await queryInterface.bulkDelete('Books', null, {});

  },
};
