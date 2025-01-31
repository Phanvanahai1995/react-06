import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../store/cartSilce";

function ProductItem({ name, image, price, _id, quantity, brand }) {
  const cart = useSelector((store) => store.cart.cart);

  const productSelected = {
    _id,
    left: quantity - 1,
    name,
    price,
    quantity: 1,
    image,
    brand,
  };

  const dispatch = useDispatch();

  function addToCart() {
    dispatch(addCart(productSelected));
  }

  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-white py-8 rounded-md">
      <Link to={`/product-detail/${_id}`}>
        <img src={image} alt={name} className="object-cover rounded-md" />
      </Link>
      <div className="text-xl font-medium">{name}</div>
      <div className="flex gap-4">
        <span className="font-bold">${price}</span>
        <Button onClick={addToCart}>
          <FaCartPlus className="text-green-400 text-2xl" />
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
