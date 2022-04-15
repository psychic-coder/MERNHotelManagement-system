const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const dotenv = require("dotenv");
require("dotenv").config();

//---------------------------------------Server setup-------------------------------------------*/
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}));

const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server start on port : ${PORT}`)
})



///---------------------------------------connect to mongoDB-------------------------------------------
    //Type 01
const URL= process.env.MONGO_CONNECT;

mongoose
    .connect(URL,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connection successful!'));

/*---------------------------------------Create Routes-------------------------------------------*/

//Room management routes
app.use("/room", require("./routes/employee-manager/RoomRoute"));


//api for employee managemet Thilan
const employeesRouter = require('./routes/emp-manager/employees.js');
app.use('/employees',employeesRouter);
const paidsalariesRouter = require('./routes/emp-manager/paidsalaries.js');
app.use('/paidsalaries',paidsalariesRouter);
const adminloginRouter = require('./routes/adminlogin.js');
app.use('/adminlogin',adminloginRouter);




