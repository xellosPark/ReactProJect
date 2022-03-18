import { Router } from "express";
import { userSigninController, userSignupController } from "../constrollers/userControllers";

const router = Router();

// router.get  router.post router.put  router.delete
router.post('/signup', userSignupController );

router.post('/signin', userSigninController );

export default router;