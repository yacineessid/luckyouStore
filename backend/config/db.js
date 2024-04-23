import mongoose from 'mongoose';

const connectDB = async () => {
  try {

    
    await mongoose.connect('mongodb+srv://user:manunited@cluster0.auz66.mongodb.net/myFirstDatabase', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    
    console.log(`MongoDB Connected : ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
