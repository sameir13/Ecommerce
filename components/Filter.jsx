import React from "react";

const Filter = () => {
  return (
    <div className="filterParentDiv MaxPad">
      <div className="filtertextbox">
      

      <h3>Shop by Price</h3>
      </div>
      <div className="filterBtnDiv ">
        <button>Below Rs. 10,000</button>
        <button>Rs. 10,000-Rs. 20,000</button>
        <button>Rs. 20,000-Rs. 30,000</button>
        <button>Rs. 30,000-Rs. 40,000</button>
        <button>Rs. 40,000-Rs. 50,000</button>
        <button>Rs. 50,000-Rs. 60,000</button>
        <button>Rs. 60,000-Rs. 70,000</button>
        <button>Rs. 70,000-Rs. 80,000</button>
      </div>
    </div>
  );
}

export default Filter;
