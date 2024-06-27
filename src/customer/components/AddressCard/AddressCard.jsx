import React from "react";

const AddressCard = () => {
  return (
    <div>
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">SVH</p>

        <p> 
          HCM
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          12323
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
