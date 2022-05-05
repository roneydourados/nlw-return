import express from "express";
import { PrismaFeedbacksRepsotiry } from "./repositories/Feedbacks/prisma/prismaFeedbacksRepository";
import { NodemailerMailAdapter } from "./services/Email/nodemailer/nodemailer-mail-adapter";
import { DeleteFeedback } from "./services/Feedbacks/delete-feedback-service";
import { IndexFeedback } from "./services/Feedbacks/index-feedback-service";
import { ShowFeedback } from "./services/Feedbacks/show-feedback-service";
import { SubmmitFeedback } from "./services/Feedbacks/submmit-feedback-service";
import { UpdateFeedback } from "./services/Feedbacks/update-feedback-service";

export const routes = express.Router();

routes.get("/feedbacks", async (req, res) => {
  const prismaFeedbackRepository = new PrismaFeedbacksRepsotiry();
  const indexFeedbacks = new IndexFeedback(prismaFeedbackRepository);

  const feedbacks = await indexFeedbacks.execute();

  return res.status(200).json(feedbacks);
});

routes.get("/feedbacks/:id", async (req, res) => {
  const { id } = req.params;
  const prismaFeedbackRepository = new PrismaFeedbacksRepsotiry();
  const showFeedback = new ShowFeedback(prismaFeedbackRepository);

  const feedback = await showFeedback.execute(id);

  return res.status(200).json(feedback);
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  try {
    const prismaFeedbackRepository = new PrismaFeedbacksRepsotiry();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submmitFeedback = new SubmmitFeedback(
      prismaFeedbackRepository,
      nodemailerMailAdapter
    );

    const feedback = await submmitFeedback.execute({
      type,
      comment,
      screenshot,
    });

    return res.status(201).json(feedback);
  } catch (error) {
    return res.status(404).json({ request: "bad request" });
  }
});

routes.delete("/feedbacks/:id", async (req, res) => {
  const { id } = req.params;
  const prismaFeedbackRepository = new PrismaFeedbacksRepsotiry();
  const deleteFeedback = new DeleteFeedback(prismaFeedbackRepository);

  try {
    await deleteFeedback.execute(id);
    return res.status(200).json({ deleted: true });
  } catch (error) {
    return res.status(404).json({ request: "bad request" });
  }
});

routes.put("/feedbacks/:id", async (req, res) => {
  const { id } = req.params;
  const { type, comment, screenshot } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbacksRepsotiry();
  const updateFeedback = new UpdateFeedback(prismaFeedbackRepository);

  const feedback = await updateFeedback.execute({
    id,
    type,
    comment,
    screenshot,
  });

  try {
    return res.status(200).json(feedback);
  } catch (error) {
    return res.status(404).json({ request: "bad request" });
  }
});
