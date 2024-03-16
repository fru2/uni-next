import mongoose from "mongoose";

export const dbConnect = async () => {
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
      return promise;
    }
  } catch (e) {
    throw new Error("Couldn't connect to Mongo");
  }
};

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("MongoDB Disconnected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
