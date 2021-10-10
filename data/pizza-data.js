const pizzas = [
  {
    name: "Margherita",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    category: "veg",
    image: "/images/margherita.jpg",
    description: "Classic delight with 100% real mozzarella cheese",
  },
  {
    name: "Farmhouse",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 229,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    image: "/images/farmhouse.jpg",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
  },
  {
    name: "Veggie Paradise",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 180,
        medium: 290,
        large: 460,
      },
    ],
    category: "veg",
    description:
      "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
    image: "/images/veggie_paradise.jpg",
  },
  {
    name: "Chicken Golden Delight",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 349,
        large: 599,
      },
    ],
    category: "nonveg",
    image: "/images/chicken_golden_delight.jpg",
    description:
      "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
  },
  {
    name: "Chicken Pepperoni",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 320,
        medium: 580,
        large: 800,
      },
    ],
    category: "nonveg",
    image: "/images/cheesepepperoni.jpg",
    description:
      "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
  },
  {
    name: "Indi Chicken Tikka",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 380,
        large: 500,
      },
    ],
    category: "nonveg",
    image: "/images/IndianTandooriChickenTikka.jpg",
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
  },
];
module.exports = pizzas;
