import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import { numberFormat } from "~/utils/formats";

export default function Topic({ item }) {
  return (
    <Link
      to={"/"}
      className="py-3 px-4 transition-colors hover:bg-[#D2E9E9] relative"
    >
      <div className="text-[#D895DA] leading-4">{item.title}</div>
      <div className="font-bold leading-6 mt-0.5">
        {item.topic.type === "tag" && "#"} {item.topic.value}
      </div>
      {item?.postCount && (
        <div className="leading-4 mt-1 text-[#D895DA]">
          {numberFormat(item.postCount)} posts
        </div>
      )}
      <Popover className="relat">
        <Popover.Button
          type="button"
          className="w-[35px] h-[35px] rounded-full outline-none absolute top-2 right-3 flex items-center justify-center hover:bg-[#E1AFD1] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#76885B"
              d="M176 416a112 112 0 1 0 0 224a112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96a48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224a112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96a48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224a112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96a48 48 0 0 0 0-96"
            />
          </svg>
        </Popover.Button>
        <Popover.Panel className="w-[384px] absolute grid top-2 right-0 bg-[#F6FAB9] shadow-box rounded-xl z-[1] overflow-hidden">
          <button type="button" className="hover:bg-[#CAE6B2] transition-colors py-3 px-4 text-[#FF5F00] flex items-center gap-3 leading-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#FF5F00" d="M20 12a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8m2 0a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-6.5-4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5M10 9.5c0 .8-.7 1.5-1.5 1.5S7 10.3 7 9.5S7.7 8 8.5 8s1.5.7 1.5 1.5m2 4.5c1.75 0 3.29.72 4.19 1.81l-1.42 1.42C14.32 16.5 13.25 16 12 16s-2.32.5-2.77 1.23l-1.42-1.42C8.71 14.72 10.25 14 12 14"/></svg>
        İlgimi çekmiyor
          </button>

          <button type="button" className="hover:bg-[#CAE6B2] transition-colors py-3 px-4 text-[#FF5F00] flex items-center gap-3 leading-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#FF5F00" d="M20 12a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8m2 0a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-6.5-4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5M10 9.5c0 .8-.7 1.5-1.5 1.5S7 10.3 7 9.5S7.7 8 8.5 8s1.5.7 1.5 1.5m2 4.5c1.75 0 3.29.72 4.19 1.81l-1.42 1.42C14.32 16.5 13.25 16 12 16s-2.32.5-2.77 1.23l-1.42-1.42C8.71 14.72 10.25 14 12 14"/></svg>
        Bu gündem başlığı zararlı veya spam içeriyor
          </button>
        </Popover.Panel>
      </Popover>
    </Link>
  );
}
