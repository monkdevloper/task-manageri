const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//   to: "abhipippalla@gmail.com",
//   from: "karpippalla@gmail.com",
//   subject: "this is my first creation",
//   text: "i hope you get it",
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "karpippalla@gmail.com",
    subject: "thanks for joining in!",
    text: `Welcome to the app, ${name}. let me know how you get along with the app.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "karpippalla@gmail.com",
    subject: "sorry for inconvinence!",
    text: `we are feeling bad ${name}. while you leaving our app`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
