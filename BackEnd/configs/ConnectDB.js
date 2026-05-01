import mongoose from "mongoose";

async function connectToDB() {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
   process.exit(1);
  }
}

export default connectToDB;
