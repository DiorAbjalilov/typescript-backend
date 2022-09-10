import mongoose from 'mongoose';
export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGODB_URI as string,
      {}
    );
    console.log(`Mongodb Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log('error mongodb connect: ', error);
  }
};
