import React, { useState } from "react";
import ProductModal from "./ProductModal";
function ProductList() {
  const initialProducts = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      stock: 25,
    },
    {
      id: 2,
      name: "Smartphone",
      category: "Electronics",
      price: 599.99,
      stock: 50,
    },
    {
      id: 3,
      name: "Desk Chair",
      category: "Furniture",
      price: 199.99,
      stock: 75,
    },
  ];
  const [products, setProducts] = useState(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const openModalForEdit = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const openModalForAdd = () => {
    setCurrentProduct(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newProduct = {
      id: currentProduct ? currentProduct.id : Date.now(),
      name: form.name.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      stock: parseInt(form.stock.value, 10),
    };

    if (currentProduct) {
      setProducts(
        products.map((p) => (p.id === currentProduct.id ? newProduct : p))
      );
    } else {
      setProducts([...products, newProduct]);
    }

    closeModal();
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Product Management
      </h1>
      <button
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModalForAdd}
      >
        Add Product
      </button>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product Name
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Stock
              </th>
              <th scope="col" className="py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.name}
                </th>
                <td className="py-4 px-6">{product.category}</td>
                <td className="py-4 px-6">${product.price}</td>
                <td className="py-4 px-6">{product.stock}</td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => openModalForEdit(product)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleSubmit}
          product={currentProduct}
        />
      </div>
    </div>
  );
}

export default ProductList;
