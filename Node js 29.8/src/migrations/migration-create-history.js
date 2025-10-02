'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ProjectHistories', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            project_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'Projects', key: 'id' }
            },
            action: {
                type: Sequelize.ENUM('created', 'approved', 'rejected', 'updated'),
                allowNull: false
            },
            old_status: {
                type: Sequelize.ENUM('pending', 'approved', 'rejected'),
                allowNull: true
            },
            new_status: {
                type: Sequelize.ENUM('pending', 'approved', 'rejected'),
                allowNull: false
            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            performed_by: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'Users', key: 'id' }
            },
            performed_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW')
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
        await queryInterface.dropTable('ProjectHistories');
    }
};
