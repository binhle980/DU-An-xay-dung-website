'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        static associate(models) {
            History.belongsTo(models.Project, { foreignKey: 'project_id' });
            History.belongsTo(models.User, { foreignKey: 'performed_by' });
        }
    }

    History.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        action: {
            type: DataTypes.ENUM('created', 'approved', 'rejected', 'updated'),
            allowNull: false
        },
        old_status: {
            type: DataTypes.ENUM('pending', 'approved', 'rejected'),
            allowNull: true
        },
        new_status: {
            type: DataTypes.ENUM('pending', 'approved', 'rejected'),
            allowNull: false
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        performed_by: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        performed_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        sequelize,
        modelName: 'History',
    });

    return History;
};
