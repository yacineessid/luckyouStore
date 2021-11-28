import mongoose from  'mongoose'
import dotenv from 'dotenv'
dotenv.config({path:'../config.env'})
const connectDB =async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://user:manunited@cluster0.auz66.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ,{
            useUnifiedTopology :true,
            useNewUrlParser :true,
            useCreateIndex:true ,
        })
        console.log(`MongoDB Connected :${conn.connection.host}` .cyan.underline)   
    }
    catch (error){
    console.error(`Error:${error.message}`.red.underline.bold)
    process.exit(1)
    }
}
export default connectDB