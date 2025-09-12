import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || 
  "mongodb+srv://naqeebahmedsahi:111111111111111111111111111@cluster0.alhz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

console.log("MongoDB URI:", MONGODB_URI);

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache;
}

let cached: MongooseCache = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async (): Promise<typeof mongoose> => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ MongoDB connected successfully to database: test");
      return mongoose;
    }).catch((error) => {
      console.error("❌ MongoDB connection failed:", error.message);
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }

  return cached.conn;
};

export default dbConnect;