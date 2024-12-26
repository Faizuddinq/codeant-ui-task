import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function Auth() {

  return (
    <div className="md:flex md:flex-row md:justify-center md:items-center h-[100vh] border-[1px] border-gray-300">
      <div className=" h-[100vh] md:flex flex-col items-center justify-center w-[50%] hidden">
        <div className="md:flex flex-col items-end relative">
          <div className="flex flex-col bg-white rounded-xl h-max shadow-xl pb-[1rem] border border-gray-300 ">
            <div className="p-4 font-semibold text-lg pr-[5rem] flex flex-row items-center justify-center  gap-2">
              <img src="/codeAntLogo.png" alt="" className=" w-8 h-8" />
              <p>AI for Detecting & Fixing Bad Code</p>
            </div>
            <hr className="h-[1px] w-full bg-[#f3f2f2]" />
            <div className="flex flex-row gap-6 p-4 items-center">
              <div className="flex flex-col gap-1 items-center">
                <p className="font-semibold">30+</p>
                <p className="text-gray-600">Languages Supported</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">10K+</p>
                <p className="text-gray-600">Developers Joined</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <p className="font-semibold">100K+</p>
                <p className="text-gray-600">Hours Saved</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-[15rem] relative top-[-3rem] left-[5rem] shadow-xl p-5 rounded-2xl flex flex-col gap-2 mt-4 border-[1px] border-gray-300">
          <div className="flex flex-row items-center justify-between">
            <img src="/signin.png" alt="" />
            <div className="flex flex-col items-start justify-center">
              <div className="flex flex-row items-center text-[#0049c6] justify-center">
                <img src="./arrow.png" alt="" />
                <p>14%</p>
              </div>
              <p className="text-gray-600 text-sm pl-2">This Week</p>
            </div>
          </div>
          <p>Issues Fixed</p>
          <p className="text-3xl font-semibold">500K+</p>
        </div>
        <img src="/Subtract.png" alt="" className="hidden md:block absolute bottom-0 left-0" />
      </div>

      <div className="flex flex-col items-center justify-center h-[100vh] gap-2 md:w-[50%] w-full">
        <div className="bg-white h-[32rem] md:h-[35rem] rounded-md flex flex-col items-center w-[22rem] md:w-max pt-4 gap-5 border-[1px] border-gray-200">
          <div className="flex flex-row items-center justify-center font-[inter] text-3xl font-light gap-2">
            <img src="/codeAntLogo.png" alt="" />
            <p>CodeAnt AI</p>
          </div>
          <h1 className="font-semibold text-3xl">Welcome to CodeAnt AI</h1>
          <div className="flex flex-row gap-2 items-center md:p-4">
            <NavLink
              to="/auth/saas"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#1470ef] text-white text-center text-2xl p-2 w-[10rem] md:w-[15rem] rounded-md"
                  : "bg-[#fafafa] text-black text-center text-2xl p-2 w-[10rem] md:w-[15rem] rounded-md border border-gray-200"
              }
            >
              SAAS
            </NavLink>
            <NavLink
              to="self-hosted"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#1470ef] text-white text-center text-2xl p-2 w-[10rem] md:w-[15rem] rounded-md"
                  : "bg-[#fafafa] text-black text-center text-2xl p-2 w-[10rem] md:w-[15rem] rounded-md border border-gray-200"
              }
            >
              Self Hosted
            </NavLink>
          </div>
          <hr className="h-[1px] w-full bg-gray-300" />
          <Outlet />
        </div>
        <p>
          By signing up, you agree to the{" "}
          <span className="font-semibold">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
}
