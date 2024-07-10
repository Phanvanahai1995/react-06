import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function Paginate() {
  const navigate = useNavigate();

  function handlePageClick(data) {
    const page = data.selected + 1;
    navigate(`/products/${page}`);
  }

  return (
    <ReactPaginate
      previousLabel={<GrFormPrevious className="text-2xl text-white" />}
      nextLabel={<MdNavigateNext className="text-2xl text-white" />}
      breakLabel={"..."}
      pageCount={1500}
      marginPagesDisplayed={3}
      pageRangeDisplayed={6}
      onPageChange={handlePageClick}
      containerClassName={"flex mt-5 justify-center items-center"}
      pageClassName={"border px-2 text-white bg-blue-300"}
      activeClassName={"bg-blue-500"}
    />
  );
}

export default Paginate;
