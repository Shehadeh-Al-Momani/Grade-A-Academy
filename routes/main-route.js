const mainRouter = require("express").Router();

const adminRouter = require("./admin.route");
const instructorsRouter = require("./instructors.route");
const studentsRouter = require("./students.route");
const registrationRouter = require("./registration.route");
const chatRouter = require("./chat.route");

mainRouter.use("/admin/", adminRouter);
mainRouter.use("/instructors/", instructorsRouter);
mainRouter.use("/students/", studentsRouter);
mainRouter.use("/registration/", registrationRouter);
mainRouter.use("/chat/", chatRouter);

module.exports = mainRouter;
