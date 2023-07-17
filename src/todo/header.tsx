import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login, logout } from "../stores/auth";
import { RootState } from "../stores";


export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogin = (user:any) => {
    dispatch(login(user));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <h2>Todo List kimi biwey</h2>
      {!user && (
        <nav>
          <button onClick={() => handleLogin({ id: 1, username: "Elgun" })}>
            Elgun olaraq daxil ol
          </button>
          <button onClick={() => handleLogin({ id: 2, username: "Admin" })}>
            Admin olaraq daxil ol
          </button>
        </nav>
      )}
      {user && (
        <nav>
          Welcome, {user.username}
          <button onClick={handleLogout}>Cixis</button>
        </nav>
      )}
    </header>
  );
}
