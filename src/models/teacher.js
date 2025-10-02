'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Teacher extends Model {
        static associate(models) {
            // define association here
        }
    }
    Teacher.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        degree: DataTypes.STRING,
        specialty: {
            type: DataTypes.STRING,
            allowNull: false
        },
        introduction: DataTypes.TEXT,
        experience: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Teacher',
        tableName: 'teachers'
    });
    return Teacher;
};