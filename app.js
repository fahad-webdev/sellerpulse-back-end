const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitze = require("express-mongo-sanitize");
const xss = require("xss-clean");
const path = require("path");
const productRouter = require("./routes/auth-route");
const authRoutes = require("./routes/userRoutes");
const userVerificationRoutes = require("./routes/userVerificationRoutes");
const resetPasswordRoutes = require("./routes/forgotPasswordRouters");
const connectStoreRoutes = require("./routes/connectStoreRoutes");
const cors = require("cors");

const session = require("express-session");

const app = express();

//middleware
//security HTTP headers
app.use(cors({
  origin: 'http://localhost:5173',  // Your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,  // Allow credentials (cookies)
}))

app.use(helmet());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

const limiter = rateLimit({
  max: 500,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", limiter);

//DATA SANITIZATION AGAINST NOSQL QUERY INJECTION
app.use(mongoSanitze());
//DATA SANITIZATION AGAINST XSS
app.use(xss());

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Welcome to SellerPulse backend",
  });
});

app.use("/api/v1/connect", connectStoreRoutes);
app.use("/api/v1/auth/", productRouter);// /api/v1/auth/shopify-products
app.use("/api/v1/users/", authRoutes);//  /api/v1/users/login
app.use("/api/v1/user-verification/", userVerificationRoutes);
app.use("/api/v1/password-reset/", resetPasswordRoutes);

app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

module.exports = app;
