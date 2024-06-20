import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  retrieveHelloWorldBean,
  retrivelambda,
} from "./Apicalls/Helloworldapi";

import { useState } from "react";
export default function WelcomeComponent() {
  const params = useParams();
  //use params is used to get path variable to that mapped to above route mentioned name
  // in order to get the params.variablename
  //param.username;
  //or mostly famous javascript used shortcut way that is bellow
  const { username } = useParams();
  // it will automatically mapped with relative names
  const [data, setdata] = useState("");
  const [dataPath, setdataPath] = useState("");
  // function funtionCall(e) {
  //   console.log("called");
  //   axios
  //     .get("http://localhost:8088/helloworldBean")
  //     .then((e) => setdata(e.data.message))
  //     .catch((e) => console.log(e))
  //     .finally("here");
  // }
  function funtionCall1(e) {
    console.log("called");
    retrivelambda()
      .then((e) => setdata(e.data))
      .catch((e) => console.log(e))
      .finally("here");
  }
  return (
    <div className="WelcomeComponent">
      <div>
        {" "}
        <h1>Welcome {username} </h1>
      </div>
      <div className="Link">
        {/* If i use <a href> tag enter page is refresh so lot of work so 
           we use the <link> tag that from react libray */}
        {/* Click here to go <a href="/listtodos"> todos</a> */}
        Click here to go <Link to="/listtodos"> todos</Link>
      </div>
      <div>
        <button
          className="btn btn-success m-5"
          onClick={(e) => funtionCall1(e)}
        >
          HelloApi x
        </button>
      </div>

      <div>{data}</div>
    </div>
  );
}
