import app from "./app";
import { PORT } from "./config";
import "./db";
app.listen(PORT, () => {
  console.log("server on port", PORT);
});
