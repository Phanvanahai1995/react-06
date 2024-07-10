import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="container py-3 mx-auto max-w-[1200px] mt-60 flex flex-col gap-6 justify-center items-center">
      <h1 className="text-8xl font-bold text-white">Welcome to Shop.</h1>
      <NavLink
        to="/products/1"
        className="bg-yellow-500 text-white px-5 font-bold py-3 text-lg rounded-sm hover:bg-yellow-600 transition-colors duration-300"
      >
        Go shopping now!
      </NavLink>
    </div>
  );
}

export default HomePage;
