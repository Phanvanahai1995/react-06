import ProductItem from "./ProductItem";

function ProductsList({ data }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 items-center mt-10 gap-5">
      {data.map((product) => (
        <ProductItem key={product._id} {...product} />
      ))}
    </div>
  );
}

export default ProductsList;
