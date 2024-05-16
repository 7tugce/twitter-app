import Button from "~/components/button";
import SidebarSection from "~/components/sidebar-section";
import UserCard from "~/components/user-card";
import { followToUsers } from "~/mock-data";
import { useAccount } from "~/store/auth/hooks";

export default function FollowTo() {
  const account = useAccount();
  return (
    <SidebarSection
      title="Kimi takip etmeli"
      more={`/connect-people?user-id=${account.id}`}
    >
      {followToUsers.map((user) => (
        <UserCard user={user} key={user.id}/>
      ))}
    </SidebarSection>
  );
}
