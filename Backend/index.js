import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import KosRoute from "./routes/KosRoute.js";
import CheckoutRoute from "./routes/CheckoutRoute.js";

const app = express();
const Connection = async () => {
  const URL = `mongodb+srv://zahro:12345@cluster0.otgfprn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  try {
    await mongoose.connect(URL);
    console.log("Berhasil Konek")
  } catch (error) {
    console.log("Gagal", error);
  }
}


const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database..."));

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(KosRoute);
app.use(CheckoutRoute);

app.listen(5000, () => {
  console.log("Server started...");
  Connection();
});

export default Connection;
