import { FeedbacksRepository } from "../../repositories/Feedbacks/feedbacksRepositiry";
import { MailAdapterMethods } from "../Email/mail-adapter";

interface SubmmitFeedbackProps {
  id?: string;
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmmitFeedback {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapterMethods
  ) {}

  async execute(request: SubmmitFeedbackProps) {
    const { type, comment, screenshot } = request;

    const feedback = await this.feedbacksRepository.store({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo Feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #222;">`,
        `<p>Tipo do feedback: ${type}<p>`,
        `Comentário: ${comment}`,
        `</div>`,
      ].join("\n"),
    });

    return feedback;
  }
}
