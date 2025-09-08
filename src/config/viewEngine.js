import express from "express";

let viewEngine = (app) => {
    app.use(express.static("./src/public")); // nơi chứa file tĩnh
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
};

module.exports = viewEngine;