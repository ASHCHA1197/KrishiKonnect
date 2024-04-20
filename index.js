const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const AppError = require("./Utils/AppError");
const wrapAsync = require("./Utils/wrapAsync");
const session = require('express-session');
const flash = require("connect-flash");
const bcrypt = require("bcrypt");
const User = require("./models/User");
const Post = require("./models/Post");
const Comment = require("./models/Comment");
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/krishiKonnectDb')
    .then(()=>{
        console.log("Database Connected !!");
    })
    .catch((err)=>{
        console.log("Cannot connect to Database");
        console.log(err);
    });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'));
app.use(flash());
app.use(session({
    secret : "We@reTheBe$t",
    resave : false,
    saveUninitialized : false,
    cookie : {
        httpOnly : true,
        expires : Date.now() + 1000*60*60*24*7,
        maxAge : 1000*60*60*24
    }
}));
app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    next();
});

app.get('/krishiKonnect', (req,res)=>{
    res.render('home');
})

app.get("/krishiKonnect/login", (req,res)=>{
    res.render('login');
})

app.post('/krishiKonnect/login', async (req,res) => {
    const {mobile , password } = req.body;
    const user = await User.findOne({mobile});
    if(!user){
        return res.redirect('login');
    }
    const valid = await bcrypt.compare(password,user.password);
    if(valid) {
        req.session.mobile = mobile;
        res.redirect("home");
    }
    else{
        res.redirect("login");
    }
})

app.get("/krishiKonnect/signup",  (req,res)=>{
    res.render('signup');
})

app.post('/krishiKonnect/signup', async (req, res)=>{
    const {password, age , name , mobile, income, land, email, address, photo} = req.body;
    const hash = bcrypt.hash(password,12);
    const user = await new User({password : hash, age, name, mobile, income, land, email, address,photo});
    await user.save();
    req.session.mobile = mobile;
    res.redirect('home');
})

app.post('/krishiKonnect/logout', (req,res)=>{
    req.session.destroy();
    res.redirect("home");
})


app.get('/krishiKonnect/krishiGram', (req,res)=>{
    
})


app.use((err,req,res,next)=>{
    const {status = 500, msg = "Oops... Something went wrong"} = err;
    res.status(status).send(msg);
})

app.listen(3000, () => {
    console.log("Listening on port 3000!");
})