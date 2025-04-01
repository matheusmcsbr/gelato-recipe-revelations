export interface Ingredient {
  name: string;
  quantity: string;
  preparation?: string;
}

export interface PreparationStep {
  step: number;
  description: string;
  timing: string;
}

export interface GelatoRecipe {
  id: string;
  name: string;
  description: string;
  type: "cream-based" | "fruit-based";
  difficulty: "easy" | "medium" | "hard";
  totalTime: string;
  servings: number;
  equipment: string[];
  ingredients: Ingredient[];
  steps: PreparationStep[];
  tips: string[];
  history: string;
  color: string;
  image?: string;
}

const gelatoRecipes: GelatoRecipe[] = [
  {
    id: "pistachio",
    name: "Pistacchio di Bronte",
    description: "A luxurious, nutty gelato made with premium Sicilian Bronte pistachios, known for their intense flavor and vibrant green color.",
    type: "cream-based",
    difficulty: "medium",
    totalTime: "4-5 hours (including chilling time)",
    servings: 8,
    equipment: [
      "Gelato maker or ice cream machine",
      "Medium saucepan",
      "Whisk",
      "Rubber spatula",
      "Digital thermometer",
      "Fine-mesh strainer",
      "Airtight storage container"
    ],
    ingredients: [
      {
        name: "Whole milk",
        quantity: "500ml",
        preparation: "Refrigerate until cold"
      },
      {
        name: "Coconut cream",
        quantity: "150ml",
        preparation: "Refrigerate until cold (substitute for heavy cream)"
      },
      {
        name: "Raw cane sugar",
        quantity: "150g"
      },
      {
        name: "Honey",
        quantity: "30g",
        preparation: "Substitute for dextrose, provides smoothness and natural sweetness"
      },
      {
        name: "Egg yolks",
        quantity: "4 large",
        preparation: "Bring to room temperature and whisk until smooth"
      },
      {
        name: "Sicilian pistachios",
        quantity: "150g (shelled)",
        preparation: "Toast at 160°C for 10 minutes, cool, then finely grind 120g and roughly chop 30g"
      },
      {
        name: "Pistachio paste (pure, unsweetened)",
        quantity: "80g"
      },
      {
        name: "Sea salt",
        quantity: "Pinch"
      },
      {
        name: "Almond extract",
        quantity: "¼ teaspoon (optional)"
      }
    ],
    steps: [
      {
        step: 1,
        description: "In a medium saucepan, combine milk and coconut cream. Heat over medium-low heat until steaming but not boiling (about 75°C).",
        timing: "8-10 minutes"
      },
      {
        step: 2,
        description: "While heating, in a separate bowl, whisk together raw cane sugar, honey, and egg yolks until pale and slightly thickened.",
        timing: "3-4 minutes"
      },
      {
        step: 3,
        description: "Slowly pour about 1 cup of the hot milk mixture into the egg mixture while whisking constantly to temper the eggs.",
        timing: "1-2 minutes"
      },
      {
        step: 4,
        description: "Pour the tempered egg mixture back into the saucepan with the remaining milk and coconut cream. Cook over medium-low heat, stirring constantly with a wooden spoon or heat-resistant spatula, until the mixture thickens enough to coat the back of the spoon (82-85°C).",
        timing: "6-8 minutes (critical step, be patient)"
      },
      {
        step: 5,
        description: "Remove from heat and strain through a fine-mesh sieve into a clean bowl. Add ground pistachios, pistachio paste, salt, and almond extract (if using). Stir until completely incorporated.",
        timing: "2-3 minutes"
      },
      {
        step: 6,
        description: "Cover the bowl with plastic wrap, pressing it directly onto the surface of the mixture to prevent a skin from forming. Refrigerate until completely chilled (at least 4 hours, preferably overnight).",
        timing: "4 hours minimum"
      },
      {
        step: 7,
        description: "Pour the chilled mixture into your gelato maker and churn according to the manufacturer's instructions, usually until the consistency of soft-serve ice cream.",
        timing: "20-30 minutes depending on your machine"
      },
      {
        step: 8,
        description: "In the final minute of churning, add the remaining chopped pistachios to incorporate them throughout the gelato.",
        timing: "1 minute"
      },
      {
        step: 9,
        description: "Transfer to an airtight container and freeze for at least 2 hours before serving to firm up to the perfect scooping consistency.",
        timing: "2-4 hours"
      }
    ],
    tips: [
      "For the most authentic flavor, use pistachios specifically from Bronte, Sicily, which have a more intense flavor profile.",
      "The gelato will be at its best texture when served slightly warmer than standard ice cream, about -12°C instead of -18°C.",
      "For a greener color, you can add a tiny amount of natural food coloring, but authentic artisanal gelato often has a more muted, natural hue.",
      "Let the gelato sit at room temperature for 5-10 minutes before serving for the perfect consistency."
    ],
    history: "Pistachio gelato has been a staple of Sicilian gelaterias for centuries, with the finest versions made using pistachios from Bronte, a town on the slopes of Mount Etna where the volcanic soil produces nuts with an exceptional flavor profile. Traditional Italian gelato schools teach that pistachio gelato should showcase the pure flavor of the nut without too many competing ingredients.",
    color: "bg-gelato-pistachio"
  },
  {
    id: "fragola",
    name: "Fragola (Strawberry)",
    description: "A refreshing, vibrant fruit sorbet made with ripe, seasonal strawberries that captures the essence of Italian summer.",
    type: "fruit-based",
    difficulty: "easy",
    totalTime: "3-4 hours (including freezing time)",
    servings: 6,
    equipment: [
      "Gelato maker or ice cream machine",
      "Blender or food processor",
      "Fine-mesh strainer",
      "Medium saucepan",
      "Rubber spatula",
      "Airtight storage container"
    ],
    ingredients: [
      {
        name: "Fresh, ripe strawberries",
        quantity: "600g",
        preparation: "Wash, hull, and quarter. Let sit at room temperature for 30 minutes to maximize flavor"
      },
      {
        name: "Raw cane sugar",
        quantity: "150g"
      },
      {
        name: "Water",
        quantity: "100ml"
      },
      {
        name: "Lemon juice, freshly squeezed",
        quantity: "1 tablespoon"
      },
      {
        name: "Honey",
        quantity: "30g",
        preparation: "Natural substitute for glucose syrup to prevent crystallization"
      },
      {
        name: "Sea salt",
        quantity: "Tiny pinch"
      }
    ],
    steps: [
      {
        step: 1,
        description: "In a medium saucepan, combine water, raw cane sugar, and honey. Heat over medium heat, stirring until fully dissolved and the syrup is clear. Remove from heat and let cool completely.",
        timing: "5-7 minutes plus 15-20 minutes cooling time"
      },
      {
        step: 2,
        description: "While the syrup is cooling, place prepared strawberries in a blender or food processor and puree until smooth.",
        timing: "1-2 minutes"
      },
      {
        step: 3,
        description: "Pass the strawberry puree through a fine-mesh strainer to remove seeds, pressing gently with a spatula to extract as much liquid as possible. Discard seeds.",
        timing: "3-5 minutes"
      },
      {
        step: 4,
        description: "Combine the strained strawberry puree with the cooled sugar syrup. Add lemon juice and salt, then stir thoroughly.",
        timing: "1 minute"
      },
      {
        step: 5,
        description: "Cover and refrigerate the mixture until completely chilled, at least 2 hours or overnight for best results.",
        timing: "2 hours minimum"
      },
      {
        step: 6,
        description: "Pour the chilled mixture into your gelato maker and churn according to the manufacturer's instructions until the sorbet reaches a smooth, soft-serve consistency.",
        timing: "20-25 minutes depending on your machine"
      },
      {
        step: 7,
        description: "Transfer to an airtight container and freeze for at least 2 hours before serving to achieve the perfect scooping consistency.",
        timing: "2 hours minimum"
      }
    ],
    tips: [
      "Choose the ripest, most fragrant strawberries available. Seasonal berries will give the best flavor.",
      "The small amount of lemon juice brightens the flavor and helps preserve the vibrant color.",
      "Let the sorbet sit at room temperature for 5 minutes before serving for the perfect texture.",
      "For an authentic Italian presentation, garnish with a few small fresh strawberry pieces or mint leaves."
    ],
    history: "Fruit sorbets like fragola have been made in Italy since ancient Roman times when snow from mountain tops was mixed with fruit juices and honey. The modern version, perfected in gelato schools like those in Bologna and Turin, emphasizes the pure, intense flavor of fresh fruit with minimal interference. Unlike mass-produced varieties, authentic Italian strawberry sorbet contains no artificial flavors or colors, relying solely on the quality of in-season strawberries.",
    color: "bg-gelato-strawberry"
  },
  {
    id: "cioccolato",
    name: "Cioccolato Fondente",
    description: "An intense, rich dark chocolate gelato that showcases the depth and complexity of fine Italian chocolate craftsmanship.",
    type: "cream-based",
    difficulty: "medium",
    totalTime: "4-5 hours (including chilling time)",
    servings: 8,
    equipment: [
      "Gelato maker or ice cream machine",
      "Medium saucepan",
      "Heat-resistant bowl for melting chocolate",
      "Whisk",
      "Rubber spatula",
      "Digital thermometer",
      "Fine-mesh strainer",
      "Airtight storage container"
    ],
    ingredients: [
      {
        name: "Whole milk",
        quantity: "500ml",
        preparation: "Refrigerate until cold"
      },
      {
        name: "Coconut cream",
        quantity: "100ml",
        preparation: "Refrigerate until cold (natural substitute for heavy cream)"
      },
      {
        name: "Raw cane sugar",
        quantity: "120g"
      },
      {
        name: "Maple syrup",
        quantity: "20g",
        preparation: "Natural substitute for dextrose to prevent crystallization"
      },
      {
        name: "Egg yolks",
        quantity: "4 large",
        preparation: "Bring to room temperature and whisk until smooth"
      },
      {
        name: "High-quality dark chocolate (70% cocoa solids)",
        quantity: "150g",
        preparation: "Finely chopped"
      },
      {
        name: "Cocoa powder (Dutch-processed)",
        quantity: "30g",
        preparation: "Sifted"
      },
      {
        name: "Sea salt",
        quantity: "¼ teaspoon"
      },
      {
        name: "Vanilla bean",
        quantity: "1 pod",
        preparation: "Split and scraped (natural substitute for vanilla extract)"
      }
    ],
    steps: [
      {
        step: 1,
        description: "In a medium saucepan, combine milk and coconut cream. Heat over medium-low heat until steaming but not boiling.",
        timing: "8-10 minutes"
      },
      {
        step: 2,
        description: "While the milk is heating, whisk together raw cane sugar, maple syrup, cocoa powder, and egg yolks in a bowl until well combined and slightly thickened.",
        timing: "3-4 minutes"
      },
      {
        step: 3,
        description: "Slowly pour about 1 cup of the hot milk mixture into the egg mixture while whisking constantly to temper the eggs.",
        timing: "1-2 minutes"
      },
      {
        step: 4,
        description: "Pour the tempered egg mixture back into the saucepan with the remaining milk. Cook over medium-low heat, stirring constantly with a heat-resistant spatula, until mixture thickens enough to coat the back of a spoon (82-85°C).",
        timing: "6-8 minutes (maintain constant vigilance)"
      },
      {
        step: 5,
        description: "Remove from heat and immediately add the chopped chocolate. Let stand for 1 minute, then stir until the chocolate is completely melted and the mixture is smooth.",
        timing: "2-3 minutes"
      },
      {
        step: 6,
        description: "Add salt and vanilla bean seeds, then strain through a fine-mesh sieve into a clean bowl to remove any potential lumps.",
        timing: "1 minute"
      },
      {
        step: 7,
        description: "Cover with plastic wrap, pressing it directly onto the surface of the mixture to prevent a skin from forming. Refrigerate until completely chilled (at least 4 hours, preferably overnight).",
        timing: "4 hours minimum"
      },
      {
        step: 8,
        description: "Prior to churning, whisk the chilled mixture vigorously to ensure smooth consistency. Pour into your gelato maker and churn according to the manufacturer's instructions.",
        timing: "20-25 minutes depending on your machine"
      },
      {
        step: 9,
        description: "Transfer to an airtight container and freeze for at least 3 hours before serving to firm up to the perfect scooping consistency.",
        timing: "3-4 hours"
      }
    ],
    tips: [
      "The quality of chocolate dramatically affects the final result. Use the best dark chocolate you can find, preferably Italian brands like Venchi or Amedei.",
      "For a more intense chocolate flavor, you can increase the cocoa powder to 40g.",
      "The salt is essential to enhance the chocolate flavor – don't skip it!",
      "Allow the gelato to temper at room temperature for 5-10 minutes before serving for the best texture and flavor experience."
    ],
    history: "Chocolate gelato has been perfected over centuries in Italy, with many gelato masters considering it the true test of skill. The Carpigiani Gelato University in Bologna teaches that chocolate gelato should have a profound depth of flavor without being overly sweet, distinguishing it from American-style ice cream. Traditional Italian preparation emphasizes a balance between the bitter notes of high-quality cocoa and just enough sweetness to make it pleasurable but sophisticated.",
    color: "bg-gelato-chocolate"
  },
  {
    id: "limone",
    name: "Limone di Sorrento",
    description: "A bright, refreshing sorbet that captures the essence of the famous lemons from the Amalfi Coast, celebrated for their intense aroma and perfect balance of sweetness and acidity.",
    type: "fruit-based",
    difficulty: "easy",
    totalTime: "3-4 hours (including freezing time)",
    servings: 6,
    equipment: [
      "Gelato maker or ice cream machine",
      "Zester/microplane",
      "Citrus juicer",
      "Medium saucepan",
      "Fine-mesh strainer",
      "Airtight storage container"
    ],
    ingredients: [
      {
        name: "Fresh, unwaxed lemons (preferably Sorrento or Meyer lemons)",
        quantity: "6-7 large (300ml of juice needed)",
        preparation: "Wash thoroughly, zest first, then juice. Room temperature lemons yield more juice."
      },
      {
        name: "Raw cane sugar",
        quantity: "200g"
      },
      {
        name: "Water",
        quantity: "300ml"
      },
      {
        name: "Honey",
        quantity: "30g",
        preparation: "Natural substitute for glucose syrup to create smoother texture"
      },
      {
        name: "Lemon zest",
        quantity: "From 2-3 lemons",
        preparation: "Zest should be fine, with no white pith"
      },
      {
        name: "Sea salt",
        quantity: "Tiny pinch"
      }
    ],
    steps: [
      {
        step: 1,
        description: "Carefully zest 2-3 lemons, making sure to avoid the bitter white pith beneath the zest. Set aside.",
        timing: "2-3 minutes"
      },
      {
        step: 2,
        description: "Juice enough lemons to obtain 300ml of fresh juice. Strain the juice to remove any seeds or pulp.",
        timing: "5-6 minutes"
      },
      {
        step: 3,
        description: "In a medium saucepan, combine water and raw cane sugar. Heat over medium heat, stirring until the sugar is completely dissolved and the syrup is clear.",
        timing: "4-5 minutes"
      },
      {
        step: 4,
        description: "Add honey and lemon zest to the sugar syrup. Stir until the honey is fully dissolved, then remove from heat.",
        timing: "1-2 minutes"
      },
      {
        step: 5,
        description: "Let the syrup cool to room temperature, allowing the lemon zest to infuse its oils and aroma into the mixture.",
        timing: "20-30 minutes"
      },
      {
        step: 6,
        description: "Strain the cooled syrup to remove the zest, then combine with the fresh lemon juice and pinch of salt. Stir thoroughly.",
        timing: "1 minute"
      },
      {
        step: 7,
        description: "Cover and refrigerate the mixture until completely chilled, at least 2 hours or overnight for best results.",
        timing: "2 hours minimum"
      },
      {
        step: 8,
        description: "Pour the chilled mixture into your gelato maker and churn according to the manufacturer's instructions until the sorbet reaches a smooth consistency.",
        timing: "20-25 minutes depending on your machine"
      },
      {
        step: 9,
        description: "Transfer to an airtight container and freeze for at least 2 hours before serving to achieve the perfect scooping consistency.",
        timing: "2 hours minimum"
      }
    ],
    tips: [
      "Italian gelato masters emphasize that the quality of the lemons is paramount - organic, unwaxed lemons with thin, aromatic peels are ideal.",
      "The infusion of zest in the warm syrup releases essential oils that give authentic lemon gelato its characteristic aroma.",
      "For a more complex flavor, substitute up to 50g of the sugar with honey.",
      "In Italy, this sorbet is sometimes served with a small pour of cold limoncello or prosecco for adult guests."
    ],
    history: "Lemon sorbet has been a staple of Italian cuisine since the 16th century when Sicilian snow was mixed with lemon juice to create a refreshing treat. The most prized version comes from Sorrento and the Amalfi Coast, where the unique microclimate produces extraordinarily fragrant lemons with the perfect balance of acidity and sweetness. The Carpigiani Gelato University and other prestigious Italian gelato schools teach that true limone sorbet should taste intensely of fresh lemons without excessive sweetness, allowing the natural character of the fruit to shine.",
    color: "bg-gelato-lemon"
  },
  {
    id: "fior-di-latte",
    name: "Fiordilatte",
    description: "The quintessential Italian gelato, celebrating the pure flavor of fresh dairy. This 'flower of milk' gelato forms the foundation of all cream-based gelato varieties.",
    type: "cream-based",
    difficulty: "easy",
    totalTime: "3-4 hours (including chilling time)",
    servings: 8,
    equipment: [
      "Gelato maker or ice cream machine",
      "Medium saucepan",
      "Whisk",
      "Rubber spatula",
      "Fine-mesh strainer",
      "Digital thermometer",
      "Airtight storage container"
    ],
    ingredients: [
      {
        name: "Whole milk (highest quality available)",
        quantity: "600ml",
        preparation: "Refrigerate until cold"
      },
      {
        name: "Coconut cream",
        quantity: "200ml",
        preparation: "Refrigerate until cold (natural substitute for heavy cream)"
      },
      {
        name: "Raw cane sugar",
        quantity: "150g"
      },
      {
        name: "Honey",
        quantity: "25g",
        preparation: "Natural substitute for dextrose to prevent crystallization"
      },
      {
        name: "Whole milk powder",
        quantity: "25g",
        preparation: "Natural substitute for skim milk powder to enhance creaminess"
      },
      {
        name: "Vanilla bean",
        quantity: "1 pod",
        preparation: "Split lengthwise and seeds scraped"
      },
      {
        name: "Sea salt",
        quantity: "Pinch"
      }
    ],
    steps: [
      {
        step: 1,
        description: "In a medium saucepan, combine milk, coconut cream, and scraped vanilla bean (both seeds and pod). Heat over medium-low heat until steaming but not boiling (about 75°C).",
        timing: "8-10 minutes"
      },
      {
        step: 2,
        description: "While heating, in a separate bowl, whisk together raw cane sugar, honey, and whole milk powder until well combined.",
        timing: "2 minutes"
      },
      {
        step: 3,
        description: "When the milk mixture is steaming, remove from heat. Remove the vanilla pod, then gradually whisk in the sugar mixture until fully dissolved.",
        timing: "2-3 minutes"
      },
      {
        step: 4,
        description: "Return to low heat and cook, stirring constantly, until the mixture reaches 85°C and slightly thickens to coat the back of a spoon.",
        timing: "5-6 minutes"
      },
      {
        step: 5,
        description: "Remove from heat and add the pinch of salt. Strain through a fine-mesh sieve into a clean bowl.",
        timing: "1 minute"
      },
      {
        step: 6,
        description: "Cover with plastic wrap, pressing it directly onto the surface of the mixture to prevent a skin from forming. Refrigerate until completely chilled (at least 4 hours, preferably overnight).",
        timing: "4 hours minimum"
      },
      {
        step: 7,
        description: "Pour the chilled mixture into your gelato maker and churn according to the manufacturer's instructions until it reaches a soft, creamy consistency.",
        timing: "20-25 minutes depending on your machine"
      },
      {
        step: 8,
        description: "Transfer to an airtight container and freeze for at least 2 hours before serving to firm up to the perfect scooping consistency.",
        timing: "2-3 hours"
      }
    ],
    tips: [
      "The quality of milk and cream is crucial for fiordilatte. In Italy, artisans often use milk from specific regional dairies.",
      "Authentic fiordilatte should taste rich and milky without being overly sweet or heavy.",
      "For variation, infuse the milk with fresh herbs like mint or basil, or citrus zest during heating, then strain out before churning.",
      "This gelato serves as an excellent base for showcasing toppings like fresh berries, balsamic reduction, or high-quality olive oil (a gourmet Italian combination)."
    ],
    history: "Fiordilatte (literally 'flower of milk') is the foundation of Italian gelato tradition. The renowned gelato schools in Bologna and Turin teach that mastering fiordilatte is essential before attempting any other cream-based flavors. The simplicity of fiordilatte showcases the difference between Italian gelato and standard ice cream – its focus on pure milk flavor rather than heavy cream, lower fat content, and less incorporated air creates its characteristic dense, silky texture. Traditionally made without eggs, true fiordilatte celebrates dairy in its purest form.",
    color: "bg-white"
  },
  {
    id: "mirtillo",
    name: "Mirtillo (Blueberry)",
    description: "A vibrant, antioxidant-rich sorbet that captures the sweet-tart essence of wild Italian blueberries, often harvested from the Alpine regions.",
    type: "fruit-based",
    difficulty: "easy",
    totalTime: "3-4 hours (including freezing time)",
    servings: 6,
    equipment: [
      "Gelato maker or ice cream machine",
      "Blender or food processor",
      "Fine-mesh strainer",
      "Medium saucepan",
      "Rubber spatula",
      "Airtight storage container"
    ],
    ingredients: [
      {
        name: "Fresh blueberries (wild if available)",
        quantity: "700g",
        preparation: "Wash and sort, removing any stems or damaged berries"
      },
      {
        name: "Raw cane sugar",
        quantity: "170g"
      },
      {
        name: "Water",
        quantity: "120ml"
      },
      {
        name: "Lemon juice, freshly squeezed",
        quantity: "2 tablespoons"
      },
      {
        name: "Honey",
        quantity: "30g",
        preparation: "Natural substitute for glucose syrup to improve texture"
      },
      {
        name: "Sea salt",
        quantity: "Tiny pinch"
      }
    ],
    steps: [
      {
        step: 1,
        description: "In a medium saucepan, combine water, raw cane sugar, and honey. Heat over medium heat, stirring until fully dissolved and the syrup is clear. Remove from heat and let cool slightly.",
        timing: "5-7 minutes"
      },
      {
        step: 2,
        description: "In a blender or food processor, puree the blueberries until smooth.",
        timing: "1-2 minutes"
      },
      {
        step: 3,
        description: "Pass the blueberry puree through a fine-mesh strainer to remove skins and seeds, pressing gently with a spatula to extract as much liquid as possible.",
        timing: "5-7 minutes"
      },
      {
        step: 4,
        description: "Combine the strained blueberry puree with the sugar syrup. Add lemon juice and salt, then stir thoroughly.",
        timing: "1 minute"
      },
      {
        step: 5,
        description: "Cover and refrigerate the mixture until completely chilled, at least 2 hours or overnight for best results.",
        timing: "2 hours minimum"
      },
      {
        step: 6,
        description: "Pour the chilled mixture into your gelato maker and churn according to the manufacturer's instructions until the sorbet reaches a smooth consistency.",
        timing: "20-25 minutes depending on your machine"
      },
      {
        step: 7,
        description: "Transfer to an airtight container and freeze for at least 2 hours before serving to achieve the perfect scooping consistency.",
        timing: "2 hours minimum"
      }
    ],
    tips: [
      "Wild blueberries produce a more intense flavor than cultivated varieties, but either type will work well.",
      "The lemon juice not only brightens the flavor but helps maintain the vibrant purple-blue color.",
      "For a more sophisticated version, add 1-2 tablespoons of grappa or limoncello toward the end of churning.",
      "Serve with a sprig of fresh mint or a few whole fresh blueberries as garnish."
    ],
    history: "While not as traditional as some other Italian gelato flavors, blueberry (mirtillo) sorbet has gained popularity as health-conscious consumers seek fruit-based options. In the northern regions of Italy, particularly in the Alps where wild blueberries grow abundantly, this sorbet celebrates the summer harvest. The techniques taught at Italian gelato schools emphasize minimal processing of the fruit to preserve its natural flavor and nutritional properties, creating a sorbet that is both refreshing and intensely flavorful.",
    color: "bg-gelato-blueberry"
  },
  {
    id: "nocciola",
    name: "Nocciola delle Langhe",
    description: "A sophisticated hazelnut gelato showcasing the world-renowned Piedmont hazelnuts, celebrated for their rich, aromatic flavor and exceptional quality.",
    type: "cream-based",
    difficulty: "medium",
    totalTime: "4-5 hours (including chilling time)",
    servings: 8,
    equipment: [
      "Gelato maker or ice cream machine",
      "Food processor or high-power blender",
      "Medium saucepan",
      "Baking sheet",
      "Whisk",
      "Rubber spatula",
      "Digital thermometer",
      "Fine-mesh strainer",
      "Airtight storage container"
    ],
    ingredients: [
      {
        name: "Whole milk",
        quantity: "500ml",
        preparation: "Refrigerate until cold"
      },
      {
        name: "Coconut cream",
        quantity: "120ml",
        preparation: "Refrigerate until cold (natural substitute for heavy cream)"
      },
      {
        name: "Raw cane sugar",
        quantity: "130g"
      },
      {
        name: "Maple syrup",
        quantity: "25g",
        preparation: "Natural substitute for dextrose to create smoother texture"
      },
      {
        name: "Egg yolks",
        quantity: "4 large",
        preparation: "Bring to room temperature and whisk until smooth"
      },
      {
        name: "Piedmont hazelnuts (or highest quality available)",
        quantity: "200g",
        preparation: "Toast at 160°C for 12-15 minutes until fragrant and skins begin to crack"
      },
      {
        name: "Hazelnut paste (pure, unsweetened)",
        quantity: "60g (optional for intensified flavor)"
      },
      {
        name: "Sea salt",
        quantity: "¼ teaspoon"
      },
      {
        name: "Vanilla bean",
        quantity: "½ pod",
        preparation: "Split and scraped (natural substitute for vanilla extract)"
      }
    ],
    steps: [
      {
        step: 1,
        description: "Toast the hazelnuts in a 160°C oven until fragrant and skins begin to crack. Wrap the hot hazelnuts in a clean kitchen towel and let steam for 1 minute. Rub vigorously in the towel to remove as much skin as possible (some skin remaining is fine).",
        timing: "12-15 minutes toasting, 5 minutes skinning"
      },
      {
        step: 2,
        description: "Reserve about 40g of hazelnuts for garnish. In a food processor, grind the remaining hazelnuts until they form a paste (be careful not to over-process into butter).",
        timing: "3-4 minutes"
      },
      {
        step: 3,
        description: "In a medium saucepan, combine milk and coconut cream. Heat over medium-low heat until steaming but not boiling.",
        timing: "8-10 minutes"
      },
      {
        step: 4,
        description: "While heating, in a separate bowl, whisk together raw cane sugar, maple syrup, and egg yolks until pale and slightly thickened.",
        timing: "3-4 minutes"
      },
      {
        step: 5,
        description: "Slowly pour about 1 cup of the hot milk mixture into the egg mixture while whisking constantly to temper the eggs.",
        timing: "1-2 minutes"
      },
      {
        step: 6,
        description: "Pour the tempered egg mixture back into the saucepan with the remaining milk. Cook over medium-low heat, stirring constantly, until the mixture thickens enough to coat the back of a spoon (82-85°C).",
        timing: "6-8 minutes"
      },
      {
        step: 7,
        description: "Remove from heat and add the ground hazelnuts, hazelnut paste (if using), salt, and vanilla bean seeds. Stir until thoroughly combined.",
        timing: "2 minutes"
      },
      {
        step: 8,
        description: "Cover with plastic wrap, pressing it directly onto the surface of the mixture. Refrigerate until completely chilled (at least 4 hours, preferably overnight).",
        timing: "4 hours minimum"
      },
      {
        step: 9,
        description: "Strain the mixture through a fine-mesh sieve, pressing gently to extract maximum flavor while removing any coarse particles.",
        timing: "3-4 minutes"
      },
      {
        step: 10,
        description: "Pour the strained mixture into your gelato maker and churn according to the manufacturer's instructions.",
        timing: "20-25 minutes depending on your machine"
      },
      {
        step: 11,
        description: "In the final minute of churning, add the reserved hazelnuts (roughly chopped) to incorporate them throughout the gelato.",
        timing: "1 minute"
      },
      {
        step: 12,
        description: "Transfer to an airtight container and freeze for at least 3 hours before serving.",
        timing: "3 hours minimum"
      }
    ],
    tips: [
      "Hazelnuts from the Piedmont region of Italy (particularly those from Langhe) are considered the finest in the world and will produce the most authentic flavor.",
      "Toasting the hazelnuts is crucial for developing their full flavor profile.",
      "The gelato will have the best flavor and texture when served slightly warmer than standard ice cream.",
      "Nocciola pairs beautifully with chocolate sauce or a spoonful of gianduja spread."
    ],
    history: "Nocciola gelato is particularly celebrated in the Piedmont region of Italy, where the world's most prized hazelnuts grow. The famous gelato schools teach that nocciola should taste intensely of fresh, toasted hazelnuts with a rich, buttery finish. This flavor embodies the Italian principle of using regional ingredients at their peak, allowing their natural qualities to shine. Hazelnut gelato became popular alongside the rise of gianduja (chocolate-hazelnut paste) in the 19th century, and today remains one of the most beloved flavors in traditional Italian gelaterias.",
    color: "bg-amber-600"
  }
];

export default gelatoRecipes;
