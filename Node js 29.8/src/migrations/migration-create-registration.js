'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Registrations', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            student_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'Users', key: 'id' }
            },
            project_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'Projects', key: 'id' }
            },
            status: {
                type: Sequelize.ENUM('pending', 'approved', 'rejected'),
                defaultValue: 'pending'
            },
            registered_at: {
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
        await queryInterface.dropTable('Registrations');
    }
};
