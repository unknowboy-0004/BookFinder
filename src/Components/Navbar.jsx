import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
        <ul>
          <li>
            <Link to={"/"} className="active">
              Book Finder
            </Link>
          </li>
        </ul>
        <ul className="flex gap-6">
          <li className="">
            <Link to={"/"} className="active">
              Home
            </Link>
          </li>

          <li className="">
            <Link to={"/favorites"} className="active">
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
