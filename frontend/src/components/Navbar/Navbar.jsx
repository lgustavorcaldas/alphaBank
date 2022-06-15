import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";

import { useState } from "react";
import { NavbarStyled }  from "./styled.js"

const Navbar = () => {
  const [query, setQuery] = useState("");

  const handleLogout = () => {
    localStorage.clear();

  };

  return (
    <NavbarStyled>
      <nav id="nav">
        <Link to="/">
          <h2>Alpha Bank</h2>
        </Link>
        <ul id="nav-links">
            <>
              <li>
                <NavLink to="/">
                  <BsHouseDoorFill />
                </NavLink>
              </li>
              <li>
                <Link to="/login">
                  <span onClick={handleLogout}>Sair</span>
                </Link>
              </li>
            </>
        </ul>
      </nav>
    </NavbarStyled>
  );
};

export default Navbar;
