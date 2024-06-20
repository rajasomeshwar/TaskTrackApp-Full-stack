import { useContext, createContext, useState } from "react";
import { executeJwtBasicAutheinication } from "../Apicalls/BasicAuthenicationSerivce";
import { apiClient } from "../Apicalls/clientApi";
// creating authocontext
export const AuthoContxt = createContext();
export const useAutho = () => useContext(AuthoContxt);
//sharing the resource by passing the references to call
export default function AuthoProvider({ children }) {
  const [username, setusername] = useState();
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState();
  // function login(username, password) {
  //   if (username === "in28minutes" && password === "dummy") {
  //     setusername(username);
  //     setAuthenticated(true);

  //     return true;
  //   } else {
  //     setAuthenticated(false);
  //     return false;
  //   }
  // }

  // below funticon commented due implementing jwt token
  // async function login(username, password) {
  //   try {
  //     const token = "Basic " + window.btoa(username + ":" + password);

  //     console.log(token);
  //     const response = await executeBasicAutheinication(token);
  //     if (response.status == 200) {
  //       setusername(username);
  //       setAuthenticated(true);
  //       setToken(token);
  //       // below one used to intercepts when api calls
  //       apiClient.interceptors.request.use((config) => {
  //         config.headers.Authorization = token;
  //         return config;
  //       });
  //       return true;
  //     }
  //     logout();
  //     return false;
  //   } catch {
  //     logout();
  //     return false;
  //   }
  // }
  async function login(username, password) {
    try {
      const response = await executeJwtBasicAutheinication(username, password);
      if (response.status === 200) {
        setusername(username);
        setAuthenticated(true);
        console.log(response);
        const token = "Bearer " + response.data.token;
        setToken(token);
        // below one used to intercepts when api calls
        apiClient.interceptors.request.use((config) => {
          config.headers.Authorization = token;
          return config;
        });
        return true;
      }
      logout();
      return false;
    } catch {
      logout();
      return false;
    }
  }
  function logout() {
    setAuthenticated(false);
    setToken(null);
    setusername(null);
  }
  // This value can access by below
  // const v= useContext(AuthoContxt)
  // or const v=useAutho() by importing this file
  // v.isAuthenticated==> return value;
  return (
    <AuthoContxt.Provider
      value={{ isAuthenticated, login, logout, username, token }}
    >
      {children}
    </AuthoContxt.Provider>
  );
}
