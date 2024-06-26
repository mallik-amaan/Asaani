import React, { useState } from "react";
import axios from "axios"; //npm install axios
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode"; //package npm install jwt-decode //npm install jsonwebtoken
import { message } from "antd";

const AuthContext = React.createContext();
//Comment Code//

function AuthProvider(props) {
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });
  const [errorLogin, setErrorLogin] = useState("");
  const navigate = useNavigate();

  const register = async (values) => {
    await axios.post("http://localhost:4000/auth/register", values);
    navigate("/login");
  };

  //logic login
  const login = async (data) => {
    try {
      const result = await axios.post("http://localhost:4000/auth/login", data);
      console.log(result);
      const token = result.data.token;
      const fullName = result.data.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("fullName", fullName);
      const userDataFromToken = jwtDecode(token);
      console.log(userDataFromToken.role);
      setState({ ...state, user: userDataFromToken });
      localStorage.setItem("user_id", userDataFromToken.user_id);
      localStorage.setItem("role", userDataFromToken.role);
      localStorage.setItem("fullName", userDataFromToken.fullName);
      localStorage.setItem("phoneNumber", userDataFromToken.phoneNumber);
      localStorage.setItem("email", userDataFromToken.email);
      navigate("/");
      if (userDataFromToken.role === "admin") {
        navigate("/admin-category");
        message.success("Login as admin successful");
      } else if (userDataFromToken.role === "customer") {
        navigate("/");
        message.success("Login as customer successful");
      } else {
        message.error("Incorrect email or password");
      }  
    } catch (e) {
      console.error("Login failed:", e);
      if (e.response && e.response.data) {
        setErrorLogin("Incorrect email or password");
      }
      // Return a response object indicating failure
      return { success: false, error: e.response ? e.response.data : e.message };
    }
  };
  

  //ใส่ removeItem ตอน logout
  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null, error: null });
    localStorage.removeItem("user_id");
    localStorage.removeItem("fullName");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    navigate("/");
  };
  const isAuthenticated = Boolean(localStorage.getItem("token"));
  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
        register,
        errorLogin,
        setErrorLogin,
        isAuthenticated,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
