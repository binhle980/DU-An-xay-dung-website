'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Projects', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW')
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW')
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Projects');
    }
};
