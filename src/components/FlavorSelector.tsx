
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import gelatoRecipes from '@/data/gelatoRecipes';

interface FlavorSelectorProps {
  onSelectFlavor: (flavorId: string) => void;
  selectedFlavor: string;
}

const FlavorSelector: React.FC<FlavorSelectorProps> = ({ onSelectFlavor, selectedFlavor }) => {
  return (
    <div className="max-w-md mx-auto my-8">
      <div className="mb-2 text-center">
        <h2 className="text-2xl font-semibold text-gelato-chocolate mb-3">Select a Flavor</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Choose from authentic Italian gelato recipes
        </p>
      </div>
      
      <Select
        value={selectedFlavor}
        onValueChange={onSelectFlavor}
      >
        <SelectTrigger className="w-full bg-white border-gelato-vanilla hover:border-gelato-chocolate focus:ring-gelato-chocolate">
          <SelectValue placeholder="Select a flavor" />
          <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <div className="grid grid-cols-1 gap-1 p-1">
            <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">Cream-based</div>
            {gelatoRecipes
              .filter(recipe => recipe.type === "cream-based")
              .map(flavor => (
                <SelectItem
                  key={flavor.id}
                  value={flavor.id}
                  className="cursor-pointer rounded-md flex items-center gap-2"
                >
                  <div className={`w-3 h-3 rounded-full ${flavor.color}`}></div>
                  <span>{flavor.name}</span>
                </SelectItem>
              ))
            }
            
            <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground mt-2">Fruit-based (Sorbets)</div>
            {gelatoRecipes
              .filter(recipe => recipe.type === "fruit-based")
              .map(flavor => (
                <SelectItem
                  key={flavor.id}
                  value={flavor.id}
                  className="cursor-pointer rounded-md flex items-center gap-2"
                >
                  <div className={`w-3 h-3 rounded-full ${flavor.color}`}></div>
                  <span>{flavor.name}</span>
                </SelectItem>
              ))
            }
          </div>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FlavorSelector;
