const CATEGORYS = [
  {
    category: "Clubs",
    open: false,
    "sub-categorys": [
      {
        label: "Drivers",
        imageUrl:
          "https://images.squarespace-cdn.com/content/v1/530e7c46e4b0f7e807d6f041/1587567338869-M9GE4FJU4IO7Q8029QGD/drivers-2020-mavrik-std____1.png?format=750w",
      },
      {
        label: "Fairway Woods",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87207590_3pl.jpg",
      },
      {
        label: "Irons",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87102690_3pl.jpg",
      },
      {
        label: "Putters",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87704086_3pl.jpg",
      },
      { label: "Shop All" },
    ],
  },
  {
    category: "Bags",
    open: false,
    "sub-categorys": [
      {
        label: "Cart Bags",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87301644_l.jpg",
      },
      {
        label: "Stand Bags",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87300248_3pl.jpg",
      },
      {
        label: "Pencil Bags",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87301241_l_a2.jpg",
      },
      {
        label: "Travel Bags",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87000203_3pl.jpg",
      },
      {
        label: "Shoe Bags",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87153702_3pl.jpg",
      },
      { label: "Shop All" },
    ],
  },
  {
    category: "Balls",
    open: false,
    "sub-categorys": [
      {
        label: "Coloured Balls",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87505801_3pl.jpg",
      },
      {
        label: "Premium Balls",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87505801_3pl.jpg",
      },
      {
        label: "Distance Balls",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87505801_3pl.jpg",
      },
      {
        label: "Refurbished Balls",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87505801_3pl.jpg",
      },
      {
        label: "Lake Balls",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87505801_3pl.jpg",
      },
      {
        label: "Spin & Control Balls",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87505801_3pl.jpg",
      },
      { label: "Shop All" },
    ],
  },
  {
    category: "Shoes",
    open: false,
    "sub-categorys": [
      {
        label: "Premium Golf Shoes",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/28600901_3pl.jpg",
      },
      {
        label: "Spike-less Golf Shoes",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/28801105_3pl.jpg",
      },
      {
        label: "Ladies Golf Shoes",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/28802103_3pl.jpg",
      },
      { label: "Shop All" },
    ],
  },
  {
    category: "Gloves",
    open: false,
    "sub-categorys": [
      {
        label: "Leather Gloves",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87801101_3pl.jpg",
      },
      {
        label: "Golf Mittens",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87801101_3pl.jpg",
      },
      {
        label: "All Weather Gloves",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87801101_3pl.jpg",
      },
      {
        label: "Winter Gloves",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87801101_3pl.jpg",
      },
      { label: "Shop All" },
    ],
  },
  {
    category: "Accessories",
    open: false,
    "sub-categorys": [
      {
        label: "Shoe Care",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87037390_3pl.jpg",
      },
      {
        label: "Golf Grips",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87010826_3pl.jpg",
      },
      {
        label: "Putting Aids",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87034090_3pl.jpg",
      },
      {
        label: "Golf Trolley Accessories",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87036990_l.jpg",
      },
      {
        label: "Shoe Spikes",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87016091_3plat_a1.jpg",
      },
      {
        label: "Head Covers",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87036290_3pl.jpg",
      },
      {
        label: "Golf Tees",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87037790_3pl.jpg",
      },
      {
        label: "Golf Umbrellas",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87029508_l.jpg",
      },
      {
        label: "Ball Markers",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87014090_3pl.jpg",
      },
      {
        label: "Towels",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87006603_3pl.jpg",
      },
      { label: "Shop All" },
    ],
  },
  {
    category: "Trolleys",
    open: false,
    "sub-categorys": [
      {
        label: "Electric Trolleys",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87401311_l.jpg",
      },
      {
        label: "Push Trolleys",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87401311_l.jpg",
      },
      { label: "Shop All" },
    ],
  },
  {
    category: "Clothing",
    open: false,
    "sub-categorys": [
      {
        label: "Golf Belts",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/36000401_3pl.jpg",
      },
      {
        label: "Golf Hats",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/36802730_3pl.jpg",
      },
      {
        label: "Golf Shorts",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/36703103_3pl.jpg",
      },
      {
        label: "Golf Trousers",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/36202990_3pl.jpg",
      },
      {
        label: "Golf Socks",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/36400803_3pl.jpg",
      },
      {
        label: "Golf Waterproofs",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/36503722_3pl.jpg",
      },
      {
        label: "Golf Shirts",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/36119801_3pl.jpg",
      },
      { label: "Shop All" },
    ],
  },
  {
    category: "Sale",
    "sub-categorys": [
      {
        label: "Drivers",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87102690_3pl.jpg",
      },
      {
        label: "Irons",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87102690_3pl.jpg",
      },

      {
        label: "Bags",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87301644_l.jpg",
      },
      {
        label: "Fairway-Woods",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87207590_3pl.jpg",
      },
      {
        label: "Shoes",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/28600901_3pl.jpg",
      },
      {
        label: "Gloves",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87801101_3pl.jpg",
      },
      {
        label: "Putters",
        imageUrl:
          "https://images.directgolf.co.uk/images/products/87704086_3pl.jpg",
      },

      { label: "Shop All" },
    ],
  },
];

export default CATEGORYS;
