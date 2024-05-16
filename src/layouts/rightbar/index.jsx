import Premium from "~/components/premium";
import Search from "./search";
import Topics from "~/components/topics";
import FollowTo from "./follow-to";
import Footer from "./footer";

export default function RightBar(){
          return(
                    <aside>
                              <Search/>
                              <Premium/>
                              <Topics/>
                              <FollowTo/>
                              <Footer/>
                    </aside>
          )
}