const { default: mongoose } = require("mongoose");

const userModel = new mongoose.Schema({
  user_name: String,
  email: String,
  phone: String,
  linkedin_url: String,
  company: String,
});

export const User = mongoose.models.users || mongoose.model("users", userModel);
