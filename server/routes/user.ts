import { Router } from "express";
const router: Router = Router();
import { signup, signin, profile } from "./../controllers";
import { verify } from "./../libs";
router.get("/", verify, profile);
router.post("/signup", signup);
router.post("/signin", signin);

export default router;
