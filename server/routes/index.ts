import { Router } from "express";
const router: Router = Router();
import routerUser from "./user";
import { especificacion } from "./../controllers";
router.get("/", especificacion);
router.use("/auth", routerUser);
export default router;
