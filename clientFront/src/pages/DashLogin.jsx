import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function DashLogin() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>DashLogin</h1>
      {!!user && <h2>Hi {user.name} !</h2>}
    </div>
  );
}
