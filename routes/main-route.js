const mainRouter = require("express").Router();
const db = require("../db");

const adminRouter = require("./admin.route");
const instructorsRouter = require("./instructors.route");
const studentsRouter = require("./students.route");
const registrationRouter = require("./registration.route");

mainRouter.use("/admin/", adminRouter);
mainRouter.use("/instructors/", instructorsRouter);
mainRouter.use("/students/", studentsRouter);
mainRouter.use("/registration/", registrationRouter);

module.exports = mainRouter;
