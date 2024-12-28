const multer = require("multer");
const path = require("path");

// Set storage engine for product images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/productImages/"); // Directory to save the uploaded product images
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`); // Rename the file with a timestamp
  },
});

// Set file filter for product images (allow only images)
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
    return cb(new Error("Only images are allowed"), false);
  }
  cb(null, true);
};

// Initialize multer with file size limit and file filter
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5 MB
});

module.exports = upload;
