'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Remove the problematic column
    await queryInterface.dropTable('techblogmvc_db');
    // Recreate the table without the problematic column
    await queryInterface.createTable('techblogmvc_db', {
      // Define your table columns here, excluding the problematic one
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Reverse the operations performed in the `up` function
  },
};
