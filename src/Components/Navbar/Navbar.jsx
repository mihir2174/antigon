import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Antigonelogo from "../../assets/Navabar/logo.jpg";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="navbar ">
        <div className="container d-flex align-items-center justify-content-center ">
          <div className="d-flex align-items-center justify-content-evenly gap pb-2 pt-2 ">
            <ul className=" m-0 d-flex list-unstyled align-items-center gap-5  justify-content-center">
              <li className="link-size">
                <Link
                  to="/"
                  className="text-decoration-none"
                  style={{ color: "black" }}
                >
                  Home
                </Link>
              </li>
              <li className="link-size">
                
              <li
  className="nav-item dropdown"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <a
    className="dropdown-toggle nav-item nav-link text-decoration-none"
    href="#"
    aria-expanded={isOpen}
    style={{
      color: "black",
     
      
      
    }}
  >
    Products
  </a>
  <ul className="dropdown-content list-unstyled" style={{
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
  }}>
   
    <li>
      <Link
        to="/category/rf"
        className="dropdown-item text-decoration-none"
        style={{ color: "#333", fontSize: "16px", fontWeight:"500"}}
      >
        RF
      </Link>
    </li>
    <li>
      <Link
        to="/category/embedded"
        className="dropdown-item text-decoration-none"
        style={{ color: "#333", fontSize: "16px", fontWeight:"500"}}
      >
        Embedded
      </Link>
    </li>
    <li>
      <Link
        to="/category/power supply"
        className="dropdown-item text-decoration-none"
        style={{ color: "#333", fontSize: "16px", fontWeight:"500"}}
      >
        Power Supply
      </Link>
    </li>
    <li>
      <Link
        to="/category/software"
        className="dropdown-item text-decoration-none"
        style={{ color: "#333", fontSize: "16px", fontWeight:"500"}}
      >
        Software
      </Link>
    </li>
    <li>
      <Link
        to="/category/nano science"
        className="dropdown-item text-decoration-none"
        style={{ color: "#333", fontSize: "16px", fontWeight:"500"}}
      >
       Nano Science
      </Link>
    </li>
    <li>
      <Link
        to="/category/aviation lighting"
        className="dropdown-item text-decoration-none"
        style={{ color: "#333", fontSize: "16px", fontWeight:"500"}}
      >
       Aviation Lighting
      </Link>
    </li>
    
  </ul>
</li>

    
                
              </li>
              <li className="link-size">
                
              <li
  className="nav-item dropdown"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <Link to="/services"
    className="dropdown-toggle nav-item nav-link text-decoration-none"
    
    aria-expanded={isOpen}
    style={{
      color: "black",
     
      
      
    }}
  >
    Services
  </Link>
  <ul className="dropdown-content list-unstyled" style={{
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
  }}>
    <li>
      <Link
        to=""
        className="dropdown-item text-decoration-none"
        style={{ color: "#333", fontSize: "16px", fontWeight:"500"}}
      >
        Electronic Manufacturing Services
      </Link>
    </li>
    <li>
      <Link
        to=""
        className="dropdown-item text-decoration-none"
        style={{ color: "#333", fontSize: "16px", fontWeight:"500"}}
      >
        Hardware Design Services
      </Link>
    </li>
    <li>
      <Link
        to=""
        className="dropdown-item text-decoration-none"
        style={{ color: "#333", fontSize: "16px", fontWeight:"500"}}
      >
        IT & Software Services
      </Link>
    </li>
    <li>
      <Link
        to=""
        className="dropdown-item text-decoration-none"
        style={{ color: "#333", fontSize: "16px", fontWeight:"500"}}
      >
       Electronic – CAD Sevices
      </Link>
    </li>
    
  </ul>
</li>

    
                
              </li>
            </ul>
            <ul className=" m-0 p-0 d-flex align-items-center justify-content-center">
              <Link to="/"><img src={Antigonelogo} className="logo-antigone"></img></Link>
            </ul>
            <ul className=" m-0 d-flex  list-unstyled align-items-center gap-5  justify-content-center">
              <li className="link-size">
                <Link
                  to="/career"
                  className="text-decoration-none"
                  style={{ color: "black" }}
                >
                  Careers
                </Link>
              </li>
              <li className="link-size">
                <Link
                  to="/about-us"
                  className="text-decoration-none"
                  style={{ color: "black" }}
                >
                  About Us
                </Link>
              </li>
              <li className="link-size">
                <Link
                  to="/contact-us"
                  className="text-decoration-none"
                  style={{ color: "black" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
