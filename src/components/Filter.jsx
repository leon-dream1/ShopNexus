/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

const Filter = ({
  selectedBrand,
  setSelectedBrand,
  setSelectedCategory,
  selectedCategory,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const handleBrand = (event) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    console.log("Selected brand:", brand);
  };

  const handleCategory = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    console.log("Selected Category:", category);
  };

  console.table(selectedBrand);

  return (
    <div className="border shadow-lg p-[30px] space-y-4">
      {/* <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className="text-xl mb-2 font-playfair font-medium">Select Brand</p>
          <select
            {...register("brandName")}
            className="w-full p-2 text-xl border"
          >
            <option value="All">All</option>
            <option value="Adidas">Adidas</option>
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
            <option value="All">All</option>
            <option value="Men's Sneaker">Mens Sneaker</option>
            <option value="Men's Pants">Mens Pants</option>
            <option value="Men's Boot">Mens Boot</option>
            <option value="Bag">Bag</option>
            <option value="Cap">Cap</option>
          </select>
        </div>
        <div>
          <p className="text-xl mb-2 font-playfair font-medium">Choose Price</p>
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
      </form> */}

      <div>
        <p className="text-xl mb-2 font-playfair font-medium">Select Brand</p>
        <select className="w-full p-2 text-xl border" onChange={handleBrand}>
          <option value="All">All</option>
          <option value="Adidas">Adidas</option>
          <option value="Nike">Nike</option>
          <option value="Reebok">Reebok</option>
          <option value="Puma">Puma</option>
          <option value="Fila">Fila</option>
        </select>
      </div>
      <div>
        <p className="text-xl mb-2 font-playfair font-medium">
          Select Category
        </p>
        <select className="w-full p-2 text-xl border" onChange={handleCategory}>
          <option value="All">All</option>
          <option value="Men's Sneaker">Mens Sneaker</option>
          <option value="Men's Pants">Mens Pants</option>
          <option value="Men's Boot">Mens Boot</option>
          <option value="Bag">Bag</option>
          <option value="Cap">Cap</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
