import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProp {
  feedbackType: FeedbackType;
  feedbackContentStepGoBack: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  feedbackContentStepGoBack,
}: FeedbackContentStepProp) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

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

      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] 
          w-full 
          h-min[112px] 
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
      </form>
    </>
  );
}
