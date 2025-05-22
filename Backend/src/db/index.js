import mongoose from 'mongoose';
// import { DB_NAME } from './constants.js';
const DB_NAME = "SportsFit";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log('\n MongoDB connected !! DB Host:', connectionInstance.connection.host);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  }
}

export default connectDB;