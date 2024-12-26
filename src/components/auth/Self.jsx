import { NavLink } from "react-router-dom";

export default function Self() {
  const hostedData = [
    { icon: "/gitlab.png", description: "Self Hosted Gitlab", path: "/repositories" },
    { icon: "/key.png", description: "Sign in with SSO", path: "/repositories" },
  ];

  return (
    <div className="flex flex-col items-center w-full gap-5 md:pl-4 md:pr-4 md:pb-4">
      {hostedData.map((entry, idx) => (
        <NavLink
          key={idx}
          to={entry.path}
          className="flex flex-row justify-center items-center font-semibold border-[1px] w-[20rem] md:w-[25rem] border-[#e5e4e4] gap-4 p-2 rounded-lg cursor-pointer"
        >
          <img src={entry.icon} alt={entry.description} />
          <p>{entry.description}</p>
        </NavLink>
      ))}
    </div>
  );
}
