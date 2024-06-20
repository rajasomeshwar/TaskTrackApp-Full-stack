import { Link } from "react-router-dom";
import { useAutho } from "./security/AunthContext";
export default function HeaderComponent() {
  const auth = useAutho();

  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand ms-2 fs-2 fw-bold text-black"
              href="https://www.in28minutes.com"
            >
              in28minutes1
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item fs-5">
                  {auth.isAuthenticated && (
                    <Link className="nav-link" to={`/welcome/${auth.username}`}>
                      Home1
                    </Link>
                  )}
                </li>
                <li className="nav-item fs-5">
                  {auth.isAuthenticated && (
                    <Link className="nav-link" to="/listtodos">
                      Todos
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item fs-5">
                {!auth.isAuthenticated && (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}
              </li>
              <li className="nav-item fs-5">
                {auth.isAuthenticated && (
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
