const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const upload = require("../utils/multer");
const {
  validateUserProfileUpdate,
  validateAddress,
  validatePasswordChange,
} = require("../validators/Auth-validators");
const { protect } = authController;

router.get(
  "/get-all-users",
  authController.protect,
  authController.restrictedTo("admin"),
  userController.getAllUsers
);

// Route for user signup
router.post("/signup", authController.signup);

// Route for user login
router.post("/login", authController.login);

// Protect all routes below this point
router.use(protect);

router.use(authController.protect); // Middleware to protect routes below

router.get("/me", (req, res) => {
  res.status(200).json({
    status: "success",
    data: { user: req.user },
  });
});

router.put(
  "/manage-profile",
  authController.protect, // Check if the user is logged in
  validateUserProfileUpdate, // Validate the input
  userController.manageUserProfile // Update the user profile
);

router.put(
  "/manage-address",
  authController.protect,
  validateAddress,
  userController.updateAddress
);
router.put(
  "/change-password",
  authController.protect, // Middleware to authenticate the user
  validatePasswordChange, // Middleware to validate password fields
  userController.changePassword // Controller to change the password
);

router.patch("/updateProfile/:userId", userController.updateUserProfile);
router.post(
  "/uploadProfilePicture/:userId",
  upload.single("profilePicture"),
  userController.uploadProfilePicture
);
router.delete(
  "/deleteProfilePicture/:userId",
  userController.deleteProfilePicture
);

// Route for user logout
router.get("/logout", authController.logout);

module.exports = router;
