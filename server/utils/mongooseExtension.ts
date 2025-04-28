import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongooseURI: string = process.env.MONGODB_URI || '';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(mongooseURI);
    console.log('✅ MongoDB connected successfully');
  } catch (error: unknown) {
    // Type guard: đảm bảo là Error trước khi in
    if (error instanceof Error) {
      console.error('❌ MongoDB connection failed:', error.message);
    } else {
      console.error('❌ Unknown error during MongoDB connection');
    }
    throw error;
  }
};


class Filter {
  private conditions: any;
  
}
export default connectDB;