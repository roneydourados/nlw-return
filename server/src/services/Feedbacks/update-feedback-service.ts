import { FeedbacksRepository } from "../../repositories/Feedbacks/feedbacksRepositiry";

interface SubmmitFeedbackProps {
  id?: string;
  type: string;
  comment: string;
  screenshot?: string;
}

export class UpdateFeedback {
  constructor(private feedbacksRepository: FeedbacksRepository) {}

  async execute(request: SubmmitFeedbackProps) {
    const { id, type, comment, screenshot } = request;

    const feedback = await this.feedbacksRepository.update({
      id,
      type,
      comment,
      screenshot,
    });

    return feedback;
  }
}
