import bugImageUrl from "../../assets/images/bug.svg";
import ideaImageUrl from "../../assets/images/idea.svg";
import thoughtImageUrl from "../../assets/images/thought.svg";
import { useCallback, useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },

  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de um balão",
    },
  },

  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedBackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = useCallback(() => {
    setFeedbackSent(false);
    setFeedbackType(null);
  }, []);

  return (
    <div
      className="bg-zinc-900 
      p-4 relative 
      rounded-2xl 
      mb-4 
      flex 
      flex-col 
      items-center
      shadow-lg
      w-[calc(100vw-2rem)] 
      md:w-auto
      "
    >
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback} />
      ) : (
        <>
          {!feedBackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedBackType}
              feedbackContentStepGoBack={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela
        <a
          className="underline underline-offset-2 ml-1"
          href="https://app.yenor-tec.com/"
        >
          Yenor Tec
        </a>
      </footer>
    </div>
  );
}
