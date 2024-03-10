import { useState } from 'react';

type UseStepsHandlerReturnType = {
    currentStep: number;
    handleNextStep: () => void;
    handlePreviousStep: () => void;
};

export const useStepsHandler = (totalSteps: number): UseStepsHandlerReturnType => {
    const [currentStep, setCurrentStep] = useState<number>(0);
  
    const handleNextStep = (): void => {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
      }
    };
  
    const handlePreviousStep = (): void => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };
  
    return {
      currentStep,
      handleNextStep,
      handlePreviousStep,
    };
  };