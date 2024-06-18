import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import productRouter from './routes/productRouter.js'

dotenv.config();
export const { PORT, DB_HOST } = process.env;

const app = express();

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log("DataBase is connected successfuly");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

app.use(cors());
app.use(express.json());


app.use('/products', productRouter)

app.use((_, res) => {
  res.status(404).json({ message: "Rout not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error!!!" } = error;
  res.status(status).json({ message });
});
