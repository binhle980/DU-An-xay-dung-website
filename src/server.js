const express = require("express");
const bodyParser = require("body-parser");
const viewEngine = require("./config/viewEngine");
const initWebRoutes = require("./route/web"); // SỬA THÀNH './route/web'
const initTeacherRoutes = require("./route/teacher"); // SỬA THÀNH './route/teacher'
const cors = require("cors");

let app = express();
app.use(cors({ origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);
initTeacherRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Backend Nodejs is running on port: " + port);
});