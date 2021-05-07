const functions = require("firebase-functions");

const nodemailer = require("nodemailer");

exports.contactEmail = functions.https.onCall((data, context) => {
  console.log(data);

  const output = `
  <p>You have a new quote request</p>
  <h3>Contact Details</h3>
  <ul>
      <li>Name: ${data.name}</li>
      <li>Email: ${data.email}</li>
      <li>Phone: ${data.phone}</li>
      <li>Service Requested: <p>${data.service}</p></li>
  </ul>
  
  
  `;

  async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: "garyjllil@outlook.com", // generated ethereal user
        pass: "", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `Quote Request <garyjllil@outlook.com>`, // sender address
      replyTo: `${data.email}`,
      to: "CesarSignWorks@icloud.com", // list of receivers
      subject: `New quote request from ${data.name}`, // Subject line
      text: null,
      html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  return main()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});
