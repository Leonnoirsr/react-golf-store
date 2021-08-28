const PRODUCTS = [
  {
    id: "p1",
    category: "clubs",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/530e7c46e4b0f7e807d6f041/1587567338869-M9GE4FJU4IO7Q8029QGD/drivers-2020-mavrik-std____1.png?format=750w",

    type: "drivers",
    brand: "Mavrik",
    title: "Mavrik Driver",
    price: 399.99,
    description: "Mavrik driver",
    newPrice: 349.99,
    saleItem: true,
  },
  {
    id: "p2",
    category: "clubs",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/530e7c46e4b0f7e807d6f041/1587567338869-M9GE4FJU4IO7Q8029QGD/drivers-2020-mavrik-std____1.png?format=750w",

    type: "drivers",
    brand: "Wilson Staff",

    title: "Taylor Made Driver",
    price: 159.99,
    description: "a taylor made driver",
    saleItem: false,
  },
  {
    id: "p3",

    category: "clubs",
    imageUrl:
      "https://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7f8da521/images-square/zoom/350886-Titleist-T300-Steel-Irons-1.jpg?sw=255",
    type: "irons",
    brand: "Titleist",

    title: "Titleist Iron",
    price: 89.99,
    newPrice: 45.0,
    description: "Titleist iron",
    saleItem: true,
  },
  {
    id: "p4",

    category: "clubs",
    imageUrl:
      "https://images.directgolf.co.uk/images/products/87102690_3pl.jpg",

    type: "irons",
    brand: "Wilson",

    title: "Wilson 7 Iron",
    price: 59.99,
    description: "A Wilson 7 iron",
    saleItem: false,
  },
  {
    id: "p5",

    category: "clubs",
    imageUrl: `https://www.scottsdalegolf.co.uk/uploads/medium/ping-heppler-anser2-putter-1.jpg`,
    type: "putters",
    brand: "Ping",

    title: "Ping Putter",
    price: 759.99,
    description: "A Ping Putter",
    saleItem: false,
  },
  {
    id: "p6",

    category: "clubs",
    brand: "Callaway",
    imageUrl:
      "https://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7f8da521/images-square/zoom/350886-Titleist-T300-Steel-Irons-1.jpg?sw=255",
    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p7",

    category: "balls",
    brand: "Slazenger",
    imageUrl:
      "https://images.directgolf.co.uk/images/products/87505801_3pl.jpg",

    type: "distance-balls",
    title: "12 Slazenger Distance balls",
    price: 30.99,
    newPrice: 25.99,
    description: "12 Balls",
    saleItem: true,
  },
  {
    id: "p8",
    brand: "Taylor Made",
    category: "bags",
    type: "stand-bags",
    imageUrl:
      "https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw48629b25/images-square/zoom/338639-black-lime-1.jpg?sw=255",
    title: "Taylor Made Carry Bag",
    price: 109.99,
    description: "A Taylormade Carry Bag ",
    saleItem: false,
  },
  {
    id: "p9",
    category: "bags",
    brand: "Titelist",
    type: "stand-bags",
    imageUrl:
      "https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw570b1b97/images-square/zoom/344148-Black-Titleist-Hybrid-5-Stand-Bag-1new.jpg?sw=255",
    title: "Titelist Carry Bag",
    price: 139.99,
    description: "A Titelist Carry Bag ",
    saleItem: false,
  },
  {
    id: "p10",
    category: "bags",
    type: "pencil-bags",
    brand: "Callaway",
    imageUrl:
      "https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw14e926e9/images-square/zoom/358097-BlackCharcoal-Callaway-Golf-Carry-Bag-1.jpg?sw=255",
    title: "Callaway Pencil Bag",
    price: 89.99,
    description: "A Callaway Pencil Bag",
    saleItem: false,
  },
  {
    id: "p11",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p12",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p13",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p14",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p15",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p16",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p17",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p18",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p19",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p20",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p21",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p22",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p23",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p24",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p25",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p26",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p27",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,

    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
  {
    id: "p28",

    category: "clubs",
    brand: "Callaway",
    imageUrl: `https://www.onlinegolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7d0862b/images-square/zoom/343965-TaylorMade-M6-Fairway-Wood-1.jpg?sw=255`,
    type: "fairway-woods",
    title: "Callaway Made Wood",
    price: 359.99,
    newPrice: 300.0,
    description: "a Callaway made Wood",
    saleItem: true,
  },
];

export default PRODUCTS;
