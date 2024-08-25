import express, { Request, Response } from "express";
import { port, nodeEnv } from "./config";

const app = express();
console.log(`Environment: ${nodeEnv}`);
console.log(`Port: ${port}`);

app.use(express.json());

app.get("/hello-world", (req: Request, res: Response) => {
  res.json({ message: "Hello, World!!!" });
});

app.post("/echo-message", (req: Request, res: Response) => {
  if (!req.body.message) {
    return res.status(400).json({ error: "Message is required" });
  }

  res.json(req.body.message);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
