import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import './Product.css';

const Product = () => {
  
  // Get the category from the URL
  const { category } = useParams();
  const [parts, setParts] = useState([]);

  useEffect(() => {
     
      axios.get(`http://localhost:3000/api/parts/${category}`)
          .then((response) => setParts(response.data))
          .catch((error) => console.error(error));
  }, [category]); 


  return (
    <div className="container">
      <div className="mt-5">
        <h1>{category}</h1>
        <hr />
        <div className="col-lg-11 col-md-11 col-12">
          <h4 className="mb-2 mt-3 title text-capitalize">Related Products</h4>
        </div>
      </div>

      <div className="row gap-4">
        {/* Map over the products array and render each product */}
        {parts.map((part) => (
          <div className="col-lg-3 col-md-4 col-12 border border-info   " key={part.id}>
            <Link
              to={`/part/${part.id}`} // Use Link to route to the product detail page
              className="products p-4 d-flex flex-column text-decoration-none justify-content-center align-items-center"
            >
              <img
                
                alt={part.title}
                className="img-fluid ls-is-cached lazyloaded"
                src={`http://localhost:3000/${part.image_url}`}
                style={{ maxWidth: '200px' }}
              />
              <h5 className="title fs-14 text-capitalize mt-3 text-center">{part.title}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
