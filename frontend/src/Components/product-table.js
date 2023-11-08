import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import EditIcon from "../Assests/icons/EditIcon";
import DeleteIcon from "../Assests/icons/DeleteIcon";
import StartIcon from "../Assests/icons/StarIcon";

function ProductList({ products, loading, error, fetchProducts }) {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleEdit = (sku) => {
    // Implement the logic to edit a product based on the SKU
  };

  const handleDelete = (sku) => {
    // Implement the logic to delete a product based on the SKU
  };

  const handleStart = (sku) => {
    // Implement the logic to start a product based on the SKU
  };
  return (
    <div className="w-full h-full overflow-auto">
      <table className="w-full">
        <thead className="text-midBlue text-xl">
          <tr className="px-10">
            <th className="px-10">SKU</th>
            <th className="px-10">Images</th>
            <th className="px-10">Product Name</th>
            <th className="px-10">Quantity</th>
            <th className="px-10">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.sku} className="items-center">
              <td className="text-lightGray text-center align-middle">
                {product.sku}
              </td>
              <td className="flex items-center justify-center">
                {product.images.length > 0 ? (
                  <img
                    src={product.images[0]}
                    alt="First Image"
                    width="100"
                    height="100"
                  />
                ) : (
                  "No images available"
                )}
              </td>
              <td className="text-darkGray text-lg text-center align-middle">
                {product.productName}
              </td>
              <td className="text-darkGray text-lg text-center align-middle">
                {product.quantity}
              </td>
              <td className="text-darkGray text-lg text-center align-middle">
                <div className="flex gap-2 w-full justify-center text-midBlue">
                  <EditIcon onClick={() => handleEdit(product.sku)} />
                  <DeleteIcon onClick={() => handleDelete(product.sku)} />
                  <StartIcon onClick={() => handleStart(product.sku)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchProducts })(ProductList);
