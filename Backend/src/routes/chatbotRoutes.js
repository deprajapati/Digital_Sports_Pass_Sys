import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const msg = req.body.message?.toLowerCase() || "";

  let reply = "Sorry, I didn't understand that";

  if (msg.includes("register")) {
    reply = "To register, please visit the 'Registration' page and fill out the required form.";
  } else if (msg.includes("id card") || msg.includes("identity card")) {
    reply = "You can view or download your ID card from the 'ID Card' section.";
  } else if (msg.includes("validate") || msg.includes("validity") || msg.includes("expiry")) {
    reply = "To check your pass validity or expiry, visit the 'Validation' section and enter your membership ID.";
  } else if (msg.includes("members")) {
    reply = "All registered members can be viewed in the 'Members' section.";
  } else if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    reply = "Hello! 👋 How can I assist you with your sports membership today?";
  } else if (msg.includes("timing") || msg.includes("hours") || msg.includes("schedule")) {
    reply = "Our sports facility is open from 6:00 AM to 9:00 PM, Monday to Saturday.";
  } else if (
    msg.includes("fees") || msg.includes("payment") || 
    msg.includes("cost") || msg.includes("price") || 
    msg.includes("charge") || msg.includes("fee")
  ) {
    reply = " ₹400 (under 18) and ₹800  (18 and above). This covers access to all available sports.";
  } else if (msg.includes("sports") || msg.includes("facilities")) {
    reply = "We offer Swimming, Badminton, Gym, and Table Tennis. All are included in the membership.";
  } else if (msg.includes("contact") || msg.includes("support") || msg.includes("help")) {
    reply = "For assistance, contact us at 📞 +91-9876543210 or 📧 support@smartsports.com.";
  } else if (msg.includes("location") || msg.includes("address")) {
    reply = "Our facility is located at Graphic Era Sports Complex, Dehradun.";
  }

  res.json({ reply });
});

export default router;
