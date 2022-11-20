const nodemailer = require("nodemailer");
const { getVerificationEmail } = require("../views/mailers/verifiedProfileEmail");

const sendMailServiceForAfterVerification = (email) => {
    var body = 'KamWala Profile Verified'
    console.log("HERE");
    console.log(getVerificationEmail());
    sendMailService(email, body, body, body)
}

const sendMailServiceForAfterRejection = (email) => {
    console.log("HELLO");
    var body = 'CONGO BHAI YOU ARE VERIFIED'
    sendMailService(email, body, body, body)
}


const sendMailService = async (to, subject, text, html) => {
    try {
        console.log("TO:", to);
        console.log(process.env.EMAIL);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, // generated ethereal user
                pass: process.env.PASSWORD,
            }
        });
        // send mail with defined transport object
        const response = await transporter.sendMail({
            from: "dummymail2204@gmail.com",
            to, subject, text, html
        });
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    sendMailServiceForAfterVerification,
    sendMailServiceForAfterRejection
}