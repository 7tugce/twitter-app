import Premium from "~/components/premium";
import Search from "./search";
import Topics from "~/components/topics";

export default function RightBar(){
          return(
                    <aside>
                              <Search/>
                              <Premium/>
                              <Topics/>
                    </aside>
          )
}