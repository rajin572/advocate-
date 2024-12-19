import Agenda from "agenda";
import mongoose from "mongoose";
import ContactUsUser from "../models/ContactUsUser.js";
import { sendContactUserEmail } from "../utils/sendEmail.js";

const mongoConnectionString =
  "mongodb+srv://zakee:zakee@cluster0.jrgzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a new instance of Agenda
const agenda = new Agenda({
  db: {
    address: mongoConnectionString,
    collection: "agendaJobs",
  },
});

// Define the job to send emails
agenda.define("send emails", async (job, done) => {
  try {
    const unsentEmailData = await ContactUsUser.findOne({ emailSent: false });
    if (!unsentEmailData) {
      console.log("No emails to send");
    } else {
      const result = await sendContactUserEmail(
        unsentEmailData.email,
        unsentEmailData.name,
        unsentEmailData.subject,
        unsentEmailData.message
      );
      console.log(result);
      if (result) {
        console.log(`Email sent to ${unsentEmailData.subject}`);
        await ContactUsUser.findByIdAndUpdate(
          { _id: unsentEmailData._id },
          { emailSent: true }
        );
      }
    }

    return done();
  } catch (error) {
    console.error("Error sending email:", error);
    done(error);
  }
});

(async function () {
  try {
    await mongoose.connect(mongoConnectionString);
    console.log("Connected to MongoDB");

    await agenda.start();
    console.log("Agenda started");

    // Schedule the job to run every 30 seconds
    await agenda.every("*/30 * * * * *", "send emails"); // This cron expression runs every 30 seconds
  } catch (error) {
    console.error("Error starting Agenda:", error);
    process.exit(1);
  }
})();

async function graceful() {
  await agenda.stop();
  console.log("Agenda stopped. Exiting process..");
  process.exit(0);
}

// Gracefully stop the process on SIGINT and SIGTERM signals
process.on("SIGINT", graceful);
process.on("SIGTERM", graceful);
