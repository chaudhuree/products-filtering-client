import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth } from "../context/AuthProvider";
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
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={currentUser?.photoURL} />
              </div>
            </div>
          ) : (
            ""
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
