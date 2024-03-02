import { Router } from "express";
import UserDto from "../Services/dtos/user.dto.js"; 

const router = Router()

router.get("/login", (req,res)=>{
    res.render('login')
})

router.get("/register", (req,res)=>{
    res.render('register')
})

router.get("/current", (req,res)=>{
    if (!req.session.user) {
        return res.redirect("/users/login");
    }
    res.render('profile', {user:new UserDto(req.session.user)})
})

router.get("/cart", (req,res)=>{
    if (!req.session.user) {return res.redirect("/users/login");}
    res.render('cart')
})

export default router