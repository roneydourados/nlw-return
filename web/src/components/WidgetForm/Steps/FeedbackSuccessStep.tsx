import { CloseButton } from "../../CloseButton";
import successImageUrl from "../../../assets/images/success.svg";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequest: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequest,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImageUrl} alt="Sucesso no envio do feedback" />
        <span className="text-zinc-100 text-xl mt-2">
          Agradecemos o feedback!
        </span>
      </div>
      <button
        type="button"
        className="
          py-2 
          px-6 
          mb-6 
          bg-zinc-800 
          rounded-md 
          border-transparent 
          text-sm 
          leading-6
          hover:bg-zinc-700
          transition-colors
          focus:border-brand-500
          focus:ring-brand-500
          focus:ring-1
          focus:outline-none
        "
        onClick={onFeedbackRestartRequest}
      >
        Quero enviar outro
      </button>
    </>
  );
}
