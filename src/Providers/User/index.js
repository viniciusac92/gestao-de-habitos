import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import api from "../../Services";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get(`/users/${JSON.parse(localStorage.getItem("id"))}/`)
      .then((res) => setUserName(res.data.username));
  }, []);

  const handleChangeUserName = (choosename) => {
    api
      .patch(`/users/${JSON.parse(localStorage.getItem("id"))}/`, {
        username: choosename,
      })
      .then(() => setUserName(choosename))
      .then(() => setError(false))
      .catch((e) => setError(true));
  };

  return (
    <UserContext.Provider value={{ userName, handleChangeUserName, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useProviderUser = () => useContext(UserContext);
