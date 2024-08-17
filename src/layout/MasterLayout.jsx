import Nav from '../components/Nav'
import { RxHamburgerMenu } from 'react-icons/rx'
export default function MasterLayout({ children }) {
  return (
    <div><Nav />
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-2"
                className=" drawer-button lg:hidden flex justify-center items-center text-xl"
              >
                <RxHamburgerMenu />
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div></div>
  )
}
