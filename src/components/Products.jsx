import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const { register, handleSubmit, reset } = useForm();
  const [products, setProducts] = useState([]);
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [searchProduct, setSearchProduct] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const productPerPage = 10;
  let totalPage;
  if (searchProduct) {
    totalPage = Math.ceil(products.length / productPerPage);
  } else {
    totalPage = Math.ceil(totalProductCount / productPerPage);
  }
  const pages = [...Array(totalPage).keys()];

  const loadProducts = async () => {
    const res = await fetch(
      `${
        import.meta.env.VITE_API_URL
      }/products?search=${searchProduct}&currentPage=${currentPage}&productPerPage=${productPerPage}`
    );
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  const loadTotalProductsCount = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/totalProducts`);
    const data = await res.json();
    console.log("count", data);
    setTotalProductCount(data.count);
  };

  useEffect(() => {
    loadProducts();
    loadTotalProductsCount();
  }, [searchProduct, currentPage]);

  const onSubmit = async (data) => {
    console.table(data);
    setSearchProduct(data.productName);
    reset();
  };
  //   console.log(totalProductCount);

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-[25px] text-center font-playfair font-semibold text-slate-900 mt-[50px]">
        Choose Your Favorite Products : {products.length}
      </h1>

      {/* Search by product name */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-[30px]">
        <input
          type="text"
          placeholder="Search Your Product"
          className="input input-bordered w-3/4 md:w-full md:max-w-xs"
          {...register("productName")}
        />
        <input
          type="submit"
          value="Search"
          className="input input-bordered w-[100px] md:w-[150px] bg-black text-white text-[20px] font-semibold font-playfair cursor-pointer"
        />
      </form>

      {products.length === 0 && (
        <p className="text-center mt-[90px] font-playfair text-xl">
          No Data Found
        </p>
      )}

      {/* Display Product */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[50px] m-4 lg:mt-[100px]">
        {products.map((product) => (
          <SingleProduct key={product?._id} product={product} />
        ))}
      </div>
      <div className={`join grid grid-cols-7 w-[300px] mx-auto my-[50px]`}>
        <button onClick={handlePrev} className="join-item btn btn-square">
          Prev
        </button>
        {pages.map((page, index) => (
          <button
            key={index}
            className={`join-item btn ${
              currentPage === page ? "btn-active" : ""
            }`}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} className="join-item btn btn-square">
          Next
        </button>
      </div>
    </div>
  );
};
export default Products;
