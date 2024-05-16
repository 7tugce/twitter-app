import { useState } from "react";
import Button from "../button";

export default function UserCard({ user }) {
  const [following, setFollowing] = useState(false);
  return (
    <button className="py-3 px-4 flex gap-3 transition-colors hover:bg-[#D2E9E9]">
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={user.avatar}
      ></img>
      <div className="flex-1 flex flex-col text-left">
        <div className="font-bold leading-5 inline-flex items-center overflow-hidden whitespace-nowrap">
          {user.fullname}
          {user?.verified && (
            <>
              <svg
                className=" ml-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#86469C"
                  d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm.85-2.55l2.55-1.1l2.6 1.1l1.4-2.4l2.75-.65l-.25-2.8l1.85-2.1l-1.85-2.15l.25-2.8l-2.75-.6l-1.45-2.4L12 5.15l-2.6-1.1L8 6.45l-2.75.6l.25 2.8L3.65 12l1.85 2.1l-.25 2.85l2.75.6zm1.5-4.4L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z"
                />
              </svg>
            </>
          )}
        </div>
        <div className="text-[#E59BE9]">@{user.username}</div>
      </div>
      <div>
        {following ? (
          <Button 
          className="group"
          onClick={()=>setFollowing(false)}
          >
          <div className="flex group-hover:hidden">Takip ediliyor</div>
          <div className="hidden group-hover:flex">Takibi bırak</div>
          </Button>
        ) : (
          <Button onClick={() => setFollowing(true)}>Takip et</Button>
        )}
      </div>
    </button>
  );
}
