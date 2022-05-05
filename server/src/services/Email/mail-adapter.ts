export interface MailAdapterProps {
  subject: string;
  body: string;
}

export interface MailAdapterMethods {
  sendMail: (data: MailAdapterProps) => Promise<void>;
}
