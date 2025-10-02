const express = require("express");
const teacherController = require("../controllers/teacherController");

let router = express.Router();

const initTeacherRoutes = (app) => {
    router.get("/api/get-all-teachers", teacherController.getAllTeachers);
    router.get("/api/get-teacher-by-id", teacherController.getTeacherById);

    app.use("/", router);
};

module.exports = initTeacherRoutes;