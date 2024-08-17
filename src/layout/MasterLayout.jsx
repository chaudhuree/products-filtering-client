import Nav from "../components/Nav";
import Select from "react-select";
import { useProducts } from "../context/Products";
import { IoCloseSharp } from "react-icons/io5";

import { RxHamburgerMenu } from "react-icons/rx";
export default function MasterLayout({ children }) {
  const { sort, setSort } = useProducts();
  console.log("sort", sort);

  const sortOptions = [
    { value: "priceAsc", label: "Low to High" },
    { value: "priceDesc", label: "High to Low" },
    { value: "dateAsc", label: "Newest" },
    { value: "dateDesc", label: "Oldest" },
  ];
  return (
    <div>
      <Nav />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="px-5 py-2">{children}</div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className=" bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <div className="flex justify-between items-center ">
              <h1 className="text-2xl font-bold">Filters</h1>
              <label htmlFor="my-drawer-2" className="drawer-button">
                <IoCloseSharp className="text-2xl sm:hidden" />
              </label>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Sort</h2>

              <Select
                defaultValue={sortOptions[0]}
                onChange={setSort}
                options={sortOptions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
