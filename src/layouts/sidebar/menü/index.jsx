import { NavLink } from "react-router-dom";
import Button from "~/components/button";
import { mainMenu } from "~/utils/consts";
import More from "./more";
import NewTweet from "./new";


export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menu, index) => {
        return (
          <NavLink
            to={menu.path}
            key={index}
            className="text-[#FFD1E3] py-1 block group"
          >
            <div className="group p-3 pr-4 rounded-full inline-flex items-center gap-5 hover:bg-purple-100 transition-colors">
              <div className="relative">
                {menu.notifications && (
                  <span className="w-[18px] h-[18px] rounded-full bg-[#E59BE9] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                    {menu.notifications}
                  </span>
                )}
                {menu.icon}
              </div>

              <div className="pr-4 text-xl">{menu.title}</div>
            </div>{" "}
          </NavLink>
        );
      })}
      <More></More>
<NewTweet/>
    </nav>
  );
}
