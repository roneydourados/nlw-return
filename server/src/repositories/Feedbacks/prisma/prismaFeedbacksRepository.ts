import {
  FeedbacksRepository,
  FeedbacksRepositoryProps,
} from "../feedbacksRepositiry";
import { prisma } from "../../../prisma";

interface PrismaFeedbacksRepsotiryProps {
  id?: string;
  type: string;
  comment: string;
  screenshot?: string;
}

export class PrismaFeedbacksRepsotiry implements FeedbacksRepository {
  async store({
    type,
    comment,
    screenshot,
  }: PrismaFeedbacksRepsotiryProps): Promise<FeedbacksRepositoryProps> {
    const feedback = await prisma.feedback.create({
      data: { type, comment, screenshot },
    });

    return feedback as FeedbacksRepositoryProps;
  }

  async update({
    id,
    type,
    comment,
    screenshot,
  }: PrismaFeedbacksRepsotiryProps): Promise<FeedbacksRepositoryProps> {
    const feedback = await prisma.feedback.update({
      where: {
        id,
      },
      data: {
        type,
        comment,
        screenshot,
      },
    });

    return feedback as FeedbacksRepositoryProps;
  }

  async index() {
    const feedbacks = await prisma.feedback.findMany({
      select: {
        id: true,
        comment: true,
        type: true,
      },
    });

    return feedbacks;
  }

  async show(id: string): Promise<FeedbacksRepositoryProps> {
    const feedback = await prisma.feedback.findUnique({
      where: {
        id: id,
      },
    });

    return feedback as FeedbacksRepositoryProps;
  }

  async delete(id: string) {
    await prisma.feedback.delete({
      where: {
        id: id,
      },
    });
  }
}
