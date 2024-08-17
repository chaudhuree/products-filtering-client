import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
export default function Nav() {
  const { logout, currentUser } = useAuth();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="text-4xl max-md:text-3xl max-sm:text-2xl font-bold">
          Pashei
        </a>
      </div>
      <div className="flex-none ">
        <div className="menu menu-horizontal px-1 flex items-center gap-3">
          {currentUser ? (
          
            <span>{currentUser?.displayName}</span>
          ) : (
            <Link
              to="/signin"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In
            </Link>
          )}

          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className=" drawer-button lg:hidden flex justify-center items-center text-xl"
            >
              <RxHamburgerMenu />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
