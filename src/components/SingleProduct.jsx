/* eslint-disable react/prop-types */
const SingleProduct = ({ product }) => {
  return (
    <div
      key={product?._id}
      className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg relative pb-10"
    >
      <img
        className="object-cover w-full h-56 cursor-pointer"
        src={product.productImage}
        alt="avatar"
      />
      <div className="space-y-5 p-5">
        <h2 className="text-[23px] font-open-sans font-extrabold text-[#4596e6] mb-2">
          {product?.productName}
        </h2>
        <span className="bg-green-600 text-white text-[12px] px-[5px] lg:px-[9px] py-[5px] lg:py-[9px] mr-4">
          {product?.category}
        </span>
        <span className="bg-blue-500 text-white text-[12px] px-[5px] lg:px-[9px] py-[5px] lg:py-[9px]">
          {product?.brandName?.toUpperCase()}
        </span>
        <p className="text-gray-700 text-[15px] font-playfair">
          {product?.description}
        </p>
        <p className="text-gray-700 text-[18px] font-playfair">
          Rating: {product?.ratings}
        </p>

        <p className="text-[22px] pb-10">
          Price:
          <span className="text-[25px] text-[#333333] font-open-sans font-bold">
            ${product?.price}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
