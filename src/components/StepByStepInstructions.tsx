
import React from 'react';
import { PreparationStep } from '@/data/gelatoRecipes';
import { Clock } from 'lucide-react';

interface StepByStepInstructionsProps {
  steps: PreparationStep[];
}

const StepByStepInstructions: React.FC<StepByStepInstructionsProps> = ({ steps }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4 text-gelato-chocolate">Preparation Steps</h3>
      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.step} className="step-item">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gelato-chocolate text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1">
                {step.step}
              </div>
              <div className="flex-grow">
                <p className="text-gray-800">{step.description}</p>
                <div className="mt-2 flex items-center">
                  <Clock className="h-4 w-4 text-gelato-chocolate mr-1" />
                  <span className="timing-badge">
                    {step.timing}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepByStepInstructions;
