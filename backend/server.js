import path from 'path'
import express from 'express'
import  dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import {notFound , errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()


connectDB()

const app = express();

app.use(express.json())

app.use((req,res,next)=>{
console.log(req.originalUrl)
    next()
})


app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/upload',uploadRoutes)


app.use('/api/config/paypal' , (req ,res)=>
res.send(process.env.PAYPAL_CLIENT_ID))


const __dirname = path.resolve()

app.use('/uploads' , express.static(path.join(__dirname ,'/uploads')))

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("frontend/build"));

  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
  });
} else {
  app.get("/", (req, res) => {
      res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(process.env.PORT,'port');
  console.log(`APP listening at ${port}`);
});
