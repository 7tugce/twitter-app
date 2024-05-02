import Account from "./account";
import Logo from "./logo";
import Menu from "./menü";

export default function Sidebar(){
return(
<aside className="w-[275px] min-h-screen max-h-screen px-2 flex flex-col ">
          <Logo/>
          <Menu/>
     <Account/>
        
</aside>
)
}