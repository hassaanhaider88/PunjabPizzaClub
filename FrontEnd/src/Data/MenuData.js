const DEFAULT_IMAGE =
  "https://i.pinimg.com/originals/3e/c9/fe/3ec9fe32c6217014789b5f42e2343f47.jpg";

const menu_data = [

  // ================= SPECIAL PIZZA =================
  {
    id: 1,
    category: "Special Pizza",
    name: "Stuff Crush Pizza",
    desc: "Chicken, White Sauce, Bel Pepper, Olives",
    sizesAndPrice: [
      { size: 'Large (13")', price: "1350", image: DEFAULT_IMAGE },
      { size: 'Medium (11")', price: "1000", image: DEFAULT_IMAGE },
      { size: 'Small (8")', price: "600", image: DEFAULT_IMAGE },
    ],
  },
  {
    id: 2,
    category: "Special Pizza",
    name: "Kebab Pizza",
    desc: "Kebab, White Sauce, Olives, Mushroom, Bel Pepper",
    sizesAndPrice: [
      { size: 'Large (13")', price: "1350", image: DEFAULT_IMAGE },
      { size: 'Medium (11")', price: "1000", image: DEFAULT_IMAGE },
      { size: 'Small (8")', price: "600", image: DEFAULT_IMAGE },
    ],
  },
  {
    id: 3,
    category: "Special Pizza",
    name: "Mughlai Boti Pizza",
    desc: "White Sauce, Mughlai Boti Chicken, Olives, Mushroom, Bell Pepper",
    sizesAndPrice: [
      { size: 'Large (13")', price: "1350", image: DEFAULT_IMAGE },
      { size: 'Medium (11")', price: "1000", image: DEFAULT_IMAGE },
      { size: 'Small (8")', price: "600", image: DEFAULT_IMAGE },
    ],
  },
  {
    id: 4,
    category: "Special Pizza",
    name: "Kebab Crush Pizza",
    desc: "Chicken, White Sauce, Bel Pepper, Olives",
    sizesAndPrice: [
      { size: 'Large (13")', price: "1350", image: DEFAULT_IMAGE },
      { size: 'Medium (11")', price: "1000", image: DEFAULT_IMAGE },
      { size: 'Small (8")', price: "600", image: DEFAULT_IMAGE },
    ],
  },
  {
    id: 5,
    category: "Special Pizza",
    name: "Malai Boti Crush Pizza",
    desc: "Malai Boti Chicken, White Sauce, Bel Pepper, Olives",
    sizesAndPrice: [
      { size: 'Large (13")', price: "1350", image: DEFAULT_IMAGE },
      { size: 'Medium (11")', price: "1000", image: DEFAULT_IMAGE },
      { size: 'Small (8")', price: "600", image: DEFAULT_IMAGE },
    ],
  },

  // ================= PIZZA =================
  {
    id: 6,
    category: "Pizza",
    name: "Lazania Pizza",
    desc: "Spicy Chicken, Onion, Tomatoes, Bell Pepper, Olives, Sweet Corn",
    sizesAndPrice: [
      { size: 'Large (13")', price: "1600", image: DEFAULT_IMAGE },
      { size: 'Medium (11")', price: "1300", image: DEFAULT_IMAGE },
    ],
  },
  {
    id: 7,
    category: "Pizza",
    name: "Malai Boti Pizza",
    desc: "Malai Boti Chicken, White Sauce, Bel Pepper, Olives",
    sizesAndPrice: [
      { size: 'Large (13")', price: "1300", image: DEFAULT_IMAGE },
      { size: 'Medium (11")', price: "950", image: DEFAULT_IMAGE },
      { size: 'Small (8")', price: "600", image: DEFAULT_IMAGE },
    ],
  },

  // ================= PIZZA FLAVORS =================
  ...[
    "Chicken Supreme",
    "Chicken B.B.Q",
    "Fajita Chicken",
    "Achari Pizza",
    "Hot Spicy",
    "Pizza Milano",
    "Vegetable Pizza",
  ].map((name, i) => ({
    id: 8 + i,
    category: "Pizza Flavor",
    name,
    desc: "kuch na kuch to description dena hi pree ga please",
    sizesAndPrice: [
      { size: 'Large (13")', price: "1200", image: DEFAULT_IMAGE },
      { size: 'Medium (11")', price: "850", image: DEFAULT_IMAGE },
      { size: 'Small (8")', price: "450", image: DEFAULT_IMAGE },
    ],
  })),

  // ================= BURGERS =================
  ...[
    ["Zinger Burger", 260],
    ["Zinger Cheese Burger", 350],
    ["Mighty Zinger Burger", 350],
    ["Mighty Cheese Burger", 400],
    ["Chicken Cheese Burger", 250],
    ["Chicken Burger", 200],
    ["Tower Burger", 500],
  ].map(([name, price], i) => ({
    id: 20 + i,
    category: "Burger",
    name,
    desc: "kuch na kuch to description dena hi pree ga please",
    sizesAndPrice: [
      { size: null, price: String(price), image: DEFAULT_IMAGE },
    ],
  })),

  // ================= ROLLS =================
  ...[
    ["Zinger Pratha Roll", 250],
    ["Paratha Roll", 200],
    ["Zinger Cheese Paratha", 350],
    ["Chicken Cheese Paratha Roll", 250],
  ].map(([name, price], i) => ({
    id: 30 + i,
    category: "Roll",
    name,
    desc: "kuch na kuch to description dena hi pree ga please",
    sizesAndPrice: [
      { size: null, price: String(price), image: DEFAULT_IMAGE },
    ],
  })),

  // ================= SHAWARMA =================
  ...[
    ["Zinger Shawarma", 220],
    ["Zinger Cheese Shawarma", 300],
    ["Chicken Shawarma", 150],
    ["Chicken Cheese Shawarma", 200],
  ].map(([name, price], i) => ({
    id: 40 + i,
    category: "Shawarma",
    name,
    desc: "kuch na kuch to description dena hi pree ga please",
    sizesAndPrice: [
      { size: null, price: String(price), image: DEFAULT_IMAGE },
    ],
  })),

  // ================= OTHERS =================
  {
    id: 50,
    category: "Others",
    name: "10 Hot Wings",
    desc: "kuch na kuch to description dena hi pree ga please",
    sizesAndPrice: [
      { size: null, price: "600", image: DEFAULT_IMAGE },
    ],
  },
  {
    id: 51,
    category: "Others",
    name: "10 Nuggets",
    desc: "kuch na kuch to description dena hi pree ga please",
    sizesAndPrice: [
      { size: null, price: "500", image: DEFAULT_IMAGE },
    ],
  },
  {
    id: 52,
    category: "Others",
    name: "Pasta",
    desc: "kuch na kuch to description dena hi pree ga please",
    sizesAndPrice: [
      { size: "Small", price: "350", image: DEFAULT_IMAGE },
      { size: "Large", price: "600", image: DEFAULT_IMAGE },
    ],
  },
  {
    id: 53,
    category: "Others",
    name: "Fries",
    desc: "kuch na kuch to description dena hi pree ga please",
    sizesAndPrice: [
      { size: "Medium", price: "150", image: DEFAULT_IMAGE },
      { size: "Large", price: "300", image: DEFAULT_IMAGE },
    ],
  },
];

export default menu_data;