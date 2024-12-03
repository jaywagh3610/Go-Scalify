import { useState } from "react";
import { useAuth } from "../utils/AuthProvider";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    signup(email, name, password);
  }

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="signup">
        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
