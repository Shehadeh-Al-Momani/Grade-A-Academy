const mainRouter = require("express").Router();

const adminRouter = require("./admin.route");
const instructorsRouter = require("./instructors.route");
const studentsRouter = require("./students.route");
const registrationRouter = require("./registration.route");
const chatRouter = require("./chat.route");

mainRouter.use("/adminRouter/", adminRouter);
mainRouter.use("/instructorsRouter/", instructorsRouter);
mainRouter.use("/studentsRouter/", studentsRouter);
mainRouter.use("/registrationRouter/", registrationRouter);
mainRouter.use("/chatRouter/", chatRouter);

module.exports = mainRouter;
