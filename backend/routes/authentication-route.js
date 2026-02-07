const express = require("express");
const router = express.Router();
const auth_controller = require("../controller/auth-controller");
const authmiddleware = require("./authmiddleware");

router.post("/register", auth_controller.register);
router.post("/verify", auth_controller.verifyotp);
router.post("/login", auth_controller.login);
router.post("/pop-close", auth_controller.pop_close);

router.get("/user", authmiddleware, auth_controller.user);

router.post("/create_posts", authmiddleware, auth_controller.create_posts);
router.get("/view_posts", authmiddleware, auth_controller.view_posts);
router.get("/view_my_posts", authmiddleware, auth_controller.view_my_posts);

router.delete(
  "/myposts/:postId",
  authmiddleware,
  auth_controller.delete_my_posts
);

router.get("/public_posts", auth_controller.public_posts);

router.post("/contactresponse", auth_controller.contactresponse);

router.get("/myposts/:postId", authmiddleware, auth_controller.get_single_post);

router.put("/myposts/:postId", authmiddleware, auth_controller.update_my_post);

module.exports = router;
