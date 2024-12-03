import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: true,
};
// console.log(initialState.user)

function reducer(state, action) {
  switch (action.type) {
    case "signup":
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "logout":
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  console.log(user);
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);
  function login(email, password) {
    const StoreduserData = JSON.parse(localStorage.getItem("user"));

    if (
      StoreduserData &&
      StoreduserData.email === email &&
      StoreduserData.password === password
    ) {
      dispatch({ type: "login", payload: StoreduserData });

      console.log(email, password);
    }
  }

  function signup(email, name, password) {
    const user = { email, name, password };

    dispatch({ type: "signup", payload: user });
  }

  function logout() {
    localStorage.removeItem("user");
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider
      value={{ login, signup, logout, isAuthenticated, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  let context = useContext(AuthContext);

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { AuthProvider, useAuth };
