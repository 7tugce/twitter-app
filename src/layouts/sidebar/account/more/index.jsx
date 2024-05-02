import classNames from "classnames";
import { useSelector } from "react-redux";

export default function More({close}) {
          const currentAccount = useSelector((state) => state.auth.currentAccount); // State içinden currentAccount'i al

  const accounts = useSelector((state) => state.auth.accounts);
  return (
    <div>
      {accounts.map((account) => (
        <button disabled={currentAccount.id=== account.id} type="button" onClick={()=>{currentAccount(account)  }} key={account.id} className={classNames("py-3 px-4 flex text-left w-full transition-colors items-center overflow-hidden",{"hover:bg-[#DDDDDD]":currentAccount.id!==account.id})}>
          <img
            className="w-10 h-10 rounded-full"
            src={account.avatar}
            alt="Avatar"
          ></img>
          <div className="mx-3 font-bold leading-[20px] flex-1">
           <div className="text-[#627254]"> {account.fullname}{" "}</div>
            <div className="mx-3 text-[#FF9800]">@{account.username}</div>
          </div>
          {currentAccount.id=== account.id && (<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#76885B" fill-rule="evenodd" d="M15.418 5.643a1.25 1.25 0 0 0-1.34-.555l-1.798.413a1.25 1.25 0 0 1-.56 0l-1.798-.413a1.25 1.25 0 0 0-1.34.555l-.98 1.564c-.1.16-.235.295-.395.396l-1.564.98a1.25 1.25 0 0 0-.555 1.338l.413 1.8a1.25 1.25 0 0 1 0 .559l-.413 1.799a1.25 1.25 0 0 0 .555 1.339l1.564.98c.16.1.295.235.396.395l.98 1.564c.282.451.82.674 1.339.555l1.798-.413a1.25 1.25 0 0 1 .56 0l1.799.413a1.25 1.25 0 0 0 1.339-.555l.98-1.564c.1-.16.235-.295.395-.395l1.565-.98a1.25 1.25 0 0 0 .554-1.34L18.5 12.28a1.25 1.25 0 0 1 0-.56l.413-1.799a1.25 1.25 0 0 0-.554-1.339l-1.565-.98a1.25 1.25 0 0 1-.395-.395zm-.503 4.127a.5.5 0 0 0-.86-.509l-2.615 4.426l-1.579-1.512a.5.5 0 1 0-.691.722l2.034 1.949a.5.5 0 0 0 .776-.107z" clip-rule="evenodd"/></svg>)}
        </button>
      ))}
      <div className="h-px bg-[#627254] my-0.5 w-[89%] mx-auto"/>
      <button className="py-3 px-4 text-left transition-colors hover:bg-[#DDDDDD] w-full text-[#FF9800] leading-[20px]">
Var olan bir hesap ekle
      </button>

      <button className="py-3 px-4 text-left transition-colors hover:bg-[#DDDDDD] w-full text-[#FF9800] leading-[20px]">
Hesapları Yönet
      </button>

      <button className="py-3 px-4 text-left transition-colors hover:bg-[#DDDDDD] w-full text-[#FF9800] leading-[20px]">
      {currentAccount.fullname} hesabından çıkış yap
      </button>
    </div>
  );
}
