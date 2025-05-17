const express = require("express");

const router = require("./routes/user.routes");

const app = express();

const logger = require("./middleware/logger");

app.use(express.json());

require("dotenv").config();

const  connectDB  = require("./db/connectDB");

app.use(logger);

app.use("/members", router);


app.use((req, res) => {
  res.status(404).json({ message: "not found" });
});


const port = process.env.PORT || 3000;
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log("Database connection failed", error);
  }
};

startServer();
