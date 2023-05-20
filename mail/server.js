import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { text } = req.body;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'accforms2345678@gmail.com',
      pass: 'Mernes4esgtni',
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Sender Name" <accforms>', // sender address
    to: 'nqolyan@gmail.com', // list of receivers
    subject: 'New message from website', // Subject line
    text,
  });

  // eslint-disable-next-line no-console
  console.log('Message sent: %s', info.messageId);

  res.status(200).json({ message: 'Email sent successfully!' });
}
