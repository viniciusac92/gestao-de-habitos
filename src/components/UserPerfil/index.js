import { Avatar, CardContent, Typography } from "@material-ui/core";
// import ControlledAccordions from "./styles/acordeon";
import {
  CardItem,
  CardMediaUser,
  CardUser,
  DivItems,
  DivPerfil,
} from "./styles/styles";
import { useProviderUser } from "../../Providers/User";
import FullScreenDialog from "./styles/dialog";
import { useEffect } from "react";
import api from "../../Services";

const UserPerfil = () => {
  const { userName, setHabits, habits } = useProviderUser();

  useEffect(() => {
    api
      .get(`/habits/personal/`)
      .then((res) => setHabits(res.data))
      .then(() => localStorage.setItem("habits", JSON.stringify(habits)))
      .catch((e) => console.log(e));
  }, [userName]);

  console.log(habits);

  return (
    <DivPerfil>
      <CardUser>
        <CardMediaUser>
          <Avatar
            alt="unloaded"
            src={
              "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256__340.png"
            }
            style={{ height: "100px", width: "200px" }}
          ></Avatar>
        </CardMediaUser>
        <CardContent>
          <Typography>{userName}</Typography>
        </CardContent>
      </CardUser>
      <DivItems>
        <CardItem onClick={() => console.log("foi")} />
        <CardItem>
          Hábitos <FullScreenDialog />
        </CardItem>
        <CardItem />
        <CardItem />
      </DivItems>
    </DivPerfil>
  );
};

export default UserPerfil;
