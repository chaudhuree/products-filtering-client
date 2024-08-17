import moment from "moment";
import { IoMdStar } from "react-icons/io";

export default function Product({ product }) {
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-2 py-2 relative">
        <p className="badge absolute text-sm  top-4 right-4 flex items-center gap-1  ">
          <span>{product.rating}</span>
          <span>
            <IoMdStar className="text-yellow-600" />
          </span>
        </p>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">{product.name}</h2>
        <p>{product.description}</p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className=" px-3 py-2 bg-indigo-500 text-sm rounded-full badge-primary">
            {product.brand}
          </span>
          <span className=" px-3 py-2 bg-violet-500 text-sm rounded-full badge-primary">
            {product.category}
          </span>
        </div>
        <p className="text-2xl font-bold mt-4">Price: {product.price}$</p>
        <p className="text-xs">Added on: {
          moment(product.createdAt).format("MMM Do YY h:mm a")
          
        }</p>
        <div className="flex justify-end items-end ml-auto mt-2">
          <button className="text-white  bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
