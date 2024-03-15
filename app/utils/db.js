import mongoose from "mongoose";

export async function dbConnect() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Connected from previous");
      return mongoose.connection;
    } else {
      const conString = process.env.MONGO_URL;

      const promise = mongoose.connect(conString, {
        autoIndex: true,
      });

      console.log("Newly connected");
      return conn;
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Database connection failed");
  }
}
