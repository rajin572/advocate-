// models/RegisterUser.js
import mongoose from "mongoose";

const ContactUsUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subject: {
    type: String,
    required: [true, "Subject is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  emailSent: {
    type: Boolean,
    default: false,
  },
});

const ContactUsUser =
  mongoose.models.ContactUsUser ||
  mongoose.model("ContactUsUser", ContactUsUserSchema);

export default ContactUsUser;
