import Nav from "../components/Nav";
import Select from "react-select";
import { useProducts } from "../context/Products";
import { IoCloseSharp } from "react-icons/io5";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
export default function MasterLayout({ children }) {
  const { setSort, setCategory, setBrand, setPriceRange } = useProducts();

  const sortOptions = [
    { value: "priceAsc", label: "Low to High" },
    { value: "priceDesc", label: "High to Low" },
    { value: "dateAsc", label: "Newest" },
    { value: "dateDesc", label: "Oldest" },
  ];

  const categoryOptions = [
    { value: "Dairy", label: "Dairy" },
    { value: "Pantry", label: "Pantry" },
    { value: "Nonveg", label: "Non-Veg" },
    { value: "Veg", label: "Veg" },
  ];

  const brandOptions = [
    { value: "DairyFarm", label: "DairyFarm" },
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
              <Slider
                min={0}
                max={4}
                step={1}
                range
                dot
                marks={{
                  0: "0",
                  1: "1",
                  2: "2",
                  3: "3",
                  4: "4",
                }}
                onChange={(value) => setPriceRange(value)}
              />
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Sort</h2>

              <Select
                defaultValue={sortOptions[0]}
                onChange={setSort}
                options={sortOptions}
              />
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Category</h2>

              <Select
                defaultValue={categoryOptions[0]}
                onChange={setCategory}
                options={categoryOptions}
              />
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Brand</h2>

              <Select
                defaultValue={brandOptions[0]}
                onChange={setBrand}
                options={brandOptions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
