const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Invalid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      select: false, // Exclude password from query results by default
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    profilePicture: {
      type: String, // URL for the profile picture
      default: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?ga=GA1.1.982723520.1687694613&semt=ais_hybrid", // Default profile picture
    },
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notification", // Reference to the Notification model
      },
    ],
    otps: [
      {
        otp: {
          type: String, // To store the OTP
        },
        otpExpires: {
          type: Date, // When the OTP expires
        },
      },
    ],
    isVerified: {
      type: Boolean,
      default: false, // Defaults to unverified
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "other",
    },
    phone: {
      type: String,
      unique: true,
      sparse: true, // Allows null values for unique constraint
    },
    passwordChangedAt: Date, // Tracks when the password was last changed
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set creation date
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt
  }
);

/*===========================================================
        Middleware to Hash Password Before Saving
===========================================================*/
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Only hash password if modified
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordChangedAt = Date.now() - 1000; // Ensure the timestamp is set before the JWT
  next();
});

/*===========================================================
        Instance Methods
===========================================================*/
// Compare entered password with hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Check if password was changed after the token was issued
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false; // Password not changed
};

// Generate JWT for authentication
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

/*===========================================================
        Static Methods (Optional)
===========================================================*/
// Find verified users
userSchema.statics.findVerified = function () {
  return this.find({ isVerified: true });
};

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
