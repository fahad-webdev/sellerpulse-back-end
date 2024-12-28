const { z } = require("zod");
const { check } = require("express-validator");

const SignupSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "username should atleast contain more than 3 letters" })
    .max(30, { message: "username should be less than 30 letters" }),

  email: z
    .string({ required_error: "E-mail is required" })
    .trim()
    .min(15, { message: "E-mail should atleast contain more than 15 letters" })
    .max(50, { message: "E-mail should be less than 50 letters" }),

  password: z
    .string({ required_error: "Password is required " })
    .trim()
    .min(6, { message: "password should atleast contain more than 6 letters" })
    .max(30, { message: "password should be less than 30 letters" }),
});

const LoginSchema = z.object({
  email: z
    .string({ required_error: "E-mail is required" })
    .trim()
    .min(15, { message: "E-mail should atleast contain more than 15 letters" })
    .max(50, { message: "E-mail should be less than 50 letters" }),

  password: z
    .string({ required_error: "Password is required " })
    .trim()
    .min(6, { message: "password should atleast contain more than 6 letters" })
    .max(30, { message: "password should be less than 30 letters" }),
});

const validateUserProfileUpdate = [
  check("name")
    .optional()
    .isString()
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be between 2 and 50 characters."),
  check("email")
    .optional()
    .isEmail()
    .withMessage("Invalid email address."),
  check("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),
];

const validateAddress = [
  // Validate province
  check("address.province")
    .optional() // Field is optional
    .isString()
    .withMessage("Province must be a string.")
    .isLength({ min: 2, max: 50 })
    .withMessage("Province must be between 2 and 50 characters."),

  // Validate city
  check("address.city")
    .optional() // Field is optional
    .isString()
    .withMessage("City must be a string.")
    .isLength({ min: 2, max: 50 })
    .withMessage("City must be between 2 and 50 characters."),

  // Validate address
  check("address.address")
    .optional() // Field is optional
    .isString()
    .withMessage("Address must be a string.")
    .isLength({ min: 5, max: 200 })
    .withMessage("Address must be between 5 and 200 characters."),
];
const validatePasswordChange = [
  check("password")
    .isString()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),
  check("confirmPassword")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords do not match."),
];

module.exports = {
  validateUserProfileUpdate,
  validateAddress,
  validatePasswordChange,
  SignupSchema,
  LoginSchema,
};
