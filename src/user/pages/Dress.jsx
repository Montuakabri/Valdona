import React from "react";
import ProductCardui from "../../component/ProductCardui";
import { useEffect, useState } from "react";
import axios from "axios";

const Dress = () => {
  const [prodata, setprodata] = useState([]);
  const [inputdata, setinputdata] = useState({
    title: "",
    price: "",
    images: "",
  });
  // for API get
  useEffect(() => {
    axios.get("http://localhost:3001/dress").then((res) => {
      setprodata(res.data);
    });
  }, []);
  // input value set
  const handelInputChange = (e) => {
    setinputdata({ ...inputdata, [e.target.name]: e.target.value });
  };
  // for API post
  const handleSubmit = (e) => {
    // e.preventDefault();
    axios.post("http://localhost:3001/dress", inputdata).then((res) => {
      console.log(res.data);
    });
  };

  // ======================

  return (
    <>
      <div className="container">
        <div className="page-title">
          <h1>Dress</h1>
        </div>
        <div className="productadd">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="title"
              name="title"
              value={inputdata.title}
              onChange={handelInputChange}
            />
            <input
              type="text"
              placeholder="price"
              name="price"
              value={inputdata.price}
              onChange={handelInputChange}
            />
            <input
              type="url"
              placeholder="Image link"
              name="images"
              value={inputdata.images}
              onChange={handelInputChange}
            />
            <button type="submit">Add new product</button>
          </form>
        </div>
      </div>
      <section className="product-listing">
        <div className="container">
          <div className="row">
            <ProductCardui prodata={prodata} type="dress" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dress;
