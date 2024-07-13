import { Link, NavLink } from "react-router-dom";
import logo from "/icon.svg";
// import Container from '../ui/Container';

const Header = () => {
  const activeColor =
    "font-bold border-b-white border-2  border-t-0 border-r-0 border-l-0 rounded-none text-white";

  const links = (
    <>
      <li className="pb-4 md:pb-0 md:pr-12 lg:pb-0 lg:pr-12">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeColor : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li className="pb-4 md:pb-0 md:pr-12 lg:pb-0 lg:pr-12">
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeColor : ""
          }
        >
          Products
        </NavLink>
      </li>

      <li className="pb-4 md:pb-0 md:pr-12 lg:pb-0 lg:pr-12">
        <NavLink
          to="/product-management"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeColor : ""
          }
        >
          Product Management
        </NavLink>
      </li>

      <li className="pb-4 md:pb-0 md:pr-12 lg:pb-0 lg:pr-12">
        <NavLink
          to="/about-us"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeColor : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="pb-4 md:pb-0 md:pr-12 lg:pb-0 lg:pr-12">
        <NavLink
          to="/checkout"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeColor : ""
          }
        >
          Checkout
        </NavLink>
      </li>

      <li className="pb-8 md:pb-0 lg:pb-0">
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "rounded-none text-[#FFFF00] outline"
                : ""
          }
        >
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <p id="itemCount" className="relative top-2">
              0
            </p>
          </div>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="mx-auto flex max-w-screen-xl flex-row-reverse items-center justify-between px-3 py-10 text-white md:px-6 xl:flex-row">
      <div>
        <Link to="/">
          <div className="flex items-center gap-1 font-mono text-2xl">
            <h2>Workout</h2>
            <div className="max-w-10">
              <img src={logo} alt="logo" />
            </div>
            <h2>Gear</h2>
          </div>
        </Link>
      </div>

      {/* Dropdown Start */}
      <div className="dropdown bg-indigo-50">
        <label tabIndex={0} className="btn btn-ghost xl:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 p-0"
            viewBox="0 0 50 50"
            stroke="currentColor"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content menu-sm z-[1] mt-3 w-40 bg-[#1d1f5b] p-2 text-white shadow outline outline-1"
        >
          {links}
        </ul>
      </div>
      {/* Dropdown end */}

      <div className="hidden items-center justify-center gap-3 xl:flex xl:flex-row">
        <div className="mt-9 text-center md:mt-0 lg:mt-0">
          <ul className="text-lg text-white md:flex lg:flex">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
