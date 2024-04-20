if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

const cloudinary = require('cloudinary').v2;
const{ CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_KEY,
    api_secret : process.env.CLOUDINARY_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary,
    folder : 'krishiKonnect',
    allowedFormats : ['jpeg', 'png', 'jpg']
});

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
const Policy = require("./models/Policy");
const multer = require("multer");
const upload = multer({storage});
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
    res.render('home', {mobile : req.session.mobile});
})

app.get("/krishiKonnect/login", (req,res)=>{
    res.render('login');
})

app.post('/krishiKonnect/login', wrapAsync(async (req,res) => {
    const {mobile , password } = req.body;
    const user = await User.findOne({mobile});
    if(!user){
        req.flash('success','Wrong phone no or pass')
        return res.redirect('/krishiKonnect/login');
    }
    const valid = await bcrypt.compare(password,user.password);
    if(valid) {
        req.session.mobile = mobile;
        req.flash('success','Logged in Successfully!!')
        res.redirect("/krishiKonnect");
    }
    else{
        req.flash('success','Wrong phone no or pass')
        res.redirect('/krishiKonnect/login');
    }
}))

app.get("/krishiKonnect/signup",  (req,res)=>{
    res.render('signup');
})

app.post('/krishiKonnect/signup', wrapAsync(async (req, res)=>{
    const {password, age , name , mobile, income, land, email, address, photo} = req.body;
    const hash = await bcrypt.hash(password,12);
    const user = new User({password : hash, age, name, mobile, income, land, email, address, photo});
    await user.save();
    req.session.mobile = mobile;
    res.redirect('/krishiKonnect');
}))

app.get('/krishiKonnect/logout', (req,res)=>{
    req.session.destroy();
    res.redirect("/krishiKonnect");
})


app.get('/krishiKonnect/krishiGram', wrapAsync(async (req,res)=>{
    const posts = await Post.find({});
    res.render('krishiGram/index', {posts});
}))

app.get('/krishiKonnect/krishiGram/new', (req,res)=>{
    res.render('krishiGram/new')
})

app.post('/krishiKonnect/krishiGram/new', upload.single('media'), wrapAsync(async (req,res)=>{
    const {title , body} = req.body;
    let media = "";
    if(req.file){
        media = req.file.path;
    }
    if(!req.session.mobile){
        req.flash('success','Login First');
        return res.redirect('/krishiKonnect/login');
    }
    const user = await User.findOne({mobile : req.session.mobile});
    const post = new Post({title , body , media, likes : 0, likedby : [], name : user.name, mobile : user.mobile });
    await post.save();
    res.redirect("/krishiKonnect/krishiGram");
}))


app.get('/krishiKonnect/krishiGram/:id', wrapAsync(async(req, res)=>{
    const id = req.params.id;
    const post = await Post.findById(id);
    res.render("krishiGram/view", {post});
}))

app.get('/krishiKonnect/krishiGram/:id/like', wrapAsync(async(req,res)=>{
    const id = req.params.id;
    const post = await Post.findById(id);

    if(req.session.mobile==null){
        req.flash('success', 'login first');
        return res.redirect('/krishiKonnect/login');
    }

    if(!post.likedby.includes(req.session.mobile)){
        post.likedby.push(req.session.mobile);
        post.likes += 1;
        await post.save();
        res.render('krishiGram/view',{post});
    }
    else{
        const index = post.likedby.indexOf(req.session.mobile);
        post.likedby.splice(index, 1);
        post.likes -= 1;
        await post.save();
        res.render('krishiGram/view',{post});
    }
}))



app.get('/krishiKonnect/subsidies', wrapAsync(async (req,res)=>{
    if(!req.session.mobile){
        req.flash('success','Login First');
        return res.redirect("/krishiKonnect/login");
    }
    const user = await User.findOne({mobile : req.session.mobile});
    const {age , income, land} = user;
    const policies = await Policy.find({$and : [{age : {$lte : age}},{land : {$gte : land}},{income : {$gte : income}}]});
    res.render("subsidies/index", {policies});
}))






app.get('/krishiKonnect/eMandi', (req,res)=>{
    const market=req.body.market;
    const crop=req.body.crop;
    
    res.render('emandi/index');
})

app.get('/krishiKonnect/eMandi/view', wrapAsync(async (req, res)=>{
    

    res.render('emandi/view',{});
}))

app.use((err,req,res,next)=>{
    const {status = 500, message = "Oops... Something went wrong"} = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("Listening on port 3000!");
})