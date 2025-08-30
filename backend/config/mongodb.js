import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/appointy`);
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Optional: stop app if DB fails
  }
};

export default connectDB;

// Do not use '@' symbol in your database user's password else it will show an error.
