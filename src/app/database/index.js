import mongoose from "mongoose";

//connect to database

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://ericknjogu:Erick1999@erick.tf4im.mongodb.net/";

  mongoose
    .connect(connectionUrl)
    .then(() =>
      console.log("Connected to database").catch((error) => console.log(error))
    );
};

export default connectToDB;
