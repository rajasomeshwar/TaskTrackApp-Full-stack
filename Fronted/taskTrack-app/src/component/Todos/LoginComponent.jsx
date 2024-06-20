import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAutho } from "./security/AunthContext";
export function LoginComponent() {
  const [username, setusername] = useState("in28minutes");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  //  const [successmessage, handlesuccess] = useState(false);
  const [failedmessage, handlefailed] = useState(false);
  const auth = useAutho();
  async function handlesubmit() {
    if (await auth.login(username, password)) {
      //every thing commented bez by going we
      // handlesuccess(true);
      // handlefailed(false);

      //     console.log("success");
      // below is navigates to welcome with username we use ${username}
      //  Navigate(`/welcome/${username}`);
      // <Navigate to={`/welcome/${username}`} />;

      navigate(`/welcome/${username}`);
    } else {
      //   console.log("failed");

      handlefailed(true);
      //  handlesuccess(false);
    }
  }
  return (
    <div className="LoginPage">
      <h2>Time to Login</h2>
      {/* <div>{successmessage && <div>Authenticated successfuly</div>}</div>
      <div> */}
      <div>
        {failedmessage && <div>Authenticated Faild pls Try again</div>}{" "}
      </div>
      <div className="Loginform">
        <div>
          <label>Username :</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Password :</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="button" onClick={handlesubmit} name="login">
            Login
          </button>
        </div>
      </div>
    </div>
  );
  // function AuthenticatedSuccess() {
  //   return <div>Authenticated successfuly</div>;
  // }
  // function AuthenticatedFalid() {
  //   return <div>Authenticated Faild pls Try again</div>;
  // }
}
