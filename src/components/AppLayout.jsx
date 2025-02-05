import { Outlet } from "react-router";
import Navbar from "../components/app-header/Navbar";
import Footer from "../components/footer/Footer";

function AppLayout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
