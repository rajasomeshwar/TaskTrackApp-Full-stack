import { useAutho } from "./security/AunthContext";

export default function LogoutComponent() {
  const auth = useAutho();
  auth.logout();
  return (
    <div className="LogoutComponent">
      <div>
        <h1>Your Logout !</h1>
        Thanks for using app.
      </div>
    </div>
  );
}
