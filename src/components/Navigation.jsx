import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

function Navigation() {
  const param = useParams().page;

  const cart = useSelector((store) => store.cart.cart);

  const totalCart = cart.reduce((prev, item) => prev + item.quantity, 0);

  return (
    <div className="container py-6 text-2xl text-white mx-auto max-w-[1200px] flex items-center justify-between">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-400 font-bold" : "font-bold"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={`/products/${param ? param : "1"}`}
        className={({ isActive }) =>
          isActive ? "text-yellow-400 font-bold" : "font-bold"
        }
      >
        Products
      </NavLink>
      <div>
        <NavLink to="/cart" className="relative">
          <FaCartPlus className="text-3xl" />
          {cart.length > 0 && (
            <span className="absolute top-[-15px] bg-white text-lg w-[25px] h-[25px] flex justify-center items-center rounded-full right-[-30px] text-orange-600">
              {totalCart}
            </span>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
