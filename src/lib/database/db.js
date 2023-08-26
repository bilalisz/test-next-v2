import mongoose from "mongoose";
const { DB_USER, DB_PASS, DB_NAME } = process.env;
const connectionStr = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.qh54ell.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

if (!connectionStr) {
  throw new Error("Please define Mongo DB URI");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(connectionStr, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
