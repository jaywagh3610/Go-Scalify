import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider";
import Search from "../UI/Search";
import Converter from "../UI/Converter";

function HelloPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  function handlelogout() {
    logout();
    navigate("/");
  }
  const { name } = user;
  return (
    <div>
      <Search />
      <div>Hello {name}</div>
      <button onClick={handlelogout}>logout</button>

      <Converter />
    </div>
  );
}

export default HelloPage;
