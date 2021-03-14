import { useEffect, useState } from "react";
import api from "../../Services";

const Usuarios = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    api.get("/users/").then((res) => setUser(res.data));
  }, []);

  return (
    <div>
      {user.map((x, i) => (
        <p key={i}>{x.username}</p>
      ))}
      <a href="google.com">google</a>
    </div>
  );
};

export default Usuarios;
