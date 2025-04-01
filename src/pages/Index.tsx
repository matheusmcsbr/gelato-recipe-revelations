
import React, { useState } from 'react';
import Header from '@/components/Header';
import FlavorSelector from '@/components/FlavorSelector';
import RecipeDisplay from '@/components/RecipeDisplay';
import gelatoRecipes from '@/data/gelatoRecipes';

const Index = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(gelatoRecipes[0].id);
  
  const currentRecipe = gelatoRecipes.find(recipe => recipe.id === selectedFlavor);

  const handleFlavorChange = (flavorId: string) => {
    setSelectedFlavor(flavorId);
  };

  return (
    <div className="min-h-screen bg-gelato-background">
      <Header />
      <main className="container mx-auto px-4 pb-16">
        <FlavorSelector 
          onSelectFlavor={handleFlavorChange}
          selectedFlavor={selectedFlavor}
        />
        {currentRecipe && <RecipeDisplay recipe={currentRecipe} />}
      </main>
      <footer className="py-6 bg-white border-t border-gelato-vanilla">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Created with ❤️ and inspiration from authentic Italian gelato traditions</p>
          <p className="mt-2">All recipes adapted from renowned Italian gelato schools</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
