import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mb-4 w-[350px] px-4 flex flex-wrap gap-2">
      <Link to="/" className="text-[#FF70AB] leading-4 hover:underline">
        Hizmet Şartları
      </Link>
      <Link to="/" className="text-[#FF70AB] leading-4 hover:underline">
        Çerez Politikası
      </Link>
      <Link to="/" className="text-[#FF70AB] leading-4 hover:underline">
        Gizlilik Politikası
      </Link>
      <Link to="/" className="text-[#FF70AB] leading-4 hover:underline">
        Reklam Bilgisi
      </Link>
      <Link to="/" className="text-[#FF70AB] leading-4 hover:underline">
        Imprint
      </Link>
      <Link to="/" className="text-[#FF70AB] leading-4 hover:underline">
        Erişilebilirlik
      </Link>
      <div className="w-full">
        <Popover className="relative leading-4 inline-flex">
          <Popover.Button className="text-[#FF70AB] leading-4 outline-none hover:underline inline-flex items-center">
            Daha Fazlası
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="px-0.5"
              width="26"
              height="26"
              viewBox="0 0 24 24"
            >
              <path
                fill="#FF70AB"
                fill-rule="evenodd"
                d="M5 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m7 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m10-1a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                clip-rule="evenodd"
              />
            </svg>
          </Popover.Button>
          <Popover.Panel className="w-[150px] max-w-[384px] absolute bottom-0 right-0 bg-[#CAE6B2] shadow-box rounded-xl grid">
                    <Link className="py-3 px-4 text-[#F6F5F2] leading-5 font-bold hover:bg-[#FFF455] hover:text-[#D63484] rounded-xl transition-colors overflow-hidden" to="/">Hakkında</Link>
                    <Link className="py-3 px-4 text-[#F6F5F2] leading-5 font-bold hover:bg-[#FFF455] hover:text-[#D63484] rounded-xl transition-colors overflow-hidden" to="/">Durum </Link>
                    <Link className="py-3 px-4 text-[#F6F5F2] leading-5 font-bold hover:bg-[#FFF455] hover:text-[#D63484] rounded-xl transition-colors overflow-hidden" to="/">işletmeler için T</Link>
                    <Link className="py-3 px-4 text-[#F6F5F2] leading-5 font-bold hover:bg-[#FFF455] hover:text-[#D63484] rounded-xl transition-colors overflow-hidden" to="/">Geliştiriciler</Link>
          </Popover.Panel>
        </Popover>
        <p className="flex item-center"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256"><g fill="#86469C"><path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity="0.2"/><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-32-88a32 32 0 0 0 57.6 19.2a8 8 0 0 1 12.8 9.61a48 48 0 1 1 0-57.62a8 8 0 0 1-12.8 9.61A32 32 0 0 0 96 128"/></g></svg> 2024 T Corp.</p>
      </div>
    </footer>
  );
}
