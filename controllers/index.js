const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");

router.use("/", homeRoutes);
router.use("/posts", postRoutes);
router.use("/users", userRoutes);

module.exports = router;
