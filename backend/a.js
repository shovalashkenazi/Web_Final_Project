const { ProductModel } = require("./models/product-model");

const { faker } = require("@faker-js/faker");

const categories = [
  "Computers & Laptops",
  "Cameras & Video",
  "Smart TV",
  "Smart Watches",
  "Headphones",
  "Mobile & Tablets",
  "Music & Gaming",
  "Accessories",
];

const colors = ["black", "red", "blue", "white", "green"];

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

async function editProducts() {
  const products = await ProductModel.find();
  for (const product of products) {
    await ProductModel.findByIdAndUpdate(product._id, {
      color: colors[random(0, 4)],
      rating: random(1, 5),
    });
  }
}
//editProducts();

let c = 0;
async function create() {
  // await ProductModel.deleteMany();
  for (let index = 0; index < 15; index++) {
    c = (c + 1) % categories.length;
    const product = {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      category: "Accessories",
      price: faker.commerce.price(),
      imgUrl:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQd7dNELKNYUa0aCgHGW_BrGXOGW5w7y_4nN8gIYMVQvA1wNj1xtMaACSfDkTBBq0RWqYWQJRMF9yjZLX8v0qizCwVnootwHHp9S9VXUTx7S0voGMy_L0y5&usqp=CAE",
    };

    await ProductModel.create(product);
  }
}

// create();
