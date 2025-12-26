import React from "react";
import img1 from "../assets/b1.png";
import img2 from "../assets/b2.png";
import img3 from "../assets/b3.png";
import img4 from "../assets/b4.png";
import img5 from "../assets/f1.png";

const Mobilecards = () => {
  const data = [
    { products: [{ img: img1, name: "Stylish Shoes 1" }] },
    { products: [{ img: img2, name: "Stylish Shoes 2" }] },
    { products: [{ img: img3, name: "Stylish Shoes 3" }] },
    { products: [{ img: img3, name: "Stylish Shoes 4" }] },
    { products: [{ img: img4, name: "Stylish Shoes 5" }] },
    { products: [{ img: img5, name: "Stylish Shoes 6" }] },
       { products: [{ img: img1, name: "Stylish Shoes 1" }] },
    { products: [{ img: img2, name: "Stylish Shoes 2" }] },
    { products: [{ img: img3, name: "Stylish Shoes 3" }] },
  ];

  return (
    <div className="pb-[90px] p-4">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {data.map((item, idx) =>
          item.products.map((product, i) => (
            <a
              key={i}
              href={product.link || "#"}
              className="flex flex-col items-center "
            >
              
              <img
                src={product.img}
                
                className="h-[150px] w-[180px] object-fit rounded-md"
              />
              
              <p className="mt-2 text-center text-sm font-medium text-gray-700">
                {product.name}
              </p>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default Mobilecards;
