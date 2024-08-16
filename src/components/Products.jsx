import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";

const Products = () => {
  const { register, handleSubmit, reset } = useForm();
  const [products, setProducts] = useState([]);
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [searchProduct, setSearchProduct] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [sortBy, setSortBy] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const productPerPage = 10;
  let totalPage;
  if (searchProduct || selectedBrand !== "All" || selectedCategory !== "All") {
    totalPage = Math.ceil(products.length / productPerPage);
  } else {
    totalPage = Math.ceil(totalProductCount / productPerPage);
  }
  const pages = [...Array(totalPage).keys()];

  const loadProducts = async () => {
    const res = await fetch(
      `${
        import.meta.env.VITE_API_URL
      }/products?search=${searchProduct}&currentPage=${currentPage}&productPerPage=${productPerPage}&sort=${sortBy}&selectedBrand=${selectedBrand}&selectedCategory=${selectedCategory}`
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
  }, [searchProduct, currentPage, sortBy, selectedBrand, selectedCategory]);

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

  console.log("sort", sortBy);

  return (
    <div className="container mx-auto">
      <h1 className="text-[25px] text-center font-playfair font-semibold text-slate-900 mt-[50px]">
        Choose Your Favorite Products : {products.length}
      </h1>

      <div className="flex flex-col md:flex-row justify-between mt-[30px] p-[20px] space-y-4 md:space-y-0">
        {/* Search by product name */}
        <form
          className="w-[100%] md:w-[70%] "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Search Your Product"
            className="input input-bordered w-3/4 md:w-2/4"
            {...register("productName")}
          />
          <input
            type="submit"
            value="Search"
            className="input input-bordered w-[100px] md:w-[150px] bg-black text-white text-[20px] font-semibold font-playfair cursor-pointer"
          />
        </form>

        {/* Sort */}
        <details className="dropdown">
          <summary className="btn m-1">Sort Product</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a onClick={() => setSortBy("asc")}>Low to High Price</a>
            </li>
            <li>
              <a onClick={() => setSortBy("desc")}>High to Low Price</a>
            </li>
            <li>
              <a onClick={() => setSortBy("newest")}>Newest Added Product</a>
            </li>
          </ul>
        </details>
      </div>

      {products.length === 0 && (
        <p className="text-center mt-[90px] font-playfair text-xl">
          No Data Found
        </p>
      )}

      {/* Display Product */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[50px] m-4 lg:mt-[100px]">
        {/* Filter By Category */}

        <Filter
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {/* <div className="border shadow-lg p-[30px]">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p className="text-xl mb-2 font-playfair font-medium">
                Select Brand
              </p>
              <select
                {...register("brandName")}
                className="w-full p-2 text-xl border"
              >
                <option value="Adidas" selected>
                  Adidas
                </option>
                <option value="Nike">Nike</option>
                <option value="Reebok">Reebok</option>
                <option value="Puma">Puma</option>
                <option value="Reebok">Fila</option>
              </select>
            </div>
            <div>
              <p className="text-xl mb-2 font-playfair font-medium">
                Select Category
              </p>
              <select
                {...register("categoryName")}
                className="w-full p-2 text-xl border"
              >
                <option value="Men's Sneaker" selected>
                  Mens Sneaker
                </option>
                <option value="Men's Pants">Mens Pants</option>
                <option value="Men's Boot">Mens Boot</option>
                <option value="Bag">Bag</option>
                <option value="Cap">Cap</option>
              </select>
            </div>
            <div>
              <p className="text-xl mb-2 font-playfair font-medium">
                Choose Price
              </p>
              <div className="flex flex-col lg:flex-row lg:justify-between gap-1">
                <input
                  {...register("minimumPrice")}
                  placeholder="Minimum Price"
                  className="input input-bordered"
                />
                <input
                  {...register("maximumPrice")}
                  placeholder="Maximum Price"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div>
              <input
                type="submit"
                value={"Filter"}
                className="input input-bordered bg-blue-500 text-white cursor-pointer font-semibold font-playfair"
              />
            </div>
          </form>
        </div> */}

        {products.map((product) => (
          <SingleProduct key={product?._id} product={product} />
        ))}
      </div>

      {/* Pagination */}
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
