import { useState } from "react";
// import { FooterComponent } from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import LogoutComponent from "./LogoutComponent";
import ErrorComponent from "./ErrorComponent";
import TodoComponent from "./TodoComponent";
import "./todos.css";
import ListTodoComponent from "./ListTodoComponent";
import WelcomeComponent from "./WelcomeComponent";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginComponent } from "./LoginComponent";
import AuthoProvider, { useAutho } from "./security/AunthContext";
function AuthenticatedRoute({ children }) {
  const auth = useAutho();

  if (auth.isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
}
export default function TodoApp() {
  return (
    <>
      {/* Todo-Applications */}

      {/* <LoginComponent></LoginComponent> */}
      {/* <WelcomeComponent></WelcomeComponent> */}
      <AuthoProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route
              path="/logout"
              element={
                // it is used to allow when logined we called funtion then it will returns child
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            ></Route>
            {/* below one used for requset param similar to pathvariable */}
            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            ></Route>
            {/* Below one is similar */}
            <Route
              path="/listtodos"
              element={
                <AuthenticatedRoute>
                  <ListTodoComponent />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todo/:id"
              element={
                <AuthenticatedRoute>
                  <TodoComponent />
                </AuthenticatedRoute>
              }
            ></Route>
            <Route path="/*" element={<ErrorComponent />}></Route>
          </Routes>
          {/* <FooterComponent /> */}
        </BrowserRouter>
      </AuthoProvider>
    </>
  );
}
