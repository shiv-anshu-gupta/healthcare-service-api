const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const servicesRouter = require("./routes/services");

const app = express();
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/healthcare", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB:", error));

// Serve static files
app.use(express.static("public"));

// Routes
app.use("/api/services", servicesRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
