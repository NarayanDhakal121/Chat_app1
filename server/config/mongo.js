import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("MongoDB URI is not defined in environment variables.");
  process.exit(1);
}

mongoose.set('strictQuery', false); // Avoid Mongoose deprecation warning

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB successfully");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});
