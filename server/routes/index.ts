import { Router } from "express";
const router: Router = Router();
import routerUser from "./user";
import { especificacion } from "./../controllers";
router.get("/", especificacion);
router.use("/auth", routerUser);

router.get("/*", (req, res) => {
  res.status(400).json({ message: "route not found" });
});

export default router;
