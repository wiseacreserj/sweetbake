import Product from "../models/Product.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

const data = [
    {
        name: "Sourdough Bread",
        description:
            "Traditional sourdough bread with a crispy crust and soft interior.",
        price: 5.99,
        category: "Bread",
        image: "https://images.unsplash.com/photo-1587578931048-7b1d0e6e5b2e",
    },
    {
        name: "Chocolate Croissant",
        description: "Flaky croissant filled with rich chocolate.",
        price: 3.49,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1608220592877-4e2c70b5a267",
    },

    {
        name: "Baguette",
        description:
            "A classic French long, thin loaf with a crispy crust and soft interior.",
        price: 3,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1549931319-aabab4020ffd",
    },
    {
        name: "Ciabatta",
        description:
            "An Italian white bread known for its porous texture and crisp crust, ideal for sandwiches.",
        price: 4,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1629555466249-2a3a2a328d4e",
    },
    {
        name: "Rye Bread",
        description:
            "Dense bread made from rye flour, offering a rich flavor and high fiber content.",
        price: 5,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1595535873420-7e5b53782e91",
    },
    {
        name: "Focaccia",
        description:
            "An Italian flatbread seasoned with olive oil, rosemary, and salt.",
        price: 6,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1628331922538-14e2a9e3a2c8",
    },
    {
        name: "Croissant",
        description:
            "A buttery, flaky, and layered French pastry in a crescent shape.",
        price: 3,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    },
    {
        name: "Danish Pastry",
        description:
            "A multilayered, laminated sweet pastry filled with various fillings like cream cheese or fruit preserves.",
        price: 4,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Chocolate Cake",
        description:
            "Rich and moist chocolate cake with a smooth chocolate ganache.",
        price: 15,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
    {
        name: "Cheesecake",
        description:
            "Creamy cheesecake with a graham cracker crust, topped with fresh berries.",
        price: 20,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1567306226416-28f0ef73a540",
    },
    {
        name: "Macarons",
        description:
            "Delicate French almond meringue cookies with flavorful fillings.",
        price: 12,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1549190150-744e7e77e1e7",
    },
    {
        name: "Pretzel",
        description:
            "Soft, chewy pretzel with a golden-brown crust, lightly salted.",
        price: 2,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1607632281838-3b5b5e0f77bd",
    },
    {
        name: "Apple Pie",
        description:
            "Classic apple pie with a flaky crust and spiced apple filling.",
        price: 18,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1568572933382-1d2e2eeca670",
    },
    {
        name: "Brioche",
        description: "Soft, buttery French bread with a tender crumb.",
        price: 7,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1587563871167-1ee9378162fa",
    },
    {
        name: "Tiramisu",
        description:
            "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone.",
        price: 22,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1571877227200-3a3e74e1e2d5",
    },
    {
        name: "Sourdough",
        description:
            "Rustic bread with a chewy crust and tangy flavor, naturally leavened.",
        price: 6,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1587578931048-7b1d0e6e5b2e",
    },
    {
        name: "Eclair",
        description:
            "Choux pastry filled with cream and topped with chocolate glaze.",
        price: 5,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1613931353268-4e5f47f69b5e",
    },
    {
        name: "Cinnamon Roll",
        description:
            "Sweet rolled dough with cinnamon filling, topped with icing.",
        price: 4,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1576618148400-4f3c7d9c61a2",
    },
    {
        name: "Baklava",
        description:
            "Layered filo pastry filled with chopped nuts and sweetened with honey.",
        price: 10,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1608221513880-2aabf7f5e1f5",
    },
    {
        name: "Bagel",
        description:
            "Dense, chewy bread roll in a ring shape, often topped with seeds.",
        price: 3,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1586996292898-71f2f349e3f3",
    },
    {
        name: "Donut",
        description:
            "Fried dough confection, often glazed or dusted with sugar.",
        price: 2,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1551106652-5c9e8b0f7e8f",
    },
    {
        name: "Pumpernickel",
        description:
            "Traditional German bread made with coarsely ground rye flour and molasses.",
        price: 7,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1595535873420-7e5b53782e91",
    },
    {
        name: "Challah",
        description:
            "Sweet braided Jewish bread typically enjoyed during holidays.",
        price: 6,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1603046898929-7d747e0b9e2b",
    },
    {
        name: "Lavash",
        description: "Thin, soft flatbread popular in Middle Eastern cuisines.",
        price: 5,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1608221513880-2aabf7f5e1f5",
    },
    {
        name: "Panettone",
        description: "Italian Christmas bread with candied fruits and raisins.",
        price: 20,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1608221513880-2aabf7f5e1f5",
    },
    {
        name: "Madeleines",
        description: "French shell-shaped sponge cakes with a buttery texture.",
        price: 8,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Viennoiseries",
        description:
            "A category of French baked goods, including croissants and pain au chocolat.",
        price: 6,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    },
    {
        name: "Fruit Tart",
        description:
            "Shortcrust pastry filled with custard and topped with fresh fruits.",
        price: 18,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca7a5b62",
    },
    {
        name: "Crumble",
        description:
            "Baked dessert with fruit filling and crispy crumb topping.",
        price: 12,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1601001435829-4172b6e8c99e",
    },
    {
        name: "Profiteroles",
        description:
            "Small choux pastry balls filled with cream and topped with chocolate sauce.",
        price: 10,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1613931353268-4e5f47f69b5e",
    },
    {
        name: "Pain d'Épices",
        description: "French spice bread made with honey and fragrant spices.",
        price: 9,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1603046898929-7d747e0b9e2b",
    },
    {
        name: "Galette",
        description:
            "Rustic French tart with a free-form crust and sweet or savory filling.",
        price: 14,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca7a5b62",
    },
    {
        name: "Pain au Chocolat",
        description: "Flaky French pastry filled with rich chocolate.",
        price: 4,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1608220592877-4e2c70b5a267",
    },
    {
        name: "Lemon Tart",
        description: "Tangy and sweet lemon curd in a shortcrust pastry shell.",
        price: 16,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca7a5b62",
    },
    {
        name: "Pavlova",
        description:
            "Light and airy meringue topped with whipped cream and fresh fruits.",
        price: 20,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Quiche Lorraine",
        description: "Savory French tart filled with eggs, cream, and bacon.",
        price: 12,
        category: "Savory Pies",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Cannelés",
        description:
            "Small French pastries with a caramelized crust and custard center.",
        price: 9,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Stollen",
        description:
            "Traditional German fruit bread dusted with powdered sugar.",
        price: 18,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1603046898929-7d747e0b9e2b",
    },
    {
        name: "Clafoutis",
        description:
            "Baked French dessert with cherries and a custard-like batter.",
        price: 15,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca7a5b62",
    },
    {
        name: "Scone",
        description:
            "British quick bread often enjoyed with jam and clotted cream.",
        price: 3,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Churros",
        description: "Deep-fried dough sticks rolled in cinnamon sugar.",
        price: 5,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Whole Wheat Bread",
        description: "Nutritious bread made from whole wheat flour.",
        price: 4.5,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1595535873420-7e5b53782e91",
    },
    {
        name: "Blueberry Muffin",
        description: "Soft muffin packed with juicy blueberries.",
        price: 3.25,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Carrot Cake",
        description:
            "Moist cake with shredded carrots and cream cheese frosting.",
        price: 14,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
    {
        name: "Poppy Seed Bagel",
        description: "Chewy bagel topped with crunchy poppy seeds.",
        price: 3.5,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1586996292898-71f2f349e3f3",
    },
    {
        name: "Almond Croissant",
        description: "Flaky croissant filled with sweet almond paste.",
        price: 4.2,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1608220592877-4e2c70b5a267",
    },
    {
        name: "Red Velvet Cake",
        description: "Rich cake with a hint of cocoa and cream cheese icing.",
        price: 16,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
    {
        name: "Olive Bread",
        description: "Rustic bread with savory olives baked in.",
        price: 6.5,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1628331922538-14e2a9e3a2c8",
    },
    {
        name: "Raspberry Scone",
        description: "Crumbly scone with bursts of fresh raspberries.",
        price: 3.75,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Key Lime Pie",
        description: "Tart and creamy pie with a graham cracker crust.",
        price: 15,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca7a5b62",
    },
    {
        name: "Naan",
        description: "Soft Indian flatbread baked in a tandoor.",
        price: 4,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1603046898929-7d747e0b9e2b",
    },
    {
        name: "Espresso",
        description: "Strong, concentrated coffee brewed under pressure.",
        price: 2.5,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1572442388796-51a6a35e50d5",
    },
    {
        name: "Cappuccino",
        description: "Espresso with steamed milk and a frothy top.",
        price: 3.75,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1544784082-4bf170137da4",
    },
    {
        name: "Latte",
        description:
            "Smooth espresso with steamed milk and a light foam layer.",
        price: 4,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1517232115160-ff93364542dd",
    },
    {
        name: "Green Tea",
        description: "Light and refreshing tea with earthy notes.",
        price: 2.25,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1627438361868-33f8e6dbdad9",
    },
    {
        name: "Hot Chocolate",
        description:
            "Rich and creamy chocolate drink topped with whipped cream.",
        price: 3.5,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be6f7ed",
    },
    {
        name: "Iced Coffee",
        description: "Chilled coffee served over ice with a splash of milk.",
        price: 3.25,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1494314675222-991a80a225de",
    },
    {
        name: "Chai Latte",
        description: "Spiced tea blended with steamed milk.",
        price: 4.25,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1576092768241-d468ded837c1",
    },
    {
        name: "Lemonade",
        description: "Freshly squeezed lemons with a hint of sweetness.",
        price: 2.75,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1624280179617-96e868ea8e23",
    },
    {
        name: "Matcha Latte",
        description: "Vibrant green tea powder mixed with steamed milk.",
        price: 4.5,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1613918108491-5e6d6a088a0b",
    },
    {
        name: "Orange Juice",
        description: "Freshly squeezed oranges, full of vitamin C.",
        price: 3,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd2a013f",
    },
    {
        name: "Banana Bread",
        description:
            "Moist bread made with ripe bananas and a hint of cinnamon.",
        price: 5,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1603046898929-7d747e0b9e2b",
    },
    {
        name: "Cherry Turnover",
        description: "Puff pastry filled with sweet cherry compote.",
        price: 4,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Mango Mousse",
        description: "Light and creamy dessert with fresh mango flavor.",
        price: 8,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca7a5b62",
    },
    {
        name: "Cornbread",
        description: "Golden bread with a slightly sweet, crumbly texture.",
        price: 4.25,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1603046898929-7d747e0b9e2b",
    },
    {
        name: "Pecan Pie",
        description: "Sweet and nutty pie with a buttery crust.",
        price: 17,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca7a5b62",
    },
    {
        name: "Garlic Naan",
        description: "Soft Indian flatbread brushed with garlic butter.",
        price: 4.5,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1603046898929-7d747e0b9e2b",
    },
    {
        name: "Brownie",
        description: "Fudgy chocolate square with a crackly top.",
        price: 3.5,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1601001435829-4172b6e8c99e",
    },
    {
        name: "Cheese Danish",
        description: "Flaky pastry with a creamy cheese filling.",
        price: 4.25,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Pumpkin Bread",
        description: "Spiced bread with a rich pumpkin flavor.",
        price: 5.5,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1603046898929-7d747e0b9e2b",
    },
    {
        name: "Strawberry Shortcake",
        description:
            "Layered dessert with fresh strawberries and whipped cream.",
        price: 12,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca7a5b62",
    },
    {
        name: "Soda Bread",
        description: "Irish quick bread with a dense, rustic texture.",
        price: 4.75,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1595535873420-7e5b53782e91",
    },
    {
        name: "Peach Cobbler",
        description: "Warm dessert with juicy peaches and a biscuit topping.",
        price: 14,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1601001435829-4172b6e8c99e",
    },
    {
        name: "Bear Claw",
        description: "Almond-filled pastry shaped like a claw.",
        price: 4.5,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Pita Bread",
        description: "Soft, round flatbread perfect for dipping.",
        price: 3.5,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1603046898929-7d747e0b9e2b",
    },
    {
        name: "Black Forest Cake",
        description: "Chocolate cake with cherries and whipped cream.",
        price: 18,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
    {
        name: "Palmier",
        description: "Crispy, caramelized puff pastry treat.",
        price: 3,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Potato Bread",
        description: "Soft bread made with mashed potatoes.",
        price: 5,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1595535873420-7e5b53782e91",
    },
    {
        name: "Creme Brulee",
        description: "Creamy custard with a caramelized sugar top.",
        price: 10,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca7a5b62",
    },
    {
        name: "Gluten-Free Bread",
        description: "Light bread made without gluten.",
        price: 6,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1595535873420-7e5b53782e91",
    },
    {
        name: "Cannoli",
        description: "Crispy shell filled with sweet ricotta cream.",
        price: 4.75,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Mocha",
        description: "Espresso with chocolate and steamed milk.",
        price: 4.25,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1517232115160-ff93364542dd",
    },
    {
        name: "Herbal Tea",
        description: "Calming blend of herbs and flowers.",
        price: 2.5,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1627438361868-33f8e6dbdad9",
    },
    {
        name: "Iced Tea",
        description: "Chilled black tea with a slice of lemon.",
        price: 2.75,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1494314675222-991a80a225de",
    },
    {
        name: "Smoothie",
        description: "Blended fruit drink with yogurt and honey.",
        price: 5,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625",
    },
    {
        name: "Multigrain Bread",
        description: "Hearty bread with a mix of grains and seeds.",
        price: 5.75,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1595535873420-7e5b53782e91",
    },
    {
        name: "Apple Danish",
        description: "Flaky pastry with a spiced apple filling.",
        price: 4,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Pineapple Upside-Down Cake",
        description: "Moist cake with caramelized pineapple rings.",
        price: 15,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
    {
        name: "Sesame Bagel",
        description: "Chewy bagel topped with toasted sesame seeds.",
        price: 3.25,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1586996292898-71f2f349e3f3",
    },
    {
        name: "Hazelnut Eclair",
        description:
            "Choux pastry filled with hazelnut cream and chocolate glaze.",
        price: 5.5,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1613931353268-4e5f47f69b5e",
    },
    {
        name: "Boston Cream Pie",
        description:
            "Sponge cake layered with custard and topped with chocolate.",
        price: 16,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca7a5b62",
    },
    {
        name: "Rosemary Bread",
        description: "Aromatic bread infused with fresh rosemary.",
        price: 6,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1628331922538-14e2a9e3a2c8",
    },
    {
        name: "Lemon Poppy Seed Muffin",
        description: "Light muffin with a zesty lemon flavor and poppy seeds.",
        price: 3.5,
        category: "Pastries",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Tropical Smoothie",
        description: "Blend of mango, pineapple, and coconut milk.",
        price: 5.25,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625",
    },
    {
        name: "Americano",
        description: "Espresso diluted with hot water for a smooth taste.",
        price: 3,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1572442388796-51a6a35e50d5",
    },
    {
        name: "Flat White",
        description: "Espresso with velvety steamed milk.",
        price: 4,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1517232115160-ff93364542dd",
    },
    {
        name: "Ginger Tea",
        description: "Spicy and warming tea brewed with fresh ginger.",
        price: 2.75,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1627438361868-33f8e6dbdad9",
    },
    {
        name: "Milkshake",
        description: "Creamy vanilla shake with whipped cream topping.",
        price: 4.75,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1577805947697-89e182386e98",
    },
    {
        name: "Walnut Bread",
        description: "Rustic bread with crunchy walnuts baked in.",
        price: 6.25,
        category: "Breads",
        image: "https://images.unsplash.com/photo-1595535873420-7e5b53782e91",
    },
    {
        name: "Custard Tart",
        description: "Smooth custard in a crisp pastry shell.",
        price: 7,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca7a5b62",
    },
    {
        name: "Cheese Straws",
        description: "Crispy pastry sticks with a sharp cheddar flavor.",
        price: 3.75,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Spinach Quiche",
        description: "Savory tart with spinach, eggs, and cheese.",
        price: 13,
        category: "Savory Pies",
        image: "https://images.unsplash.com/photo-1606755962775-0a8c9b1e6e8a",
    },
    {
        name: "Oatmeal Cookie",
        description: "Chewy cookie with oats and raisins.",
        price: 2.5,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1601001435829-4172b6e8c99e",
    },
];

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB conected!"))
    .catch((err) => console.log("Connection error:", err));

console.log("DATA_length: ", data.length);

try {
    await Product.deleteMany({});
    await Product.insertMany(data);
    console.log("Data add successfully!");
} catch (error) {
    console.log(error);
}
