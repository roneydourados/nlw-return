import nodemailer from "nodemailer";

interface SendEmailProps {
  from: string;
  to: string;
  subject: string;
  body: string;
}

export const sendEmail = async ({
  from,
  to,
  subject,
  body,
}: SendEmailProps) => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "dd45eb431e3c8f",
      pass: "8fba86a049ce82",
    },
  });

  await transport.sendMail({
    from,
    to,
    subject,
    html: body,
  });
};
