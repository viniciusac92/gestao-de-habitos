import { Avatar } from "@material-ui/core";
// import ControlledAccordions from "./styles/acordeon";
import { CardItem, CardUser, DivItems, DivPerfil } from "./styles/styles";
import { Card } from "@material-ui/core";
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
      <Card style={CardUser.root} elevation={20}>
        <div style={CardUser.bannerContainer}>
          <img
            alt="Banner Pic"
            style={CardUser.banner}
            src="https://source.unsplash.com/random/300x150"
          />
        </div>
        <div style={CardUser.topProfile}>
          <Avatar variant="rounded" style={CardUser.avatar} />
          <h3 style={CardUser.userName}>Username</h3>
        </div>
      </Card>

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
