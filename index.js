let express=require('express');
app=express();
const path=require('path');
const hbs=require('hbs');
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");
const mongoose=require("mongoose");
const user=require('./routes/user');
const dashboard=require('./routes/dashboard');
dotenv.config();
// mongodb connection
mongoose
  .connect(process.env.mongodb_url)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

const templatespath = path.join(__dirname, './templates/views');
const partialspath = path.join(__dirname, './templates/partials');
//midleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.set('views', templatespath);
hbs.registerPartials(partialspath);

app.use('/',user);
app.use('/',dashboard);

//server start
app.listen(8000,()=>{
    console.log('server started on 8000');
})
