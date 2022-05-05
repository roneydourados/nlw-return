import { FeedbacksRepository } from "../../repositories/Feedbacks/feedbacksRepositiry";

export class IndexFeedback {
  constructor(private feedbacksRepository: FeedbacksRepository) {}

  async execute() {
    const feedbacks = await this.feedbacksRepository.index();

    return feedbacks;
  }
}
