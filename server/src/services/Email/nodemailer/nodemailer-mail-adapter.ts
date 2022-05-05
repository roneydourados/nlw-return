import nodemailer from "nodemailer";

import { MailAdapterMethods, MailAdapterProps } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "dd45eb431e3c8f",
    pass: "8fba86a049ce82",
  },
});

export class NodemailerMailAdapter implements MailAdapterMethods {
  async sendMail({ subject, body }: MailAdapterProps) {
    await transport.sendMail({
      from: "Equipe Feedget <suporte@feedget.com>",
      to: "Roney Melo <roneydourados@gmail.com>",
      subject,
      html: body,
    });
  }
}
