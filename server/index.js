import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use(cors(["http://localhost:3000/"]));

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
