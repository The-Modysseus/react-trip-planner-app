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
      <NavLink to="/edittemplate" >
        Rediger skabelon
      </NavLink>
    </nav>
  );
}