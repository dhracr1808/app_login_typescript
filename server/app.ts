import express, { Application } from "express";
const app: Application = express();
import routes from "./routes";
/*================== Middlewares ===================== */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*================== Routes ===================== */

app.use("/api", routes);

export default app;
