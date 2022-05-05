import { FeedbacksRepository } from "../../repositories/Feedbacks/feedbacksRepositiry";

export class ShowFeedback {
  constructor(private feedbacksRepository: FeedbacksRepository) {}

  async execute(id: string) {
    const feedback = await this.feedbacksRepository.show(id);

    return feedback;
  }
}
