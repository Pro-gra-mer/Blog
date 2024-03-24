import { Link, useNavigate } from "react-router-dom";
import { loggedUser } from "./hooks/loggedUser";
import { getAuth, signOut } from "firebase/auth";

export const NavBar = () => {
  const { user } = loggedUser();
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-left">
        <h2>ZeroToPro</h2>
      </div>
      <ul>
        <li>
          <Link className="menu" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="menu" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="menu" to="/blog">
            Blog
          </Link>
        </li>
      </ul>
      <div className="nav-right">
        <button
          onClick={() => {
            navigate("/new-user");
          }}
        >
          Registrarse
        </button>
        {user ? (
          <button
            onClick={() => {
              signOut(getAuth());
            }}
          >
            Log out
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </button>
        )}
      </div>
    </nav>
  );
};
