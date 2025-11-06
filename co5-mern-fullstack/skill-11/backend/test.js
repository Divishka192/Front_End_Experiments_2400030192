import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");

    // simple insert test
    const userSchema = new mongoose.Schema({ name: String });
    const User = mongoose.model("User", userSchema);
    await User.create({ name: "Divishka" });
    console.log("✅ Inserted successfully!");
  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    mongoose.connection.close();
  }
};

connectDB();
