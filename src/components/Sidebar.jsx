import { useMenu } from '../context/MenuContext'; 
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { CiCloudOn } from "react-icons/ci";
import { LuBookText, LuPhone } from "react-icons/lu";
import { BsGear } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";

const navItems = [
  { icon: <AiOutlineHome />, label: "Repositories", path: "/repositories" },
  { icon: <FaCode />, label: "AI Code Review", path: "/code-review" },
  { icon: <CiCloudOn />, label: "Cloud Security", path: "/cloud-security" },
  { icon: <LuBookText />, label: "How to Use", path: "/how-to-use" },
  { icon: <BsGear />, label: "Settings", path: "/settings" },
];

function Sidebar() {
  const { isMenuVisible, toggleMenu } = useMenu(); 

  return (
    <div
      className={`pl-2 bg-white pt-6 z-[888]  flex flex-col border fixed md:relative
       border-gray-300 md:items-start md:justify-between overflow-hidden transition-all ease-linear duration-300 ${
        isMenuVisible ? "h-[34rem]" : "h-[5.5rem]"
      } md:h-[100vh] w-full md:w-[16%]`}
    >
      {/* Mobile View */}
      <div className="flex flex-col items-center gap-5 md:gap-8 mr-6 w-full md:hidden">
        <div className="flex justify-between w-full">
          <div className="flex items-center text-3xl font-semibold gap-3">
            <img src="/codeAntLogo.png" alt="CodeAnt AI Logo" />
            <p>CodeAnt AI</p>
          </div>
          <button onClick={toggleMenu} className="w-10 h-10">
            <img src={isMenuVisible ? "/close.png" : "/bars.png"} alt="Toggle Menu" />
          </button>
        </div>
        <select className="w-[90%] mt-2 md:w-[12rem] text-xl border-2 border-gray-300 rounded-lg p-4">
          <option value="UtkarshDhairy">UtkarshDhairy</option>
          <option value="Chandler">Chandler</option>
          <option value="Joey">Joey</option>
        </select>
        <div className="flex flex-col w-full md:w-max gap-2 px-4 mt-8">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              onClick={toggleMenu}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-start pl-5 pr-8 bg-[#1470ef] text-white gap-4 p-2 rounded-lg"
                  : "flex items-center justify-start pl-5 pr-8 bg-white text-black gap-4 p-2 rounded-lg"
              }
            >
              <div className="text-xl">{item.icon}</div>
              <p>{item.label}</p>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col gap-8 justify-start mr-4">
        <div className="flex items-center text-3xl font-semibold gap-2">
          <img src="/codeAntLogo.png" alt="CodeAnt AI Logo" />
          <p>CodeAnt AI</p>
        </div>
        <select className="w-[12rem] text-xl border border-gray-300 rounded-lg p-2">
          <option value="UtkarshDhairy">UtkarshDhairy</option>
          <option value="Chandler">Chandler</option>
          <option value="Joey">Joey</option>
        </select>
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-start pl-5 pr-8 bg-[#1470ef] text-white gap-4 p-2 rounded-lg"
                  : "flex items-center justify-start pl-5 pr-8 bg-white text-black gap-4 p-2 rounded-lg"
              }
            >
              <div className="text-xl">{item.icon}</div>
              <p>{item.label}</p>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Shared Section for Both Views */}
      <div className="flex flex-col gap-2 md:gap-4 mt-2 px-4 w-4/5 md:mt-8">
        <NavLink
          onClick={toggleMenu}
          to="/report"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-start pl-5 pr-8 bg-[#1470ef] text-white gap-4 p-2 rounded-lg"
              : "flex items-center justify-start pl-5 pr-8 bg-white text-black gap-4 p-2 rounded-lg"
          }
        >
          <div className="text-xl">
            <LuPhone />
          </div>
          <p>Report</p>
        </NavLink>
        <NavLink
          onClick={toggleMenu}
          to="/auth/saas"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-start pl-5 pr-8 bg-[#1470ef] text-white gap-4 p-2 rounded-lg"
              : "flex items-center justify-start pl-5 pr-8 bg-white text-black gap-4 p-2 rounded-lg"
          }
        >
          <div className="text-xl">
            <MdOutlineLogout />
          </div>
          <p>Logout</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
