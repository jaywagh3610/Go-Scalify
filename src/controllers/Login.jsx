import { useState } from "react";
import Form from "../utils/Form";
import { useAuth } from "../utils/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const fields = [
    { label: "email", name: "email" },
    { label: "password", name: "password" },
  ];
  const [formValues, setFormValues] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login(formValues.email, formValues.password);
    if (isAuthenticated) {
      navigate("/hello", { replace: true });
    }
  }

  function handleChange(e, name) {
    setFormValues({ ...formValues, [name]: e.target.value });
  }

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <Form
            key={field.name}
            label={field.label}
            name={field.name}
            onChange={(e) => handleChange(e, field.name)}
          />
        ))}
        <button className="border p-2">Login</button>
      </form>
    </div>
  );
}

export default Login;
