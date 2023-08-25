
import nodemailer from 'nodemailer';
import 'dotenv'
import generateEmailContent from 'utils/generateEmailContent';

export async function sendMail(text) {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'accforms2345678@gmail.com',
      pass: 'fizbluheslgliweh',
    },
  });


  var mailOptions = {
    from: 'accforms2345678@gmail.com',
    to: 'info@acc-accountant.am',
    // to: 'qolyan@list.ru',
    subject: 'New message from website',
    html:generateEmailContent(text)
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
