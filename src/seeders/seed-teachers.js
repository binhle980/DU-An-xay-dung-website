// src/seeders/seed-teachers.js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Teachers', [
            {
                name: 'TS. Nguyễn Văn A',
                degree: 'Tiến sĩ',
                specialty: 'Công nghệ phần mềm',
                introduction: 'Giảng viên có 10 năm kinh nghiệm trong lĩnh vực CNTT',
                experience: '10 năm',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'TBS. Trần Thị B',
                degree: 'Thạc sĩ',
                specialty: 'Trí tuệ nhân tạo',
                introduction: 'Chuyên gia về Machine Learning và Deep Learning',
                experience: '7 năm',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'PGS.TS. Lê Văn C',
                degree: 'Phó Giáo sư, Tiến sĩ',
                specialty: 'Hệ thống thông tin',
                introduction: 'Nghiên cứu viên cao cấp với nhiều công trình khoa học',
                experience: '15 năm',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Teachers', null, {});
    }
};