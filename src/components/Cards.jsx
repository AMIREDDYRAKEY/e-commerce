import React from "react";
import img1 from "../assets/b1.png";
import img2 from "../assets/b2.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
const Cards = () => {
  const data = [
    {
      title: "Continue Shopping Deals",
      products: [
        { img: img1 },
        { img: img2 },
        { img: img2 },
        { img: img1 },
      ],
    },
    {
      title: "Continue Shopping Deals",
      products: [
        { img: f1, offer: "Up to 45% | | off" },
        { img: f1, offer: "Min 30% | | off" },
        { img: f1, offer: "Up to 55% | | off" },
        { img: f1, offer: "Best Deals" },
      ],
    },
     {
      title: "Continue Shopping Deals",
      products: [
        { img: f4, offer: "Up to 45% | | off" },
        { img: f2, offer: "Min 30% | | off" },
        { img: f3, offer: "Up to 55% | | off" },
        { img: f4, offer: "Best Deals" },
      ],
    },
      {
      title: "Continue Shopping Deals",
      products: [
        { img: f5, offer: "Up to 45% | | off" },
        { img: p1, offer: "Min 30% | | off" },
        { img: p2, offer: "Up to 55% | | off" },
        { img: p3, offer: "Best Deals" },
      ],
    },
      {
      title: "Continue Shopping Deals",
      products: [
        { img: p4, offer: "Up to 45% | | off" },
        { img: p6, offer: "Min 30% | | off" },
        { img: p5, offer: "Up to 55% | | off" },
        { img: p3, offer: "Best Deals" },
      ],
    },
      {
      title: "Continue Shopping Deals",
      products: [
        { img: p7, offer: "Up to 45% | | off" },
        { img: p1, offer: "Min 30% | | off" },
        { img: p2, offer: "Up to 55% | | off" },
        { img: p3, offer: "Best Deals" },
      ],
    },
      {
      title: "Continue Shopping Deals",
      products: [
        { img: p5, offer: "Up to 45% | | off" },
        { img: p8, offer: "Min 30% | | off" },
        { img: p9, offer: "Up to 55% | | off" },
        { img: p10, offer: "Best Deals" },
      ],
    }, 
      {
      title: "Continue Shopping Deals",
      products: [
        { img: f1, offer: "Up to 45% | | off" },
        { img: f1, offer: "Min 30% | | off" },
        { img: f1, offer: "Up to 55% | | off" },
        { img: f1, offer: "Best Deals" },
      ],
    },
     {
      title: "Continue Shopping Deals",
      products: [
        { img: f4, offer: "Up to 45% | | off" },
        { img: f2, offer: "Min 30% | | off" },
        { img: f3, offer: "Up to 55% | | off" },
        { img: f4, offer: "Best Deals" },
      ],
    }, 
  ];

  return (
    <div className="bg-[#E3E6E6]">
      <div className="relative z-20 mt-[-50px] px-6 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {data.map((item, index) => (
           <div key={index} className="bg-white h-[360px] w-[300px] rounded-md shadow-md p-4 hover:shadow-lg transition flex flex-col">

              {/* Title */}
              <p className="text-lg font-semibold mb-3">
                {item.title}
              </p>

              {/* Products */}
              <div className="grid grid-cols-2 gap-4">
                {item.products.map((product, i) => (
                  <div key={i}>
                   <a href="#"> <img
                      src={product.img}
                      alt=""
                      className="h-[100px] w-full object-fit cursor-pointer"
                    /></a>

                    {/* offer*/}
                    <p className="text-xs h-[16px] text-gray-700 mt-1 ml-1 hover:text-orange-600">
                      {product.offer }
                    </p>
                  </div>
                ))}
              </div>

              {/* Push link to bottom */}
              <p className="text-sm text-blue-600 mt-auto hover:underline cursor-pointer">
                See more
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
