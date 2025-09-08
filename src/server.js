import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";

let app = express();

// cấu hình body-parser để đọc dữ liệu từ form và JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cấu hình view engine (EJS)
viewEngine(app);

// cấu hình routes
initWebRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Backend Nodejs is running on port: " + port);
});
