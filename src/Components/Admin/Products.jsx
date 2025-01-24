import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css"; // Link to external CSS for styles

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    category: "",
    keys_product: "",
  });
  const [image, setImage] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/parts");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add a new product
  const handleAddProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("title", newProduct.title);
      formData.append("description", newProduct.description);
      formData.append("category", newProduct.category);
      formData.append("keys_product", newProduct.keys_product);
      if (image) formData.append("image", image);

      await axios.post("http://localhost:3000/api/parts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchProducts();
      setNewProduct({ title: "", description: "", category: "", keys_product: "" });
      setImage(null);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Update a product
  const handleUpdateProduct = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/parts/${selectedProduct.id}`,
        selectedProduct
      );
      fetchProducts();
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Delete a product
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/parts/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="products-container">
      <h1 className="heading">Products</h1>

      {/* Add New Product */}
      <div className="add-product-section">
        <h4>Add New Product</h4>
        <div className="add-product-form">
          <input
            type="text"
            placeholder="Title"
            value={newProduct.title}
            onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Keys Product"
            value={newProduct.keys_product}
            onChange={(e) => setNewProduct({ ...newProduct, keys_product: e.target.value })}
          />
          <select
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          >
            <option value="">Select a category</option>
            <option value="rf">RF</option>
            <option value="embedded">Embedded</option>
            <option value="power supply">Power Supply</option>
            <option value="software">Software</option>
            <option value="nano science">Nano Science</option>
            <option value="aviation lighting">Aviation Lighting</option>
          </select>

          <label>Upload Image:</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button className="btn add-btn" onClick={handleAddProduct}>
            Add Product
          </button>
        </div>
      </div>

      {/* Edit Product */}
      {selectedProduct && (
        <div className="edit-product-section">
          <h2>Edit Product</h2>
          <input
            type="text"
            placeholder="Title"
            value={selectedProduct.title}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={selectedProduct.description}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Category"
            value={selectedProduct.category}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, category: e.target.value })}
          />
          <button className="btn update-btn" onClick={handleUpdateProduct}>Update Product</button>
          <button className="btn cancel-btn" onClick={() => setSelectedProduct(null)}>Cancel</button>
        </div>
      )}

      {/* Product List */}
      <h4 className="product-list-heading">Our Product List:</h4>
      <ul className="product-list">
        {products.map((product) => (
          <li className="product-item" key={product.id}>
            <div className="product-details">
              <p>Part Name: <strong>{product.title}</strong></p>
              <p>Category: <strong>{product.category}</strong></p>
            </div>
            <div className="action-buttons">
              <button className="btn delete-btn" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              <button className="btn edit-btn" onClick={() => setSelectedProduct(product)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
