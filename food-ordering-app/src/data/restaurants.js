const restaurants = [
  {
    id: 1,
    name: "Burger Palace",
    image: "/public/assets/image2.jpeg",
    cuisine: "American",
    rating: 4.5,
    deliveryTime: "20-30 min",
    minOrder: "$10",
    description: "Juicy burgers and crispy fries made with fresh ingredients.",
    menu: [
      {
        category: "Burgers",
        items: [
          {
            id: 101,
            name: "Classic Burger",
            description: "Beef patty with lettuce, tomato, onion, and our special sauce",
            price: 8.99,
            image: "/src/assets/image5.jpg",
          },
          {
            id: 102,
            name: "Cheeseburger",
            description: "Classic burger with American cheese",
            price: 9.99,
            image: "/src/assets/image6.jpg",
          },
          {
            id: 103,
            name: "Bacon Burger",
            description: "Classic burger with crispy bacon and cheese",
            price: 10.99,
            image: "/src/assets/image7.jpg",
          },
          {
            id: 104,
            name: "Double Burger",
            description: "Two beef patties with double cheese",
            price: 12.99,
            image: "/src/assets/image8.jpg",
          },
        ],
      },
      {
        category: "Sides",
        items: [
          {
            id: 105,
            name: "French Fries",
            description: "Crispy golden fries with sea salt",
            price: 3.99,
            image: "/src/assets/image9.jpg",
          },
          {
            id: 106,
            name: "Onion Rings",
            description: "Crispy battered onion rings",
            price: 4.99,
            image: "/src/assets/image10.jpg",
          },
          {
            id: 107,
            name: "Mozzarella Sticks",
            description: "Breaded mozzarella sticks with marinara sauce",
            price: 5.99,
            image: "/src/assets/image11.jpg",
          },
        ],
      },
      {
        category: "Drinks",
        items: [
          {
            id: 108,
            name: "Soda",
            description: "Choice of Coke, Diet Coke, Sprite, or Fanta",
            price: 1.99,
            image: "/src/assets/image12.jpg",
          },
          {
            id: 109,
            name: "Milkshake",
            description: "Vanilla, chocolate, or strawberry",
            price: 4.99,
            image: "/src/assets/image13.jpg",
          },
          {
            id: 110,
            name: "Iced Tea",
            description: "Freshly brewed iced tea",
            price: 2.99,
            image: "/src/assets/image14.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Pizza Heaven",
    image: "/public/assets/image1.png",
    cuisine: "Italian",
    rating: 4.7,
    deliveryTime: "25-35 min",
    minOrder: "$15",
    description: "Authentic Italian pizzas with a variety of toppings.",
    menu: [
      {
        category: "Pizzas",
        items: [
          {
            id: 201,
            name: "Margherita",
            description: "Classic pizza with tomato sauce, mozzarella, and basil",
            price: 12.99,
            image: "/src/assets/image15.jpg",
          },
          {
            id: 202,
            name: "Pepperoni",
            description: "Pizza with tomato sauce, mozzarella, and pepperoni",
            price: 14.99,
            image: "/src/assets/image16.jpg",
          },
          {
            id: 203,
            name: "Vegetarian",
            description: "Pizza with tomato sauce, mozzarella, and assorted vegetables",
            price: 13.99,
            image: "/src/assets/image17.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Sushi World",
    image: "/public/assets/image3.jpeg",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: "30-40 min",
    minOrder: "$20",
    description: "Fresh sushi and Japanese cuisine made by expert chefs.",
    menu: [
      {
        category: "Sushi Rolls",
        items: [
          {
            id: 301,
            name: "California Roll",
            description: "Crab, avocado, and cucumber roll",
            price: 9.99,
            image: "/src/assets/image18.jpg",
          },
          {
            id: 302,
            name: "Spicy Tuna Roll",
            description: "Spicy tuna and cucumber roll",
            price: 11.99,
            image: "/src/assets/image19.jpg",
          },
          {
            id: 303,
            name: "Dragon Roll",
            description: "Eel, crab, and avocado roll",
            price: 13.99,
            image: "/src/assets/image20.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Taco Fiesta",
    image: "/public/assets/image4.jpeg",
    cuisine: "Mexican",
    rating: 4.6,
    deliveryTime: "15-25 min",
    minOrder: "$12",
    description: "Authentic Mexican tacos, burritos, and quesadillas.",
    menu: [
      {
        category: "Tacos",
        items: [
          {
            id: 401,
            name: "Chicken Tacos",
            description: "Three soft tacos with grilled chicken, lettuce, and cheese",
            price: 7.99,
            image: "/src/assets/image21.jpg",
          },
          {
            id: 402,
            name: "Beef Tacos",
            description: "Three soft tacos with seasoned ground beef, lettuce, and cheese",
            price: 8.99,
            image: "/src/assets/image22.jpg",
          },
          {
            id: 403,
            name: "Fish Tacos",
            description: "Three soft tacos with grilled fish, cabbage slaw, and lime crema",
            price: 9.99,
            image: "/src/assets/image23.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Pasta Palace",
    image: "/public/assets/image5.png",
    cuisine: "Mexican",
    rating: 4.6,
    deliveryTime: "15-25 min",
    minOrder: "$12",
    description: "Authentic Mexican tacos, burritos, and quesadillas.",
    menu: [
      {
        category: "Tacos",
        items: [
          {
            id: 401,
            name: "Chicken Tacos",
            description: "Three soft tacos with grilled chicken, lettuce, and cheese",
            price: 7.99,
            image: "/src/assets/image21.jpg",
          },
          {
            id: 402,
            name: "Beef Tacos",
            description: "Three soft tacos with seasoned ground beef, lettuce, and cheese",
            price: 8.99,
            image: "/src/assets/image22.jpg",
          },
          {
            id: 403,
            name: "Fish Tacos",
            description: "Three soft tacos with grilled fish, cabbage slaw, and lime crema",
            price: 9.99,
            image: "/src/assets/image23.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Curry Corner",
    image: "/public/assets/image6.png",
    cuisine: "Mexican",
    rating: 4.6,
    deliveryTime: "15-25 min",
    minOrder: "$12",
    description: "Authentic Mexican tacos, burritos, and quesadillas.",
    menu: [
      {
        category: "Tacos",
        items: [
          {
            id: 401,
            name: "Chicken Tacos",
            description: "Three soft tacos with grilled chicken, lettuce, and cheese",
            price: 7.99,
            image: "/src/assets/image21.jpg",
          },
          {
            id: 402,
            name: "Beef Tacos",
            description: "Three soft tacos with seasoned ground beef, lettuce, and cheese",
            price: 8.99,
            image: "/src/assets/image22.jpg",
          },
          {
            id: 403,
            name: "Fish Tacos",
            description: "Three soft tacos with grilled fish, cabbage slaw, and lime crema",
            price: 9.99,
            image: "/src/assets/image23.jpg",
          },
        ],
      },
    ],
  },
]

export default restaurants;

