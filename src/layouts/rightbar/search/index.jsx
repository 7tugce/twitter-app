import { useRef, useState } from "react";
import { useClickAway } from "react-use";

export default function Search() {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);
  const ref = useRef();
  useClickAway(ref, () => {
    setFocus(false);
  });
  return (
    <div
      ref={ref}
      className="min-h-[32px] h-[53px] mb-3 flex items-center sticky top-0 bg-inherit z-[10]"
    >
      <label className="h-[43px] rounded-full bg-[#EED3D9] block w-full group focus-within:bg-[#DBC4F0] relative">
        <div className="w-[56px] h-full flex items-center justify-center absolute top-0 left-0 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            className="min-w-[32px] absolute"
          >
            <path
              fill="#76885B"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
            />
          </svg>
        </div>

        <input
          type="text"
          placeholder="Ara"
          value={query}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-full bg-transparent placeholder-[#374259] rounded-full outline-none pl-[40px] text-[15px]"
        />

        {query && focus && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
            }} // burda eğer fonksiyon şeklinde vermezsen inputun içine yazı yazılmıyor
            className="w-[22px] h-[22px] rounded-full flex items-center justify-center right-3 absolute top-1/2 -translate-y-1/2 invisible group-focus-within:visible"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 32 32"
            >
              <path
                fill="#76885B"
                d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
              />
            </svg>
          </button>
        )}
      </label>{" "}
      {focus && (
        <div className="absolute w-[350px] -left-px -translate-y-1 top-full shadow-box max-h-[calc(80vh-53px)] rounded-lg bg-[#B5C0D0] text-[#627254] text-center min-h-[100px]">
          <p className="p-3 pt-5 leading-5">
            Kişileri, listeleri veya anahtar kelimeleri aramayı dene.
          </p>
        </div>
      )}
    </div>
  );
}
