import React from 'react';
import img1 from "../assets/f1.png";
import img2 from "../assets/f2.png";
import img3 from "../assets/f3.png";
import img4 from "../assets/f4.png";
import img5 from "../assets/f1.png";

const Offers = () => {
    const data = [
        { img: img1, name: "Offer 1" },
        { img: img2, name: "Offer 2" },
        { img: img3, name: "Offer 3" },
        { img: img4, name: "Offer 4" },
        { img: img5, name: "Offer 5" },
        { img: img1, name: "Offer 6" },
        { img: img2, name: "Offer 7" },
        { img: img3, name: "Offer 8" },
        { img: img4, name: "Offer 9" },
        { img: img5, name: "Offer 10" },
    ];

    return (
        <div className="p-4">
            <h1 className="text-sm font-bold  ">
                Free Delivery Always + Extra 100 Cashback
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-4">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img 
                            src={item.img} 
                            alt={item.name}
                            className="w-[130px] h-[130px] object-fit rounded-sm" 
                        />
                        <p className="mt-2 text-center text-sm font-medium text-gray-700">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
             <p className="text-sm text-blue-600  hover:underline cursor-pointer mt-3">
                See more
              </p>
        </div>
    );
};

export default Offers;
