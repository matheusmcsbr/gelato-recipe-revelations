
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GelatoRecipe } from '@/data/gelatoRecipes';
import IngredientsList from './IngredientsList';
import StepByStepInstructions from './StepByStepInstructions';

interface RecipeDisplayProps {
  recipe: GelatoRecipe;
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <div className="recipe-container">
      <Card className="overflow-hidden border-none shadow-lg">
        <div className={`h-4 w-full ${recipe.color}`}></div>
        <CardContent className="pt-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gelato-chocolate mb-2">{recipe.name}</h2>
            <p className="text-muted-foreground italic">{recipe.description}</p>
            
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gelato-vanilla/30 rounded-lg">
                <p className="text-sm text-muted-foreground">Difficulty</p>
                <p className="font-medium capitalize">{recipe.difficulty}</p>
              </div>
              <div className="text-center p-3 bg-gelato-vanilla/30 rounded-lg">
                <p className="text-sm text-muted-foreground">Total Time</p>
                <p className="font-medium">{recipe.totalTime}</p>
              </div>
              <div className="text-center p-3 bg-gelato-vanilla/30 rounded-lg">
                <p className="text-sm text-muted-foreground">Servings</p>
                <p className="font-medium">{recipe.servings}</p>
              </div>
              <div className="text-center p-3 bg-gelato-vanilla/30 rounded-lg">
                <p className="text-sm text-muted-foreground">Type</p>
                <p className="font-medium capitalize">{recipe.type.replace('-', ' ')}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-gelato-chocolate">Equipment Needed</h3>
            <ul className="list-disc pl-5 space-y-1">
              {recipe.equipment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <IngredientsList ingredients={recipe.ingredients} />
          
          <StepByStepInstructions steps={recipe.steps} />
          
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-gelato-chocolate">Chef's Tips</h3>
            <ul className="list-disc pl-5 space-y-2">
              {recipe.tips.map((tip, index) => (
                <li key={index} className="text-gray-800">{tip}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8 bg-gelato-vanilla/20 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gelato-chocolate">A Taste of History</h3>
            <p className="italic text-gray-700">{recipe.history}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeDisplay;
