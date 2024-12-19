import nodemailer from "nodemailer";

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or your email service
  auth: {
    user: "team.robust.dev@gmail.com",
    pass: "dmvf dwrv jhfc sfpd",
  },
});

export async function sendContactUserEmail(to, name) {
  const mailOptions = {
    from: `"Team Advocate" <team.robust.dev@gmail.com>`, // sender address
    to,
    subject: "Thank You for Contacting Advocate!", // Subject line
    text: `Hello ${name},\n\nThank you for reaching out to us at Advocate. We appreciate your message and will get back to you shortly.\n\nBest Regards,\nThe Advocate Team`, // plain text body
    html: `
      <div style="background-color: #19363D; color:#FAFAFA; font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #D3EBE7; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://i.ibb.co.com/1syDV6Q/Frame-2147225401.png" alt="Advocate Logo" style="max-width: 100%; height: auto;" />
        </div>
        <h1 style="color: #FAFAFA; text-align: center;">Thank You for Contacting <span style="color: #D3EBE7;">Advocate</span></h1>
        <h2 style="color: #D3EBE7; text-align: center;">Hello, ${name}!</h2>
        <p style="font-size: 16px; line-height: 1.5; color: #F3F3F3;">
          We appreciate you taking the time to reach out. Our team has received your message and will get back to you as soon as possible. In the meantime, feel free to explore our platform and discover how Advocate can make your special moments unforgettable.
        </p>
        <div style="text-align: center; margin: 20px 0;">
          <a href="https://home-care-website.vercel.app/" style="background-color: #F3F3F3; color: #19363D; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">Explore Advocate</a>
        </div>
        <p style="font-size: 16px; line-height: 1.5; color: #F3F3F3;">
          If you have any further questions, feel free to reply to this email or contact us anytime at <a href="mailto:contact@advocate.com" style="color: #D3EBE7; text-decoration: none;">contact@advocate.com</a>.
        </p>
        <hr style="border-top: 1px solid #D3EBE7; background-color: #D3EBE7; color: #D3EBE7;" />
        <p style="font-size: 14px; line-height: 1.5; color: #C5C5C5;">
          Best Regards,<br/>
          The <span style="color: #D3EBE7;">Advocate</span> Team
        </p>
        <p style="font-size: 12px; color: #C5C5C5; text-align: center;">
          You are receiving this email because you contacted us via our platform. Stay connected with us for updates. Reach us anytime at <a href="mailto:contact@advocate.com" style="color: #D3EBE7; text-decoration: none;">contact@advocate.com</a>.
        </p>
      </div>
    `,
  };

  try {
    return await transporter.sendMail(mailOptions);
  } catch (error) {}
}
