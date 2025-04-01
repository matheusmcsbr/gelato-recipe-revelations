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
    totalTime: "3-4 hours (including chilling time)",
    servings: 8,
    equipment: [
      "Carpigiani gelato machine",
      "Digital scale",
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
        description: "Prepare the base mixture by combining milk and coconut cream in a medium saucepan. Heat over medium-low heat until steaming but not boiling (about 75°C).",
        timing: "8-10 minutes"
      },
      {
        step: 2,
        description: "In a separate bowl, whisk together raw cane sugar, honey, and egg yolks. Slowly pour some hot milk mixture into the eggs while whisking to temper, then return to the saucepan.",
        timing: "5-6 minutes"
      },
      {
        step: 3,
        description: "Heat the mixture gently until it reaches 85°C, stirring constantly. Remove from heat, add ground pistachios, pistachio paste, salt, and almond extract. Strain and chill completely.",
        timing: "8-10 minutes plus 4 hours chilling"
      },
      {
        step: 4,
        description: "Power on the Carpigiani machine and set it to the gelato production program. Allow the machine to complete its pre-cooling cycle.",
        timing: "10-15 minutes"
      },
      {
        step: 5,
        description: "Pour the chilled base mixture into the Carpigiani hopper. Select the 'Cream-Based Gelato' program and press start.",
        timing: "1-2 minutes setup"
      },
      {
        step: 6,
        description: "The Carpigiani machine will automatically mix and freeze the gelato to the perfect consistency while incorporating air (less than traditional ice cream for authentic Italian texture).",
        timing: "12-15 minutes processing"
      },
      {
        step: 7,
        description: "When the machine signals completion, add the reserved chopped pistachios during the final mixing phase using the ingredient feeder.",
        timing: "1 minute"
      },
      {
        step: 8,
        description: "Use the extraction lever to dispense the finished gelato directly into an airtight container. Smooth the top with a spatula.",
        timing: "2-3 minutes"
      },
      {
        step: 9,
        description: "Transfer immediately to the blast freezer for perfect crystal formation, or place in a conventional freezer for 2 hours before serving.",
        timing: "30 minutes in blast freezer or 2 hours in conventional freezer"
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
    totalTime: "2-3 hours (including freezing time)",
    servings: 6,
    equipment: [
      "Carpigiani gelato machine",
      "Blender or food processor",
      "Fine-mesh strainer",
      "Digital scale",
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
        description: "Prepare the base mixture by combining water, raw cane sugar, and honey in a saucepan. Heat until dissolved, then cool completely.",
        timing: "5-7 minutes plus 15 minutes cooling"
      },
      {
        step: 2,
        description: "Process the strawberries in a blender until smooth, then strain through a fine-mesh sieve to remove seeds. Combine with the cooled syrup, lemon juice, and salt.",
        timing: "5-7 minutes"
      },
      {
        step: 3,
        description: "Refrigerate the fruit mixture until thoroughly chilled (below 4°C).",
        timing: "At least 2 hours"
      },
      {
        step: 4,
        description: "Power on the Carpigiani machine and set it to the sorbet production program. Allow the machine to complete its pre-cooling cycle.",
        timing: "10-15 minutes"
      },
      {
        step: 5,
        description: "Pour the chilled strawberry mixture into the Carpigiani hopper. Select the 'Fruit Sorbet' program and press start.",
        timing: "1-2 minutes setup"
      },
      {
        step: 6,
        description: "The Carpigiani machine will automatically mix and freeze the sorbet to the perfect consistency while controlling ice crystal formation for a smooth texture.",
        timing: "10-12 minutes processing"
      },
      {
        step: 7,
        description: "Use the extraction lever to dispense the finished sorbet directly into an airtight container. Smooth the top with a spatula.",
        timing: "2-3 minutes"
      },
      {
        step: 8,
        description: "Transfer immediately to the blast freezer or hardening cabinet for optimal texture development, or place in a conventional freezer for 1 hour before serving.",
        timing: "20 minutes in blast freezer or 1 hour in conventional freezer"
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
    totalTime: "3-4 hours (including chilling time)",
    servings: 8,
    equipment: [
      "Carpigiani gelato machine",
      "Digital scale",
      "Medium saucepan",
      "Heat-resistant bowl",
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
        description: "Prepare the base mixture by combining milk and coconut cream in a saucepan. Heat until steaming (about 75°C).",
        timing: "8-10 minutes"
      },
      {
        step: 2,
        description: "Whisk egg yolks with sugar, maple syrup, and cocoa powder. Temper with hot milk mixture, then return to saucepan and heat to 85°C while stirring constantly.",
        timing: "8-10 minutes"
      },
      {
        step: 3,
        description: "Remove from heat, add chopped chocolate, salt, and vanilla bean seeds. Stir until chocolate is melted, then strain and chill thoroughly.",
        timing: "5 minutes plus 4 hours chilling"
      },
      {
        step: 4,
        description: "Power on the Carpigiani machine and set it to the gelato production program. Allow the machine to complete its pre-cooling cycle.",
        timing: "10-15 minutes"
      },
      {
        step: 5,
        description: "Pour the chilled chocolate base into the Carpigiani hopper. Select the 'Cream-Based Gelato' program and press start.",
        timing: "1-2 minutes setup"
      },
      {
        step: 6,
        description: "The Carpigiani machine will automatically mix and freeze the gelato to the perfect consistency while controlling overrun (air incorporation) for authentic dense Italian texture.",
        timing: "12-15 minutes processing"
      },
      {
        step: 7,
        description: "Use the extraction lever to dispense the finished gelato directly into an airtight container. Smooth the top with a spatula.",
        timing: "2-3 minutes"
      },
      {
        step: 8,
        description: "Transfer immediately to the blast freezer for optimal texture development, or place in a conventional freezer for 2 hours before serving.",
        timing: "30 minutes in blast freezer or 2 hours in conventional freezer"
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
    totalTime: "2-3 hours (including freezing time)",
    servings: 6,
    equipment: [
      "Carpigiani gelato machine",
      "Zester/microplane",
      "Citrus juicer",
      "Digital scale",
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
        description: "Zest 2-3 lemons carefully, avoiding the bitter white pith. Juice enough lemons to obtain 300ml of fresh juice and strain to remove seeds.",
        timing: "7-8 minutes"
      },
      {
        step: 2,
        description: "Prepare the syrup by combining water and sugar in a saucepan. Heat until dissolved, then add honey and lemon zest. Cool completely to allow flavor infusion.",
        timing: "5-7 minutes plus 20 minutes cooling"
      },
      {
        step: 3,
        description: "Strain the cooled syrup to remove zest, then combine with fresh lemon juice and salt. Refrigerate until thoroughly chilled (below 4°C).",
        timing: "At least 2 hours"
      },
      {
        step: 4,
        description: "Power on the Carpigiani machine and set it to the sorbet production program. Allow the machine to complete its pre-cooling cycle.",
        timing: "10-15 minutes"
      },
      {
        step: 5,
        description: "Pour the chilled lemon mixture into the Carpigiani hopper. Select the 'Fruit Sorbet' program and press start.",
        timing: "1-2 minutes setup"
      },
      {
        step: 6,
        description: "The Carpigiani machine will automatically mix and freeze the sorbet to the perfect consistency while controlling ice crystal formation for a smooth texture.",
        timing: "10-12 minutes processing"
      },
      {
        step: 7,
        description: "Use the extraction lever to dispense the finished sorbet directly into an airtight container. Smooth the top with a spatula.",
        timing: "2-3 minutes"
      },
      {
        step: 8,
        description: "Transfer immediately to the blast freezer or hardening cabinet for optimal texture development, or place in a conventional freezer for 1 hour before serving.",
        timing: "20 minutes in blast freezer or 1 hour in conventional freezer"
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
      "Carpigiani gelato machine",
      "Digital scale",
      "Medium saucepan",
      "Whisk",
      "Rubber spatula",
      "Digital thermometer",
      "Fine-mesh strainer",
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
        description: "Prepare the base mixture by combining milk, coconut cream, and scraped vanilla bean (both seeds and pod) in a saucepan. Heat until steaming (about 75°C).",
        timing: "8-10 minutes"
      },
      {
        step: 2,
        description: "In a separate bowl, whisk together raw cane sugar, honey, and whole milk powder. Add to hot milk mixture and stir until fully dissolved.",
        timing: "3-4 minutes"
      },
      {
        step: 3,
        description: "Heat the mixture gently to 85°C while stirring constantly. Remove from heat, add salt, remove vanilla pod, and strain. Chill thoroughly.",
        timing: "5-6 minutes plus 4 hours chilling"
      },
      {
        step: 4,
        description: "Power on the Carpigiani machine and set it to the gelato production program. Allow the machine to complete its pre-cooling cycle.",
        timing: "10-15 minutes"
      },
      {
        step: 5,
        description: "Pour the chilled base mixture into the Carpigiani hopper. Select the 'Cream-Based Gelato' program and press start.",
        timing: "1-2 minutes setup"
      },
      {
        step: 6,
        description: "The Carpigiani machine will automatically mix and freeze the gelato to the perfect consistency while controlling overrun for authentic Italian texture.",
        timing: "12-15 minutes processing"
      },
      {
        step: 7,
        description: "Use the extraction lever to dispense the finished gelato directly into an airtight container. Smooth the top with a spatula.",
        timing: "2-3 minutes"
      },
      {
        step: 8,
        description: "Transfer immediately to the blast freezer for optimal texture development, or place in a conventional freezer for 2 hours before serving.",
        timing: "30 minutes in blast freezer or 2 hours in conventional freezer"
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
    totalTime: "2-3 hours (including freezing time)",
    servings: 6,
    equipment: [
      "Carpigiani gelato machine",
      "Digital scale",
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
        description: "Prepare the syrup by combining water, raw cane sugar, and honey in a saucepan. Heat until fully dissolved, then let cool slightly.",
        timing: "5-7 minutes"
      },
      {
        step: 2,
        description: "Process the blueberries in a blender until smooth, then strain through a fine-mesh sieve to remove skins and seeds.",
        timing: "6-8 minutes"
      },
      {
        step: 3,
        description: "Combine the strained blueberry puree with the sugar syrup, lemon juice, and salt. Refrigerate until thoroughly chilled (below 4°C).",
        timing: "At least 2 hours"
      },
      {
        step: 4,
        description: "Power on the Carpigiani machine and set it to the sorbet production program. Allow the machine to complete its pre-cooling cycle.",
        timing: "10-15 minutes"
      },
      {
        step: 5,
        description: "Pour the chilled blueberry mixture into the Carpigiani hopper. Select the 'Fruit Sorbet' program and press start.",
        timing: "1-2 minutes setup"
      },
      {
        step: 6,
        description: "The Carpigiani machine will automatically mix and freeze the sorbet to the perfect consistency while controlling ice crystal formation for a smooth texture.",
        timing: "10-12 minutes processing"
      },
      {
        step: 7,
        description: "Use the extraction lever to dispense the finished sorbet directly into an airtight container. Smooth the top with a spatula.",
        timing: "2-3 minutes"
      },
      {
        step: 8,
        description: "Transfer immediately to the blast freezer or hardening cabinet for optimal texture development, or place in a conventional freezer for 1 hour before serving.",
        timing: "20 minutes in blast freezer or 1 hour in conventional freezer"
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
    totalTime: "3-4 hours (including chilling time)",
    servings: 8,
    equipment: [
      "Carpigiani gelato machine",
      "Digital scale",
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
        description: "Toast the hazelnuts in a 160°C oven until fragrant and skins begin to crack. Wrap in a clean kitchen towel and rub vigorously to remove skins. Reserve 40g for garnish and grind the rest.",
        timing: "15-20 minutes total"
      },
      {
        step: 2,
        description: "Prepare the base mixture by combining milk and coconut cream in a saucepan. Heat until steaming (about 75°C).",
        timing: "8-10 minutes"
      },
      {
        step: 3,
        description: "Whisk egg yolks with sugar and maple syrup. Temper with hot milk mixture, then return to saucepan and heat to 85°C while stirring constantly.",
        timing: "8-10 minutes"
      },
      {
        step: 4,
        description: "Remove from heat, add ground hazelnuts, hazelnut paste (if using), salt, and vanilla bean seeds. Stir to combine, then strain and chill thoroughly.",
        timing: "5 minutes plus 4 hours chilling"
      },
      {
        step: 5,
        description: "Power on the Carpigiani machine and set it to the gelato production program. Allow the machine to complete its pre-cooling cycle.",
        timing: "10-15 minutes"
      },
      {
        step: 6,
        description: "Pour the chilled hazelnut base into the Carpigiani hopper. Select the 'Cream-Based Gelato' program and press start.",
        timing: "1-2 minutes setup"
      },
      {
        step: 7,
        description: "The Carpigiani machine will automatically mix and freeze the gelato to the perfect consistency while controlling overrun for authentic Italian texture.",
        timing: "12-15 minutes processing"
      },
      {
        step: 8,
        description: "During the final minute of processing, add the reserved chopped hazelnuts through the ingredient feeder.",
        timing: "1 minute"
      },
      {
        step: 9,
        description: "Use the extraction lever to dispense the finished gelato directly into an airtight container. Smooth the top with a spatula.",
        timing: "2-3 minutes"
      },
      {
        step: 10,
        description: "Transfer immediately to the blast freezer for optimal texture development, or place in a conventional freezer for 2 hours before serving.",
        timing: "30 minutes in blast freezer or 2 hours in conventional freezer"
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
  },
  {
    id: "stracciatella",
    name: "Stracciatella",
    description: "The elegant simplicity of fiordilatte gelato with fine ribbons of rich, high-quality dark chocolate scattered throughout—a timeless classic representing the pinnacle of Italian gelato craftsmanship.",
    type: "cream-based",
    difficulty: "medium",
    totalTime: "3-4 hours (including chilling time)",
    servings: 8,
    equipment: [
      "Carpigiani gelato machine",
      "Digital scale",
      "Medium saucepan",
      "Whisk",
      "Rubber spatula",
      "Digital thermometer",
      "Fine-mesh strainer",
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
        quantity: "30g",
        preparation: "Natural substitute for dextrose to prevent crystallization"
      },
      {
        name: "Egg yolks",
        quantity: "4 large",
        preparation: "Bring to room temperature and whisk until smooth"
      },
      {
        name: "High-quality dark chocolate (70% cocoa solids)",
        quantity: "120g",
        preparation: "Finely chopped"
      },
      {
        name: "Vanilla bean",
        quantity: "1 pod",
        preparation: "Split lengthwise and seeds scraped"
      },
      {
        name: "Sea salt",
        quantity: "Pinch"
      },
      {
        name: "Extra virgin olive oil",
        quantity: "1 teaspoon",
        preparation: "For melting chocolate (helps create thinner ribbons)"
      }
    ],
    steps: [
      {
        step: 1,
        description: "Prepare the base mixture by combining milk, coconut cream, and scraped vanilla bean (both seeds and pod) in a saucepan. Heat until steaming (about 75°C).",
        timing: "8-10 minutes"
      },
      {
        step: 2,
        description: "In a separate bowl, whisk together raw cane sugar, honey, and egg yolks. Slowly pour some hot milk mixture into the eggs while whisking to temper, then return to the saucepan.",
        timing: "5-6 minutes"
      },
      {
        step: 3,
        description: "Heat the mixture gently until it reaches 85°C, stirring constantly. Remove from heat, add salt, remove vanilla pod, and strain. Chill thoroughly.",
        timing: "5-6 minutes plus 4 hours chilling"
      },
      {
        step: 4,
        description: "Power on the Carpigiani machine and set it to the gelato production program. Allow the machine to complete its pre-cooling cycle.",
        timing: "10-15 minutes"
      },
      {
        step: 5,
        description: "Pour the chilled base mixture into the Carpigiani hopper. Select the 'Cream-Based Gelato' program and press start.",
        timing: "1-2 minutes setup"
      },
      {
        step: 6,
        description: "The Carpigiani machine will automatically mix and freeze the gelato to the perfect consistency while controlling overrun for authentic Italian texture.",
        timing: "12-15 minutes processing"
      },
      {
        step: 7,
        description: "While the gelato is churning, gently melt the chocolate with the olive oil in a double boiler or microwave in short bursts. Let cool slightly but maintain fluidity.",
        timing: "4-5 minutes"
      },
      {
        step: 8,
        description: "When the gelato is nearly finished (about 2 minutes before completion), slowly drizzle the melted chocolate into the churning gelato through the ingredient feeder. The cold temperature will instantly solidify the chocolate into thin, delicate ribbons ('stracciatella' means 'little shreds').",
        timing: "1-2 minutes"
      },
      {
        step: 9,
        description: "Use the extraction lever to dispense the finished gelato directly into an airtight container. Smooth the top with a spatula.",
        timing: "2-3 minutes"
      },
      {
        step: 10,
        description: "Transfer immediately to the blast freezer for optimal texture development, or place in a conventional freezer for 2 hours before serving.",
        timing: "30 minutes in blast freezer or 2 hours in conventional freezer"
      }
    ],
    tips: [
      "The drizzling technique is crucial - the chocolate should form delicate ribbons, not large chips. The small amount of olive oil helps achieve the right consistency.",
      "Using high-quality chocolate (preferably Italian brands like Amedei or Domori) makes a significant difference in the final flavor.",
      "The base should be fully churned and nearly ready before adding the chocolate, otherwise the ribbons will be too thick.",
      "For an authentic experience, serve slightly warmer than American ice cream, at around -12°C instead of -18°C."
    ],
    history: "Stracciatella gelato was invented in 1962 by Enrico Panattoni at his Ristorante La Marianna in Bergamo, northern Italy. Inspired by 'stracciatella' soup (with its fine ribbons of egg), Panattoni wanted to create a gelato that featured delicate shards of chocolate throughout a pure, cream base. His ingenious technique of drizzling melted chocolate into churning gelato revolutionized the gelato world, creating one of Italy's most beloved flavors. True artisanal stracciatella should have fine, irregular ribbons of chocolate that melt on the tongue, contrasting beautifully with the sweet, smooth base.",
    color: "bg-white"
  },
  {
    id: "gianduia",
    name: "Gianduia",
    description: "A luxurious blend of premium hazelnut and chocolate, this gelato pays homage to Turin's famous chocolate-hazelnut confection, delivering a silky, nutty indulgence that represents the height of northern Italian gelato artistry.",
    type: "cream-based",
    difficulty: "medium",
    totalTime: "3-4 hours (including chilling time)",
    servings: 8,
    equipment: [
      "Carpigiani gelato machine",
      "Digital scale",
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
        quantity: "120g"
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
        name: "High-quality dark chocolate (70% cocoa solids)",
        quantity: "80g",
        preparation: "Finely chopped"
      },
      {
        name: "Unsweetened cocoa powder (Dutch-processed)",
        quantity: "20g",
        preparation: "Sifted"
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
        description: "Toast the hazelnuts in a 160°C oven until fragrant and skins begin to crack. Wrap in a clean kitchen towel and rub vigorously to remove skins. Reserve 30g for garnish and grind the rest to a paste in a food processor.",
        timing: "20-25 minutes total"
      },
      {
        step: 2,
        description: "Prepare the base mixture by combining milk and coconut cream in a saucepan. Heat until steaming (about 75°C).",
        timing: "8-10 minutes"
      },
      {
        step: 3,
        description: "Whisk egg yolks with sugar, maple syrup, and cocoa powder. Temper with hot milk mixture, then return to saucepan and heat to 85°C while stirring constantly.",
        timing: "8-10 minutes"
      },
      {
        step: 4,
        description: "Remove from heat, add chopped chocolate, hazelnut paste, salt, and vanilla bean seeds. Stir until chocolate is melted and mixture is well combined, then strain and chill thoroughly.",
        timing: "5 minutes plus 4 hours chilling"
      },
      {
        step: 5,
        description: "Power on the Carpigiani machine and set it to the gelato production program. Allow the machine to complete its pre-cooling cycle.",
        timing: "10-15 minutes"
      },
      {
        step: 6,
        description: "Pour the chilled hazelnut-chocolate base into the Carpigiani hopper. Select the 'Cream-Based Gelato' program and press start.",
        timing: "1-2 minutes setup"
      },
      {
        step: 7,
        description: "The Carpigiani machine will automatically mix and freeze the gelato to the perfect consistency while controlling overrun for authentic Italian texture.",
        timing: "12-15 minutes processing"
      },
      {
        step: 8,
        description: "During the final minute of processing, add the reserved chopped hazelnuts through the ingredient feeder.",
        timing: "1 minute"
      },
      {
        step: 9,
        description: "Use the extraction lever to dispense the finished gelato directly into an airtight container. Smooth the top with a spatula.",
        timing: "2-3 minutes"
      },
      {
        step: 10,
        description: "Transfer immediately to the blast freezer for optimal texture development, or place in a conventional freezer for 2 hours before serving.",
        timing: "30 minutes in blast freezer or 2 hours in conventional freezer"
      }
    ],
    tips: [
      "The balance between hazelnut and chocolate is crucial - neither should overpower the other in a true gianduia.",
      "For the most authentic flavor, use hazelnuts specifically from the Piedmont region of Italy (particularly Tonda Gentile delle Langhe), which are renowned worldwide.",
      "Freshly toasting the hazelnuts is essential to develop their full flavor profile.",
      "Serve with a small piece of gianduiotto chocolate (the diamond-shaped hazelnut-chocolate confections from Turin) for an authentic presentation."
    ],
    history: "Gianduia originated in Turin, Piedmont during Napoleon's trade blockades in the early 1800s when cocoa was scarce. Chocolatiers extended their limited supplies by blending them with locally abundant hazelnuts, creating what would become one of Italy's most celebrated confections. The gelato version emerged in Turin's historic cafés and has become a staple of northern Italian gelaterie. Named after a carnival character symbolizing Piedmontese identity, gianduia gelato embodies the region's culinary heritage and showcases the perfect marriage of chocolate and the region's prized hazelnuts.",
    color: "bg-amber-800"
  },
  {
    id: "tiramisu",
    name: "Tiramisù",
    description: "The beloved Italian dessert reimagined as gelato—coffee-infused gelato with mascarpone richness, delicate notes of marsala wine, and chocolate shavings capturing the essence of Italy's famous 'pick-me-up' in frozen form.",
    type: "cream-based",
    difficulty: "hard",
    totalTime: "4-5 hours (including chilling time)",
    servings: 8,
    equipment: [
      "Carpigiani gelato machine",
      "Digital scale",
      "Medium saucepan",
      "Whisk",
      "Rubber spatula",
      "Digital thermometer",
      "Fine-mesh strainer",
      "Airtight storage container",
      "Coffee grinder or espresso machine"
    ],
    ingredients: [
      {
        name: "Whole milk",
        quantity: "400ml",
        preparation: "Refrigerate until cold"
      },
      {
        name: "Mascarpone cheese",
        quantity: "250g",
        preparation: "Soften at room temperature for 30 minutes"
      },
      {
        name: "Coconut cream",
        quantity: "100ml",
        preparation: "Refrigerate until cold (natural substitute for heavy cream)"
      },
      {
        name: "Raw cane sugar",
        quantity: "130g"
      },
      {
        name: "Honey",
        quantity: "25g",
        preparation: "Natural substitute for dextrose to improve texture"
      },
      {
        name: "Egg yolks",
        quantity: "6 large",
        preparation: "Bring to room temperature and whisk until smooth"
      },
      {
        name: "Freshly brewed espresso",
        quantity: "80ml",
        preparation: "Cooled to room temperature"
      },
      {
        name: "Marsala wine (dry)",
        quantity: "30ml",
        preparation: "Traditional Italian fortified wine"
      },
      {
        name: "High-quality dark chocolate",
        quantity: "50g",
        preparation: "Finely grated or processed into small shavings"
      },
      {
        name: "Unsweetened cocoa powder",
        quantity: "20g",
        preparation: "Plus extra for garnish"
      },
      {
        name: "Sea salt",
        quantity: "Pinch"
      },
      {
        name: "Vanilla bean",
        quantity: "1 pod",
        preparation: "Split and scraped (natural substitute for vanilla extract)"
      },
      {
        name: "Ladyfinger cookies (savoiardi)",
        quantity: "4-5 cookies",
        preparation: "Crushed into small pieces for folding in or garnish"
      }
    ],
    steps: [
      {
        step: 1,
        description: "Prepare the coffee mixture by combining espresso and Marsala wine. Set aside to cool completely.",
        timing: "5 minutes plus cooling time"
      },
      {
        step: 2,
        description: "Whisk mascarpone until smooth, then prepare the base by combining milk and coconut cream in a saucepan. Heat until steaming (about 75°C).",
        timing: "8-10 minutes"
      },
      {
        step: 3,
        description: "In a separate bowl, whisk egg yolks with sugar, honey, and cocoa powder. Slowly pour some hot milk mixture into the eggs while whisking to temper, then return to the saucepan.",
        timing: "5-6 minutes"
      },
      {
        step: 4,
        description: "Heat the mixture gently until it reaches 85°C, stirring constantly. Remove from heat, then whisk in the smooth mascarpone, cooled coffee mixture, salt, and vanilla bean seeds. Strain and chill thoroughly.",
        timing: "8-10 minutes plus 4 hours chilling"
      },
      {
        step: 5,
        description: "Power on the Carpigiani machine and set it to the gelato production program. Allow the machine to complete its pre-cooling cycle.",
        timing: "10-15 minutes"
      },
      {
        step: 6,
        description: "Pour the chilled tiramisu base into the Carpigiani hopper. Select the 'Cream-Based Gelato' program and press start.",
        timing: "1-2 minutes setup"
      },
      {
        step: 7,
        description: "The Carpigiani machine will automatically mix and freeze the gelato to the perfect consistency while controlling overrun for authentic Italian texture.",
        timing: "12-15 minutes processing"
      },
      {
        step: 8,
        description: "When the gelato is nearly finished (about 2 minutes before completion), add the chocolate shavings and crushed ladyfingers through the ingredient feeder.",
        timing: "2 minutes"
      },
      {
        step: 9,
        description: "Use the extraction lever to dispense the finished gelato directly into an airtight container. Gently swirl in any remaining crushed ladyfingers to create texture variety. Dust the top with cocoa powder and smooth with a spatula.",
        timing: "2-3 minutes"
      },
      {
        step: 10,
        description: "Transfer immediately to the blast freezer for optimal texture development, or place in a conventional freezer for 2 hours before serving.",
        timing: "30 minutes in blast freezer or 2 hours in conventional freezer"
      }
    ],
    tips: [
      "Using freshly brewed, high-quality espresso (rather than instant coffee) is essential for authentic tiramisu flavor.",
      "The mascarpone must be completely smooth before incorporating it into the base to avoid any lumps in the final gelato.",
      "The alcohol in Marsala not only adds flavor but helps keep the gelato softer when frozen. For an alcohol-free version, use coffee extract and a touch more vanilla.",
      "For an elegant serving presentation, dust plates with cocoa powder and garnish with a small ladyfinger or chocolate-covered espresso bean."
    ],
    history: "Tiramisu, meaning 'pick me up' in Italian, originated in the Veneto region of Italy in the 1960s, quickly becoming an iconic Italian dessert worldwide. The gelato interpretation emerged as creative gelato masters sought to capture the dessert's distinctive combination of coffee, mascarpone, and cocoa in frozen form. While traditional tiramisu features layers of coffee-soaked ladyfingers and mascarpone cream, the gelato version incorporates all these elements into a harmonious frozen treat that honors the original while adding the smooth, dense texture that makes Italian gelato so beloved.",
    color: "bg-amber-200"
  }
];

export default gelatoRecipes;
