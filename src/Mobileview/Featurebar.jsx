import React from "react";

const Featurebar = () => {
  return (
    <div className="flex justify-around bg-white py-3 text-xs pb-[40px]">
      <div className="text-center">🚚<br />Free Delivery</div>
      <div className="text-center">💳<br />UPI Payment</div>
      <div className="text-center">🏷️<br />Coupons</div>
    </div>
  );
};

export default Featurebar;
