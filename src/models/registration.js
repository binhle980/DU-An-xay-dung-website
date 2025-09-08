'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Registration extends Model {
        static associate(models) {
            Registration.belongsTo(models.User, { foreignKey: 'student_id' });
            Registration.belongsTo(models.Project, { foreignKey: 'project_id' });
        }
    }

    Registration.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('pending', 'approved', 'rejected'),
            defaultValue: 'pending'
        },
        registered_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        sequelize,
        modelName: 'Registration',
    });

    return Registration;
};
