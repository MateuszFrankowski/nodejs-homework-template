import express, { Router } from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "./routes/api/contacts.js";
export const api = Router();
export const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(morgan(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/api/contacts", router);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
