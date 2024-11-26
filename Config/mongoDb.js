import mongoose from "mongoose";

const connectDb = async () => {
    
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://codeer7:yK6jcXIaRzpVU6eA@expensemanger.dsko2.mongodb.net/?retryWrites=true&w=majority&appName=ExpenseManger");
    console.log(`Database connected: ${connection.connection.host}`);

  } catch (err) {
    console.error(`Error connecting to the database: ${err.message}`);
    process.exit(1);
    
  }
};

export default connectDb;
