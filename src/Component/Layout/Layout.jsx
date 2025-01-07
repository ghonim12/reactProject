import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Layout() {
  return <>
      <Navbar />
      <div className="vh-100">
        <Outlet/>
      </div>

      <Footer />
    </>

}
