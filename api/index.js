import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
const app = express(); 
import serviceRouter from "./routes/services.js";
import smallserviceRouter from "./routes/services.js";
import deleteSmallServiceRouter from "./routes/services.js";
import bookingRouter from "./routes/booking.js";
import userRouter from "./routes/users.js";
import authRouter from "./routes/Auth.js"; 
//import smallserviceRouter from "./routes/smallservice.js";
import contentsRouter from "./routes/contents.js"; 
import postRouter from "./routes/post.js";
import navigatorRouter from "./routes/navigator.js";
import commentRouter from "./routes/comment.js";
import branchRouter from "./routes/branch.js";
import bookingBranchRouter from "./routes/branch.js";
import processImageRouter from "./routes/processimage.js";
import transactionRouter from "./routes/transaction.js";
import customerRouter from "./routes/customer.js";
import rankRouter from "./routes/rank.js";
import debtRouter from "./routes/debt.js";
import customerDebtRouter from "./routes/customerdebt.js"



//const whitelist = ['http://localhost:3000'];

const corsOptions = {
    credentials: true, // This is important.
    origin: true,
  }

// Connection ot mongoodb
app.use(cors(corsOptions)); 

app.use(express.json()); 
const uri = process.env.ATLAS_URI; 
const port = process.env.PORT || 5000; 
mongoose.connect(uri, {}); 

const connection = mongoose.connection ; 
connection.once('open', ()=> { 
    console.log(`MongoDB connected`) ;
})

app.listen(port, () => { 
    console.log(` Connection to Server: ${port}`) ;
});



// Router  
// Router for Service
app.use("/api/service", serviceRouter);
app.use("api/service/smallservice", smallserviceRouter)
app.use("api/service/smallservice/delete", deleteSmallServiceRouter)
// Router for booking
app.use("/api/booking", bookingRouter);
// Router for user
app.use("/api/user",userRouter); 
//Router for login 
app.use("/api/login",authRouter); 
// Router for smallservice
//app.use("/api/smallservice", smallserviceRouter); 
// Router for content
app.use("/api/contents", contentsRouter); 
// Router for post 
app.use("/api/post",postRouter); 
// Router for comment
app.use("/api/comment", commentRouter); 
//Router for navigator
app.use("/api/navigator", navigatorRouter);
//Router for branch
app.use("/api/branch", branchRouter);
app.use("/api/branch/booking", bookingBranchRouter);
//Router for image of process
app.use("/api/processimage", processImageRouter);
//Router for customer debt 
app.use("/api/customerdebt", customerDebtRouter);
//Router for debt 
app.use("/api/debt", debtRouter);

//Router for transaction
app.use("/api/transaction", transactionRouter);
//Router for customer 
app.use("/api/customer",customerRouter);
//Router for rank
app.use("/api/rank",rankRouter);


app.use((err,req, res, next) => { 
    const errorStatus = err.status ||500; 
    const errorMessage = err.message || "Something went wrong"; 
    return res.status(errorStatus).json({ 
        success: false, 
        status: errorStatus, 
        message:errorMessage, 
        stack: err.stack,
    });
}); 
