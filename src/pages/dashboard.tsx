import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Asidebar from "../components/Asidebar";

const Dashboard = () => {
  // ...google user data
  const { status } = useSession();

  // ...if user unauthenticated then send to homepage
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/");
  }
  return (
    <div>
      <Asidebar />
    </div>
  );
};

export default Dashboard;
