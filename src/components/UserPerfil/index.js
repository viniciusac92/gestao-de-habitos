import { Avatar, CardContent, Typography } from "@material-ui/core";
import ControlledAccordions from "./styles/acordeon";
import { CardMediaUser, CardUser, DivItems, DivPerfil } from "./styles/styles";
import { useProviderUser } from "../../Providers/User";

const UserPerfil = () => {
  const { userName } = useProviderUser();

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
        {/* <p>{userName}</p> */}
      </CardUser>
      <DivItems>
        <ControlledAccordions />
      </DivItems>
    </DivPerfil>
  );
};

export default UserPerfil;
