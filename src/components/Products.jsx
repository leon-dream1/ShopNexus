import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const { register, handleSubmit } = useForm();
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  const loadProducts = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/products?search=${searchProduct}`
    );
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, [searchProduct]);

  const onSubmit = async (data) => {
    console.table(data);
    setSearchProduct(data.productName);
  };
  console.log(searchProduct);

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
    </div>
  );
};

export default Products;
