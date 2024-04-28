import Logo from "./logo";
import Menu from "./menü";

export default function Sidebar(){
return(
<aside className="w-[275px] min-h-screen max-h-screen px-2 flex flex-col overflow-auto">
          <Logo/>
          <Menu/>
          <div className="mt-auto">
          <div className="my-3">   test</div>
        </div>
</aside>
)
}