import express from 'express'
import cors from 'cors'
import {errorMiddleware} from './middlewares/error.js'
import morgan from 'morgan'
import dotenv from 'dotenv'
import adminRouter from "./routes/admin.routes.js"
import bookingRouter from "./routes/booking.routes.js"
import bookingRoomRouter from "./routes/bookingRoom.routes.js"
import paymentRouter from "./routes/payment.routes.js"
import roomRouter from "./routes/room.routes.js"
import staffRouter from "./routes/staff.routes.js"
import userRouter from "./routes/user.routes.js"

  dotenv.config({path: './.env',});

  export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
  const port = process.env.PORT || 3000;


  const app = express();


 app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin:' * ',credentials:true}));
app.use(morgan('dev')) 


  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  // your routes here
  app.use("/api/admin",adminRouter);
  app.use("/api/booking",bookingRouter);
  app.use("/api/bookingRoom",bookingRoomRouter);
  app.use("/api/payment",paymentRouter);
  app.use("/api/staff",staffRouter);
  app.use("/api/user",userRouter);
  app.use("/api/room",roomRouter);


  
  app.get("*", (req, res) => {
    res.status(404).json({
      success: false,
      message: 'Page not found'
    });
  });

  app.use(errorMiddleware);
  
  
  app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));