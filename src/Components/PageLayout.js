import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function PageLayout() {
    return (
      <>
        <h1>Huskeliste til rejse</h1>
        <Navbar />
        <Outlet />
      </>
    )
  }