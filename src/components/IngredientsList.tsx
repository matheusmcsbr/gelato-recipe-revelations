
import React from 'react';
import { Ingredient } from '@/data/gelatoRecipes';

interface IngredientsListProps {
  ingredients: Ingredient[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4 text-gelato-chocolate">Ingredients</h3>
      <div className="bg-gelato-vanilla/30 rounded-lg p-4">
        <ul className="space-y-1">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="ingredient-item">
              <div className="flex flex-col md:flex-row md:items-baseline">
                <span className="font-medium text-gelato-chocolate md:w-1/2">{ingredient.name}:</span>
                <span className="md:ml-2">{ingredient.quantity}</span>
              </div>
              {ingredient.preparation && (
                <div className="mt-1 ml-4 text-sm italic text-muted-foreground">
                  {ingredient.preparation}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IngredientsList;
