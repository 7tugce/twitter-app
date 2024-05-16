import store from "~/store";

const states = store.getState();

export const mainMenu = [
  {
    path: "/",
    title: "Anasayfa",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFD1E3"
          d="M20.25 10a1.25 1.25 0 1 0-2.5 0zm-14 0a1.25 1.25 0 1 0-2.5 0zm13.866 2.884a1.25 1.25 0 0 0 1.768-1.768zM12 3l.884-.884a1.25 1.25 0 0 0-1.768 0zm-9.884 8.116a1.25 1.25 0 0 0 1.768 1.768zM7 22.25h10v-2.5H7zM20.25 19v-9h-2.5v9zm-14 0v-9h-2.5v9zm15.634-7.884l-9-9l-1.768 1.768l9 9zm-10.768-9l-9 9l1.768 1.768l9-9zM17 22.25A3.25 3.25 0 0 0 20.25 19h-2.5a.75.75 0 0 1-.75.75zm-10-2.5a.75.75 0 0 1-.75-.75h-2.5A3.25 3.25 0 0 0 7 22.25z"
        />
      </svg>
    ),
  },
  {
    path: "/explore",
    title: "Keşfet",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFD1E3"
          d="M18.364 5.636A9 9 0 1 0 5.636 18.364A9 9 0 0 0 18.364 5.636M4.222 4.222c4.296-4.296 11.26-4.296 15.556 0c4.296 4.296 4.296 11.26 0 15.556c-4.296 4.296-11.26 4.296-15.556 0c-4.296-4.296-4.296-11.26 0-15.556m13.22 2.337l-4.965 12.91l-2.1-5.844l-5.845-2.1zm-7.174 4.902l1.672.6l.6 1.672l1.42-3.692z"
        />
      </svg>
    ),
  },
  {
    path: "/notifications",
    title: "Bildirimler",
    notifications: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFD1E3"
          d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6T9.175 7.175T8 10z"
        />
      </svg>
    ),
  },
  {
    path: "/messages",
    title: "Mesajlar",
    notifications: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFD1E3"
          d="M21 7h-3c0-1.65-1.35-3-3-3H3C1.35 4 0 5.35 0 7v7c0 1.65 1.35 3 3 3v3l3-3c0 1.65 1.35 3 3 3h8l3 3v-3h1c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3M3 15c-.542 0-1-.458-1-1V7c0-.542.458-1 1-1h12c.542 0 1 .458 1 1v1H9.5A2.502 2.502 0 0 0 7 10.5V15zm19 2c0 .542-.458 1-1 1H9c-.542 0-1-.458-1-1v-6.5C8 9.673 8.673 9 9.5 9H21c.542 0 1 .458 1 1z"
        />
      </svg>
    ),
  },
  {
    path: "/lists",
    title: "Listeler",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFD1E3"
          d="M10 20q-.825 0-1.412-.587T8 18t.588-1.412T10 16h10q.825 0 1.413.588T22 18t-.587 1.413T20 20zm0-6q-.825 0-1.412-.587T8 12t.588-1.412T10 10h10q.825 0 1.413.588T22 12t-.587 1.413T20 14zm0-6q-.825 0-1.412-.587T8 6t.588-1.412T10 4h10q.825 0 1.413.588T22 6t-.587 1.413T20 8zM4 8q-.825 0-1.412-.587T2 6t.588-1.412T4 4t1.413.588T6 6t-.587 1.413T4 8m0 6q-.825 0-1.412-.587T2 12t.588-1.412T4 10t1.413.588T6 12t-.587 1.413T4 14m0 6q-.825 0-1.412-.587T2 18t.588-1.412T4 16t1.413.588T6 18t-.587 1.413T4 20"
        />
      </svg>
    ),
  },
  {
    path: "/bookmarks",
    title: "Yer İşaretleri",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFD1E3"
          d="M3 23V7q0-.825.588-1.412T5 5h10q.825 0 1.413.588T17 7v16l-7-3zm16-3V3H6V1h13q.825 0 1.413.588T21 3v17z"
        />
      </svg>
    ),
  },
  {
    path: "/veryfied",
    title: "Onaylanmış",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFD1E3"
          d="m21.29 16.71l1.42-1.42l-3.21-3.18l-3-.85l1.91-.26l4.19-3.2l-1.2-1.6l-3.81 2.85l-2.68.45l3.2-3.19L17 1.76l-2 .48l.86 3.45l-1.1 1.14a3 3 0 0 0-5.52 0L8.11 5.69L9 2.24l-2-.48l-1.11 4.55l3.2 3.19l-2.69-.45L2.6 6.2L1.4 7.8L5.6 11l1.86.31l-3 .85l-3.17 3.13l1.42 1.42l2.79-2.82l2.37-.67L4 16.54V22h2v-4.54l1.56-1.34a4.5 4.5 0 0 0 8.88 0L18 17.46V22h2v-5.46l-3.87-3.32l2.37.67Z"
        />
      </svg>
    ),
  },
  {
    path: `/${states?.auth?.currentAccount.username}`,
    title: "Profil",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFD1E3"
          fill-rule="evenodd"
          d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
];

export const topics=[
  { 
    title:"Türkiye tarihinde gündemde",
    topic:{
      type:"tag",
      value:"örümcekadam"
    }
  }
  ,
  { 
    title:"Türkiye tarihinde gündemde",
    topic:{
      type:"query",
      value:"Starlink"
    },
    postCount:13634
  },  { 
    title:"Türkiye tarihinde gündemde",
    topic:{
      type:"tag",
      value:"örümcekadam"
    }
  }
  ,
  { 
    title:"Türkiye tarihinde gündemde",
    topic:{
      type:"query",
      value:"Starlink"
    },
    postCount:13634
  },  { 
    title:"Türkiye tarihinde gündemde",
    topic:{
      type:"tag",
      value:"örümcekadam"
    }
  }
  ,
  { 
    title:"Türkiye tarihinde gündemde",
    topic:{
      type:"query",
      value:"Starlink"
    },
    postCount:13634
  },  { 
    title:"Türkiye tarihinde gündemde",
    topic:{
      type:"tag",
      value:"örümcekadam"
    }
  }
  ,
  { 
    title:"Türkiye tarihinde gündemde",
    topic:{
      type:"query",
      value:"Starlink"
    },
    postCount:13634
  },  { 
    title:"Türkiye tarihinde gündemde",
    topic:{
      type:"tag",
      value:"örümcekadam"
    }
  }
  ,
  { 
    title:"Türkiye tarihinde gündemde",
    topic:{
      type:"query",
      value:"Starlink"
    },
    postCount:13634
  }
]