function ProductModal({ isOpen, onClose, onSubmit, product }) {
  const handleModalClick = (e) => e.stopPropagation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={handleModalClick}>
        <h2 className="text-lg mb-4">{product ? "Edit Product" : "Add Product"}</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input type="text" name="name" defaultValue={product?.name} placeholder="Name" required className="w-full p-2 border rounded" />
          <input type="text" name="category" defaultValue={product?.category} placeholder="Category" required className="w-full p-2 border rounded" />
          <input type="number" name="price" defaultValue={product?.price} step="0.01" placeholder="Price" required className="w-full p-2 border rounded" />
          <input type="number" name="stock" defaultValue={product?.stock} placeholder="Stock" required className="w-full p-2 border rounded" />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded text-white bg-red-500 hover:bg-red-700">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-700">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProductModal;
