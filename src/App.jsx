import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, {useState}from 'react';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Career from './Components/Career/Career';
import Applicatinform from './Components/ApplicationFrom/Applicatinform';
import Aboutus from './Components/Aboutus/Aboutus';
import Conatactus from './Components/Contactus/Contactus';
import Product from './Components/Products/Product';
import Service from './Components/Services/Service';
import Productdetail from './Components/Productdetail/Productdetail';
import ProductCategory from './Components/Products/Product';
import PartDetails from './Components/Productdetail/Productdetail';

// Admin Panel Components
import Login from './Components/Admin/login';
import Dashboard from './Components/Admin/Dashboard';
import Products from './Components/Admin/Products';
import Jobs from './Components/Admin/Jobs';

const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/admin" />;
};

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  const router = createBrowserRouter([
    // User-facing routes
    {
      path: "/",
      element: (
        <>
          <Header />
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/career",
      element: (
        <>
          <Header />
          <Navbar />
          <Career />
          <Footer />
        </>
      ),
    },
    {
      path: "/job/:id",
      element: (
        <>
          <Header />
          <Navbar />
          <Applicatinform />
          <Footer />
        </>
      ),
    },
    {
      path: "/about-us",
      element: (
        <>
          <Header />
          <Navbar />
          <Aboutus />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <>
          <Header />
          <Navbar />
          <Conatactus />
          <Footer />
        </>
      ),
    },
    {
      path: "/products",
      element: (
        <>
          <Header />
          <Navbar />
          <Product />
          <Footer />
        </>
      ),
    },
    {
      path: "/services",
      element: (
        <>
          <Header />
          <Navbar />
          <Service />
          <Footer />
        </>
      ),
    },
    {
      path: "/product-detail/:id",
      element: (
        <>
          <Header />
          <Navbar />
          <Productdetail />
          <Footer />
        </>
      ),
    },
    {
      path: "/category/:category",
      element: (
        <>
          <Header />
          <Navbar />
          <ProductCategory />
          <Footer />
        </>
      ),
    },
    {
      path: "/part/:id",
      element: (
        <>
          <Header />
          <Navbar />
          <PartDetails />
          <Footer />
        </>
      ),
    },

    // Admin Panel Routes
    {
      path: "/admin",
      element: <Login onLogin={handleLogin} />,
    },
    {
      path: "/admin/dashboard",
      element: (
        <ProtectedRoute
          element={<Dashboard />}
          isAuthenticated={isAuthenticated}
        />
      ),
      children: [
        {
          path: "/admin/dashboard/product",
          element: (
            <ProtectedRoute
              element={<Products />}
              isAuthenticated={isAuthenticated}
            />
          ),
        },
        {
          path: "jobs",
          element: (
            <ProtectedRoute
              element={<Jobs />}
              isAuthenticated={isAuthenticated}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
