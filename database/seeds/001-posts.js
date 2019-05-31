exports.seed = function(knex, Promise) {
  return knex("post").insert([
    {
      title: "Caramel Cake",
      category: "Dessert",
      imgURL: "https://unsplash.com/photos/gHm50qaMaXc",
      description:
        "This real deal caramel cake recipe is the best southern classic recipe from scratch you will find. You won't find one better than this!",
      username: "NewChef100",
      location: "New York"
    },

    {
      title: "Fruit Pie",
      category: "Dessert",
      imgURL: "https://unsplash.com/photos/of0pMsWApZE",
      description:
        "This AMAZING fruit pie recipe is the fruitiest recipe you will find. It's the best!",
      username: "OldChef1000",
      location: "Boston"
    },
    {
      title: "Veggie Bowl",
      category: "Salad",
      imgURL: "https://unsplash.com/photos/IGfIGP5ONV0",
      description:
        "Super healthy, super fun, and delicious on top of that! Take care of your body and your cravings with this delicious salad.",
      username: "NewChef100",
      location: "New York"
    },
    {
      title: "Sunny-Side Up Egg",
      category: "Dessert",
      imgURL: "https://unsplash.com/photos/FFqNATH27EM",
      description:
        "Sunny-Side Up Eggs make a beautiful, classic addition to any breakfast. I make the perfect sunny-side up egg every time.",
      username: "FreshIsBest",
      location: "Los Angeles"
    },
    {
      title: "Creamy Fish Dinner with Greens",
      category: "Main Course",
      imgURL: "https://unsplash.com/photos/8pUjhBm4cLw",
      description:
        "A simple New England classic that highlights the flaky tenderness and light taste of the cod or any white fish.",
      username: "FreshIsBest",
      location: "Los Angeles"
    }
  ]);
};
