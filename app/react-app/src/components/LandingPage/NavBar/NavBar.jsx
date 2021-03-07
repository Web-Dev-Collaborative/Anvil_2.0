import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { LogoutButton, DemoUserButton } from "../../auth";

const NavBar = () => {
  const currentUser = useSelector((state) =>
    state.user.id ? state.user.id : null
  );

  return (
    <nav>
      <ul>
        {!currentUser && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>

            <li>
              <DemoUserButton />
            </li>
          </>
        )}
        {currentUser && (
          <>
            <li>
              <LogoutButton />
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to={`/users/${currentUser}`}>Users</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
