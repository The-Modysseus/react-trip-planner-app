import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <NavLink to="/createtemplate" >
        Tilføj skabelon
      </NavLink>
    </nav>
  );
}