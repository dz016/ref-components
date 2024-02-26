import React from "react";
import { Link } from "react-router-dom";
const Navlink = () => {
  const list = [
    {
      name: "Home",
      link: "",
      sublinks: [
        { heading: "Topwear", items: ["T-Shirt", "Sweater", "Jacket"] },
        { heading: "Bottomwear", items: ["Jeans", "Shorts", "Skirt"] },
        { heading: "Accessories", items: ["Hat", "Sunglasses", "Watch"] },
      ],
    },
    {
      name: "Men",
      link: "",
      sublinks: [
        { heading: "Topwear", items: ["Shirt", "Hoodie", "Blazer"] },
        { heading: "Bottomwear", items: ["Chinos", "Joggers", "Suit Pants"] },
        { heading: "Shoes", items: ["Sneakers", "Boots", "Loafers"] },
      ],
    },
    {
      name: "Women",
      link: "",
      sublinks: [
        { heading: "Topwear", items: ["Blouse", "Sweater", "Crop Top"] },
        { heading: "Bottomwear", items: ["Leggings", "Skirt", "Dress Pants"] },
        { heading: "Jewelry", items: ["Necklace", "Earrings", "Bracelet"] },
      ],
    },
    {
      name: "Kids",
      link: "",
      sublinks: [
        { heading: "Tops", items: ["T-Shirt", "Hoodie", "Sweater"] },
        { heading: "Bottoms", items: ["Jeans", "Shorts", "Dress"] },
        {
          heading: "Toys",
          items: ["Action Figures", "Dolls", "Building Blocks"],
        },
      ],
    },
  ];
  return (
    <>
      {list.map((item) => {
        return (
          <li>
            {" "}
            <Link to={`/${item.link}`}>{item.name}</Link>{" "}
          </li>
        );
      })}
    </>
  );
};

export default Navlink;
