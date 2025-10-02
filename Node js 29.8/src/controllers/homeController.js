import db from "../models/index";
import CRUDService from "../services/CRUDService";

// Trang chủ
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll({ raw: true });
        return res.render("homepage.ejs", {
            data: JSON.stringify(data),
        });
    } catch (e) {
        console.error("Error in getHomePage:", e);
        return res.status(500).send("Internal Server Error");
    }
};

// Trang About
let getAboutPage = (req, res) => {
    return res.render("test/about.ejs");
};

// Form CRUD
let getCRUD = (req, res) => {
    return res.render("crud.ejs");
};

// Xử lý tạo user
let postCRUD = async (req, res) => {
    try {
        await CRUDService.createNewUser(req.body);
        return res.redirect("/get-crud"); // Sau khi tạo xong thì redirect ra danh sách
    } catch (e) {
        console.error("Error in postCRUD:", e);
        return res.status(500).send("Internal Server Error");
    }
};

// Hiển thị tất cả user
let displayGetCRUD = async (req, res) => {
    try {
        let data = await CRUDService.getAllUsers();
        return res.render("displayCRUD.ejs", {
            dataTable: data,
        });
    } catch (e) {
        console.error("Error in displayGetCRUD:", e);
        return res.status(500).send("Internal Server Error");
    }
};

// Lấy thông tin user để edit
let getEditCRUD = async (req, res) => {
    try {
        let userId = req.query.id;
        if (userId) {
            let userData = await CRUDService.getUserInfoById(userId);
            if (userData) {
                return res.render("editCRUD.ejs", { user: userData });
            } else {
                return res.send("User not found!");
            }
        } else {
            return res.send("User ID not provided!");
        }
    } catch (e) {
        console.error("Error in getEditCRUD:", e);
        return res.status(500).send("Internal Server Error");
    }
};

// Cập nhật user
let putCRUD = async (req, res) => {
    try {
        let allUsers = await CRUDService.updateUserData(req.body);
        return res.render("displayCRUD.ejs", { dataTable: allUsers });
    } catch (e) {
        console.error("Error in putCRUD:", e);
        return res.status(500).send("Internal Server Error");
    }
};

// Xoá user
let deleteCRUD = async (req, res) => {
    try {
        let id = req.query.id;
        if (!id) {
            return res.status(400).send("Missing user id");
        }

        await db.User.destroy({ where: { id: id } });
        return res.redirect("/get-crud");
    } catch (e) {
        console.error("Error in deleteCRUD:", e);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD,
    postCRUD,
    displayGetCRUD,
    getEditCRUD,
    putCRUD,
    deleteCRUD,
};
