import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Productdetail = () => {
  const { id } = useParams();
    const [part, setPart] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/part/${id}`)
            .then((response) => setPart(response.data))
            .catch((error) => console.error(error));
    }, [id]);

    if (!part) return <div>Loading...</div>;

    const keyFeatures = part.keys_product.split(',');

  return (
    <div className="container">
      <div className="container-fluid px-lg-5 px-md-3">
        <div className="row mt-5 gap-3">
          {/* Left Column */}
          <div className="col-lg-4 col-md-5 col-12 mb-4 mb-md-0 left-col">
            <div className="product-details">
              <div className="img-box border border-info d-flex justify-content-center align-items-center">
                <img src={`http://localhost:3000/${part.image_url}`} alt={part.title} className="img-fluid p-5" />
              </div>
              <div className="d-md-flex d-none justify-content-center mt-3">
                <button type="button" className="btn btn-primary btn-sm enquireNow" data-prodid={part.id}>
                  Enquire Now <i className="pl-2 fa fa-edit"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-7 col-md-6 col-12 right-col">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <h1 className="mb-2 heading">{part.title}</h1>
              </div>
              <div className="col-lg-12 col-md-12 col-12">
                <p>{part.description}</p>
                <p><strong>Key Features</strong></p>
                 <ul>
                  {/* Render the split keys_product as a list */}
                  {keyFeatures.map((feature, index) => (
                    <li key={index}>{feature.trim()}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
