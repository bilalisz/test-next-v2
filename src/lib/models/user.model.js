const { default: mongoose } = require("mongoose");

const userModel = new mongoose.Schema({
  user_name: String,
  email: String,
  phone: String,
  linkedin_url: String,
  company: String,
});

userModel.index({
  user_name: "text",
  email: "text",
  phone: "text",
  linkedin_url: "text",
  company: "text",
});

export const User = mongoose.models.users || mongoose.model("users", userModel);
