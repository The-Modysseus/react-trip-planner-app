import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <NavLink to="/createtemplate" >
        Tilføj skabelon
      </NavLink>
      <NavLink to="/listtemplates" >
        Se skabeloner
      </NavLink>
    </nav>
  );
}