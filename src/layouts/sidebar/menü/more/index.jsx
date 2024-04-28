import { Disclosure, Popover } from "@headlessui/react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function More() {
  return (
    <Popover className="relative">
      <Popover.Button className="py-1 block group outline-none">
        <button>
          <div className="p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-purple-100">
            <div className="w-[26px] h-[26px] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFD1E3"
                  d="M7.06 5L2.4 12l4.67 7H22V5zc.01 0 .01 0 0 0M19 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m-5 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m-5 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"
                  opacity="0.3"
                />
                <path
                  fill="#FFD1E3"
                  d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H7.07L2.4 12l4.66-7H22z"
                />
                <circle cx="9" cy="12" r="1.5" fill="#FFD1E3" />
                <circle cx="14" cy="12" r="1.5" fill="#FFD1E3" />
                <circle cx="19" cy="12" r="1.5" fill="#FFD1E3" />
              </svg>
            </div>
            <div className="pr-4 text-xl ">Daha Fazla</div>
          </div>
        </button>
      </Popover.Button>
      <Popover.Panel className="w-[318px] absolute group-hover:bg-purple-100 bottom-0 left-0 bg-[#D4E2D4] shadow-lg shadow-[#AFD198] rounded-xl overflow-hidden outline-none">
        <button className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5  hover:bg-purple-100">
          <div className="w-[26px] h-[26px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 32 32"
            >
              <path
                fill="#76885B"
                d="M23 16.01a7 7 0 0 0-4.18 1.39l-4.22-4.22A6.86 6.86 0 0 0 16 9.01a7 7 0 1 0-2.81 5.59l4.21 4.22a7 7 0 1 0 5.6-2.81m-19-7a5 5 0 1 1 5 5a5 5 0 0 1-5-5"
              />
            </svg>
          </div>
          <div className="pr-4 text-xl text-[#76885B] ">Bağlan</div>
        </button>

        <button className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5  hover:bg-purple-100">
          <div className="w-[26px] h-[26px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 48 48"
            >
              <g fill="#76885B" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M28.772 24.667A4.001 4.001 0 0 0 25 22v-1h-2v1a4 4 0 1 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4.001 4.001 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4a2 2 0 0 1 1.886 1.333a1 1 0 1 0 1.886-.666M23 24a2 2 0 1 0 0 4zm2 10a2 2 0 1 0 0-4z" />
                <path d="M13.153 8.621C15.607 7.42 19.633 6 24.039 6c4.314 0 8.234 1.361 10.675 2.546l.138.067c.736.364 1.33.708 1.748.987L32.906 15C41.422 23.706 48 41.997 24.039 41.997S6.479 24.038 15.069 15l-3.67-5.4c.283-.185.642-.4 1.07-.628c.212-.114.44-.231.684-.35m17.379 6.307l2.957-4.323c-2.75.198-6.022.844-9.172 1.756c-2.25.65-4.75.551-7.065.124a25.167 25.167 0 0 1-1.737-.386l1.92 2.827c4.115 1.465 8.981 1.465 13.097.002M16.28 16.63c4.815 1.86 10.602 1.86 15.417-.002a29.255 29.255 0 0 1 4.988 7.143c1.352 2.758 2.088 5.515 1.968 7.891c-.116 2.293-1.018 4.252-3.078 5.708c-2.147 1.517-5.758 2.627-11.537 2.627c-5.785 0-9.413-1.091-11.58-2.591c-2.075-1.437-2.986-3.37-3.115-5.632c-.135-2.35.585-5.093 1.932-7.87c1.285-2.648 3.078-5.197 5.005-7.274m-1.15-6.714c.8.238 1.636.445 2.484.602c2.15.396 4.306.454 6.146-.079a54.097 54.097 0 0 1 6.53-1.471C28.45 8.414 26.298 8 24.038 8c-3.445 0-6.658.961-8.908 1.916" />
              </g>
            </svg>{" "}
          </div>
          <div className="pr-4 text-xl text-[#76885B] ">Para Kazan</div>
        </button>


        <div className="h-px bg-[#627254] my-0.5 w-[89%] mx-auto"/>
        <Disclosure>
        {({open}) => (
						<>
              {" "}
              <Disclosure.Button className="py-2 h-[52px] w-full flex items-center px-4 hover:bg-purple-100 transition-colors">
                İçerik Üreticisi Stüdyosu
                <svg
                  className={classNames({
                    "rotate-180": open,
                  })}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.75"
                  height="18.75"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#76885B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m7 10l5 5m0 0l5-5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                <Link to="/" className="flex items-center px-3 h-11 gap-3">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                  >
                    <path
                      fill="#76885B"
                      d="M12.906-.031a1 1 0 0 0-.125.031A1 1 0 0 0 12 1v1H3a3 3 0 0 0-3 3v13c0 1.656 1.344 3 3 3h9v.375l-5.438 2.719a1.006 1.006 0 0 0 .875 1.812L12 23.625V24a1 1 0 1 0 2 0v-.375l4.563 2.281a1.006 1.006 0 0 0 .875-1.812L14 21.375V21h9c1.656 0 3-1.344 3-3V5a3 3 0 0 0-3-3h-9V1a1 1 0 0 0-1.094-1.031M2 5h22v13H2zm18.875 1a1 1 0 0 0-.594.281L17 9.563L14.719 7.28a1 1 0 0 0-1.594.219l-2.969 5.188l-1.219-3.063a1 1 0 0 0-1.656-.344l-3 3a1.016 1.016 0 1 0 1.439 1.44l1.906-1.906l1.438 3.562a1 1 0 0 0 1.812.125l3.344-5.844l2.062 2.063a1 1 0 0 0 1.438 0l4-4A1 1 0 0 0 20.875 6"
                    />
                  </svg>
                  İstatistikler{" "}
                </Link>{" "}
              </Disclosure.Panel> </>
            )}
        </Disclosure>

        <Disclosure>
        {({open}) => (
						<>
              <Disclosure.Button className="py-2 h-[52px] w-full flex items-center px-4 hover:bg-purple-100 transition-colors">
                Profosyonel Araçlar
                <svg
                  className={classNames({
                    "rotate-180": open,
                  })}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.75"
                  height="18.75"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#76885B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m7 10l5 5m0 0l5-5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                <Link to="/" className="flex items-center px-3 h-11 gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#76885B"
                      d="m12.598 16l-3.2-8h-2l-2 5v.002L4.199 16h2.154l.4-1h3.29l.4 1zm-5.046-3l.847-2.115L9.244 13zM17 8h2v8h-3a3 3 0 1 1 0-6h1zm-1 4a1 1 0 0 0 0 2h1v-2zm5-9H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M4 19V5h16v14z"
                    />
                  </svg>
                  Reklamlar{" "}
                </Link>
              </Disclosure.Panel>
              </>
            )}
        </Disclosure>

        <Disclosure>
        {({open}) => (
						<>
              <Disclosure.Button className="py-2 h-[52px] w-full flex items-center px-4 hover:bg-purple-100 transition-colors">
                Ayarlar ve Destek
                <svg
                  className={classNames({
                    "rotate-180": open,
                  })}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.75"
                  height="18.75"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#76885B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m7 10l5 5m0 0l5-5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                <Link to="/" className="flex items-center px-3 h-11 gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#76885B"
                      d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.425-.75 4.05-2.963T17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12z"
                    />
                  </svg>
                  Ayarlar ve Gizlilik{" "}
                </Link>

                <Link to="/" className="flex items-center px-3 h-11 gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#76885B"
                      d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                    />
                  </svg>
                  Yardım Merkezi{" "}
                </Link>

                <Link to="/" className="flex items-center px-3 h-11 gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#76885B"
                      fill-rule="evenodd"
                      d="m14.489 8.388l-.001.006a.1.1 0 0 1-.027.028a.43.43 0 0 1-.264.082h-3.186c-3.118 0-4.68 3.77-2.476 5.974a6.5 6.5 0 1 1 5.953-6.09Zm-.292 1.616c.913 0 1.736-.618 1.79-1.529a8 8 0 1 0-7.032 7.468c1.243-.147 1.527-1.639.641-2.525c-1.26-1.26-.367-3.414 1.415-3.414zM10 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Görünüm{" "}
                </Link>

                <Link to="/" className="flex items-center px-3 h-11 gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        fill="#76885B"
                        d="M7 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                      />
                      <path
                        stroke="#76885B"
                        stroke-width="1.5"
                        d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13z"
                      />
                      <path
                        stroke="#76885B"
                        stroke-linecap="round"
                        stroke-width="1.5"
                        d="M7 16h10"
                      />
                    </g>
                  </svg>
                  Klavye Kısayolları{" "}
                </Link>
              </Disclosure.Panel>
              </>
            )}
        </Disclosure>
      </Popover.Panel>
    </Popover>
  );
}
