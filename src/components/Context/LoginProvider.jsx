import { LoginContext } from "./Context";
import { useState } from "react";
const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
