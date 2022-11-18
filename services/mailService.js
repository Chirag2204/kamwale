const nodemailer = require("nodemailer");

const sendMailServiceForAfterVerification = (email) => {
    console.log("HELLO");
    var body = 'CONGO BHAI YOU ARE VERIFIED'
    sendMailService(email, body, body, body)
}



const sendMailService = (to, subject, text, html) => {
    console.log("TO:", to);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD,
        }
    });
    // send mail with defined transport object
    transporter.sendMail({
        from: "dummymail2204@gmail.com",
        to, subject, text, html
    });
}


module.exports = {
    sendMailServiceForAfterVerification
}