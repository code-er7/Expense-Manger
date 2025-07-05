import mongoose from "mongoose";

const connectDb = async () => {
  
  const MONGO_URI = process.env.MONGO_URI;
  console.log(MONGO_URI);
  try {
    const connection = await mongoose.connect( 
      `${MONGO_URI}`
    );
    console.log(`Database connected: ${connection.connection.host}`);

  } catch (err) {
    console.error(`Error connecting to the database: ${err.message}`);
    process.exit(1);
    
  }
};

export default connectDb;
