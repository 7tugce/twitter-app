import { Popover, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { useAccount } from "~/store/auth/hooks";
import More from "./more";

export default function Account() {
  const account = useSelector((state) => state.auth.currentAccount); // State içinden currentAccount'i al

  return (
    <div className="mt-auto">
    
      <Popover className="relative">
        <Popover.Button className="my-3 px-3 rounded-full hover:bg-purple-100 w-full flex text-left items-center outline-none transition-colors">
          <img
            className="w-10 h-10 rounded-full"
            src={account.avatar}
            alt="Avatar"
          ></img>
          <div className="mx-3 font-bold leading-[20px]">
            {account.fullname}{" "}
            <div className="mx-3 text-[#E1ACAC]">@{account.username}</div>
          </div>
          <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024"><path fill="#76885B" d="M176 416a112 112 0 1 1 0 224a112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224a112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224a112 112 0 0 1 0-224"/></svg>

        </Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >   <Popover.Panel className="absolute bottom-full w-[275px] left-1/2 -translate-x-1/2 bg-[#B5C0D0] rounded-2xl py-3">
       {({close})=>(
          <More close={close}/>
       )}   
        </Popover.Panel></Transition>
      </Popover>
    </div>
  );
}
