import { useState } from "react";

import bugImageURL from '../../assets/bug.svg';
import ideaImageURL from '../../assets/idea.svg';
import thoughtImageURL from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";


export const feedbackTypes = { 
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageURL,
      alt: 'Imagem de uma minhoca'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageURL,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageURL,
      alt: 'Imagem de um balão de pensamento'
    }
  }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, isFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    isFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-white p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-3rem)] md:w-auto">
      { feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
          ) : (
            <FeedbackContentStep
            feedbackType={feedbackType}
            onFeedbackRestartRequested={handleRestartFeedback}
            onFeedbackSent={() => isFeedbackSent(true)}
            />
          )}
        </>
      )}
      

      <footer className="text-xs text-zinc-500">
        Feito com ♥ pelo <a href="https://github.com/LeandroRMachado" target="_blank" className="underline underline-offset-2">LeandroRMachado</a>
      </footer>
    </div>
  );
}