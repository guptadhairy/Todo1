import express from "express";
import { getMyProfile, getAllUsers, login, newUser, logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("working nicely");
})

router.get("/all", getAllUsers);

router.post("/new", newUser);
router.post("/login", login)
router.get("/logout", logout)
router.get("/me",isAuthenticated, getMyProfile);


export default router;