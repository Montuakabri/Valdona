import React from "react";
// import img from "../assets/images/product-img/output.png";

const ProductCardui = ({ prodata }) => {
  // console.log(data);

  return prodata.map((item, ind) => {
    return (
      <div className="col-lg-3 col-md-2" key={ind}>
        <div className="card-inner justify-content-center">
          <span className="badge new-badge">
            {item.new == true ? "New" : ""}
          </span>
          <img src={item.images} alt="" className="card__image" />
          <div className="cardbody">
            <p className="product-brand">VALDONA</p>
            <p className="card__title">{item.title}</p>
            <span className="price">${item.price}</span>
          </div>
        </div>
      </div>
    );
  });

  // orignal card //

  //   return (
  //     <div className="card-inner">
  //       <span className="badge new-badge">NEW</span>
  //       <img src={...} alt="" className="card__image" />
  //       <div className="cardbody">
  //         <p className="product-brand">VALDONA</p>
  //         <p className="card__title">...</p>
  //         <span className="price">$...</span>
  //       </div>
  //     </div>
  //   );
};

export default ProductCardui;
