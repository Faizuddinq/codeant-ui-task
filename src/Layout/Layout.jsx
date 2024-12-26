
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useMenu } from "../context/MenuContext";

function Layout() {
    const {isMenuVisible} = useMenu();
  return (
    <div className="flex flex-col md:flex-row md:overflow-auto">
        <Sidebar />
        <div className={`absolute w-full md:relative md:w-[85%] md:top-0 top-[4.5rem] ${isMenuVisible && 'md:opacity-100  opacity-45'}`}>
          <Outlet />
          </div>
    </div>
  );
}

export default Layout;
