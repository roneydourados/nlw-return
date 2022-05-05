import { FeedbacksRepository } from "../../repositories/Feedbacks/feedbacksRepositiry";

export class DeleteFeedback {
  constructor(private feedbacksRepository: FeedbacksRepository) {}

  async execute(id: string) {
    await this.feedbacksRepository.delete(id);
  }
}
