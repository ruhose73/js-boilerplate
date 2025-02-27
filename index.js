import express from "express";
import { config } from "dotenv";
import cors from "cors";

config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());


const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`App has been started on port: ${PORT} `)
    );
  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1);
  }
};
start();
