import { NavLink } from "react-router-dom";

export default function SAAS() {
  const saasLinks = [
    { icon: "/github.png", label: "Sign in with Github", path: "/repositories" },
    { icon: "/bitbucket.png", label: "Sign in with Bitbucket", path: "/repositories" },
    { icon: "/azure.png", label: "Sign in with Azure DevOps", path: "/repositories" },
    { icon: "/gitlab.png", label: "Sign in with Gitlab", path: "/repositories" },
  ];

  return (
    <div className="flex flex-col items-center w-full gap-5 md:pl-4 md:pr-4 md:pb-4">
      {saasLinks.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          className="flex flex-row justify-center items-center font-semibold border-[1px] w-[20rem] md:w-[25rem] border-[#e5e4e4] gap-4 p-2 rounded-lg cursor-pointer"
        >
          <img src={link.icon} alt={link.label} />
          <p>{link.label}</p>
        </NavLink>
      ))}
    </div>
  );
}
