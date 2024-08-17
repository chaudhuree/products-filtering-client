import Nav from "../components/Nav";
import Select from "react-select";
import { useProducts } from "../context/Products";
import { IoCloseSharp } from "react-icons/io5";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthProvider";
export default function MasterLayout({ children }) {
  const {
    setSort,
    setCategory,
    setBrand,
    setPriceRange,
    setSearch,
    setCurrentPage,
    
  } = useProducts();
  const { logout, currentUser } = useAuth();
  const sortOptions = [
    { value: "priceAsc", label: "Low to High" },
    { value: "priceDesc", label: "High to Low" },
    { value: "dateAsc", label: "Newest" },
    { value: "dateDesc", label: "Oldest" },
  ];
  console.log("currentUser", currentUser);

  const categoryOptions = [
    { value: "Dairy", label: "Dairy" },
    { value: "Pantry", label: "Pantry" },
    { value: "Nonveg", label: "Non-Veg" },
    { value: "Veg", label: "Veg" },
  ];

  const brandOptions = [
    { value: "DairyFresh", label: "DairyFresh" },
    { value: "GreenValley", label: "GreenValley" },
    { value: "CheeseMaster", label: "CheeseMaster" },
    { value: "FreshChoice", label: "FreshChoice" },
    { value: "ButterLand", label: "ButterLand" },
    { value: "PureDairy", label: "PureDairy" },
    { value: "YogurtValley", label: "YogurtValley" },
    { value: "SweetTreat", label: "SweetTreat" },
    { value: "Baker's Secret", label: "Baker's Secret" },
    { value: "InstantMilk", label: "InstantMilk" },
    { value: "Baker's Choice", label: "Baker's Choice" },
    { value: "CocoFarm", label: "CocoFarm" },
    { value: "PureGold", label: "PureGold" },
    { value: "CreamyDelight", label: "CreamyDelight" },
    { value: "CreamyRich", label: "CreamyRich" },
    { value: "FarmFresh", label: "FarmFresh" },
    { value: "SeaHarvest", label: "SeaHarvest" },
    { value: "MeatKing", label: "MeatKing" },
    { value: "PrimeCuts", label: "PrimeCuts" },
    { value: "OceanBounty", label: "OceanBounty" },
    { value: "GreenFarm", label: "GreenFarm" },
    { value: "VeggieDelight", label: "VeggieDelight" },
    { value: "GreenLeaf", label: "GreenLeaf" },
    { value: "ColorFresh", label: "ColorFresh" },
  ];

  const clearFilter = () => {
    window.location.reload();
  };

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
              <h2 className="text-lg font-semibold">Price Range</h2>
              <div className="px-5">
                <Slider
                  min={0}
                  max={20}
                  step={5}
                  range
                  dot
                  defaultValue={[0, 20]}
                  marks={{
                    0: "0",
                    5: "5",
                    10: "10",
                    15: "15",
                    20: "20",
                  }}
                  onChange={(value) => {
                    setCurrentPage(1);
                    // setSearch("");
                    setPriceRange(value);
                  }}
                />
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Sort</h2>

              <Select
                defaultValue={sortOptions[0]}
                onChange={(option) => {
                  setCurrentPage(1);
                  // setSearch("");
                  setSort(option.value);
                }}
                options={sortOptions}
              />
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Category</h2>

              <Select
                defaultValue={categoryOptions[0]}
                onChange={(option) => {
                  setCurrentPage(1);
                  // setSearch("");
                  setCategory(option.value);
                }}
                options={categoryOptions}
              />
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Brand</h2>

              <Select
                defaultValue={brandOptions[0]}
                onChange={(option) => setBrand(option.value)}
                options={brandOptions}
              />
            </div>

            <div className="mt-6 flex items-center justify-between flex-wrap">
              <button
                onClick={clearFilter}
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                Clear Filter
              </button>
              {currentUser ? (
                <button
                  onClick={() => logout()}
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Logout
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
