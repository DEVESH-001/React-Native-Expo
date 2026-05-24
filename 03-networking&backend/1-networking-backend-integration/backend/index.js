import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));

app.get("/api/v1/hello", (req, res) => {
  return res.json({ data: "Hello World" });
});

app.listen(3000, () => {
  console.log("server running");
});
