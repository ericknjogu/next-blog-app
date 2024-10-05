import mongoose from "mongoose";

// Connect to database
const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://ericknjogu:Erick1999@erick.tf4im.mongodb.net/";

  try {
    await mongoose.connect(connectionUrl);
    console.log("Successfully connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

export default connectToDB;
