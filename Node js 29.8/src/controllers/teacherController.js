const db = require("../models");
const Teacher = db.Teacher;

const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.findAll({
            attributes: ['id', 'name', 'degree', 'specialty', 'introduction', 'experience'],
            raw: true
        });

        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            data: teachers
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            errCode: -1,
            errMessage: "Error from server"
        });
    }
};

const getTeacherById = async (req, res) => {
    try {
        const teacherId = req.query.id;
        if (!teacherId) {
            return res.status(400).json({
                errCode: 1,
                errMessage: "Missing required parameter"
            });
        }

        const teacher = await Teacher.findOne({
            where: { id: teacherId },
            attributes: ['id', 'name', 'degree', 'specialty', 'introduction', 'experience'],
            raw: true
        });

        if (!teacher) {
            return res.status(404).json({
                errCode: 2,
                errMessage: "Teacher not found"
            });
        }

        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            data: teacher
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            errCode: -1,
            errMessage: "Error from server"
        });
    }
};

module.exports = {
    getAllTeachers,
    getTeacherById
};