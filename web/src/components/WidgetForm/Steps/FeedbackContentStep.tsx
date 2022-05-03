import { ArrowLeft } from "phosphor-react";
import { useCallback, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenShotButton } from "../ScreenShotButton";
import { useForm } from "react-hook-form";

interface FeedbackContentStepProp {
  feedbackType: FeedbackType;
  feedbackContentStepGoBack: () => void;
  onFeedbackSent: () => void;
}

interface FeedbackInput {
  feedback: string;
}

export function FeedbackContentStep({
  feedbackType,
  feedbackContentStepGoBack,
  onFeedbackSent,
}: FeedbackContentStepProp) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackInput>();
  const [feedBackData, setFeedBackData] = useState<FeedbackInput | null>(null);
  const [screenshot, setScreenshot] = useState<string | null>(null);

  /*
  aui é o exemplo que vem na documentação, mas vou usar
  usecallback abaixo
  const submitFeedback: SubmitHandler<FeedbackInput> = (data) =>
    console.log(data);
  */

  const sendFeedback = useCallback(
    (data: FeedbackInput) => {
      console.log(data);

      console.log(screenshot);

      setFeedBackData(data);

      onFeedbackSent();
    },
    [feedBackData, screenshot]
  );

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={feedbackContentStepGoBack}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmit(sendFeedback)}>
        <textarea
          {...register("feedback", { required: true })}
          className="min-w-[304px] 
          w-full 
          min-h-[112px]
          text-sm 
          placeholder-zinc-400 
          text-zinc-100 
          border-zinc-600
          bg-transparent
          rounded-md
          focus:border-brand-500
          focus:ring-brand-500
          focus:ring-1
          focus:outline-none
          resize-none
          scrollbar-thumb-zinc-700
          scrollbar-track-transparent
          scrollbar-thin
          "
          placeholder="Nos de mais detalhes do que esta ocorrendo..."
        />
        <div className="max-w[100px]">
          <span className="text-red-400">
            {errors.feedback && "Informe comentário!"}
          </span>
        </div>
        <footer className="flex gap-2 mt-3">
          <ScreenShotButton
            screenshot={screenshot}
            onScreensotTok={setScreenshot}
          />

          <button
            type="submit"
            className="
            p-2 
            bg-brand-500 
            rounded-md 
            border-transparent 
            flex-1
            flex
            justify-center
            items-center
            text-sm
            hover:bg-brand-300
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-offset-zinc-900
            focus:ring-brand-500
            transition-colors
            disabled:opacity-50
            disabled:hover:bg-brand-500
           "
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
