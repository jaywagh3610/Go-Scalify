import { useState } from "react";
import Login from "../controllers/Login";
import SignUp from "../controllers/SignUp";
// import { useAuth } from "../utils/AuthProvider";
function Home() {
  const [showLogin, setShowLogin] = useState(false);
  //   const [showSignup, setShowSignup] = useState(true);
  //   const { user } = useAuth();

  function handleshowLogin() {
    setShowLogin((show) => !show);
  }

  return (
    <div className="auth">
      {showLogin ? <Login /> : <SignUp />}
      <button onClick={handleshowLogin}>
        {showLogin ? "SignUP" : "Login"}
      </button>
    </div>
  );
}

export default Home;
