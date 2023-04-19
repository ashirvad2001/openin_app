import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Dashboard = () => {
  // ...google user data
  const { data: session, status } = useSession();

  // ...if user unauthenticated then send to homepage
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/");
  }
  return (
    <div>
      Dashboard
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Dashboard;
