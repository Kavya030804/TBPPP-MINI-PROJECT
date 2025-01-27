
// require("dotenv").config(); // Load environment variables from .env file
// const express = require("express");
// const app = express();

// const bodyParser = require("body-parser");
// const cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");
// const mongoose = require("mongoose");

// const port = process.env.PORT || 4000;

// // Middleware for security, CORS, logging, and parsing requests
// app.use(helmet());
// app.use(cors());

// const userRouter = require("./main/routers/user_router");
// const ticketRouter = require("./main/routers/ticket_router");

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB connected successfully"))
//   .catch((error) => console.error("MongoDB connection error:", error));

// // Log MongoDB URL for debugging
// console.log("MONGO_URL:", process.env.MONGO_URL);

// if (process.env.NODE_ENV !== "production") {
//   const mDb = mongoose.connection;
//   mDb.on("open", () => {
//     console.log("MongoDB is connected");
//   });
//   mDb.on("error", (error) => {
//     console.error("MongoDB connection error:", error);
//   });
// }

// // Middleware for logging and parsing requests
// app.use(morgan("tiny"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // API Routes
// app.use("/v1/user", userRouter);
// app.use("/v1/ticket", ticketRouter);

// // Handle 404 Errors
// app.use((req, res, next) => {
//   const error = new Error("Resource not found");
//   error.status = 404;
//   next(error);
// });

// // Centralized Error Handling
// const handleError = require("./main/utils/errorHandler");
// app.use((error, req, res, next) => {
//   handleError(error, res); // Pass the error to your error handler utility
// });

// // Start the Server
// app.listen(port, () => {
//   console.log(`API is running on http://localhost:${port}`);
// });




require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

const port = process.env.PORT || 4000;

// Middleware for security, CORS, logging, and parsing requests
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routers
const userRouter = require("./main/routers/user_router");

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.error("MongoDB connection error:", error));

console.log("MONGO_URL:", process.env.MONGO_URL);

// Routes
app.use("/v1/user", userRouter);

// Handle 404 Errors
app.use((req, res, next) => {
  const error = new Error("Resource not found");
  error.status = 404;
  next(error);
});

// Centralized Error Handling
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    status: "error",
    message: error.message || "Internal Server Error",
  });
});

// Start the Server
app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});