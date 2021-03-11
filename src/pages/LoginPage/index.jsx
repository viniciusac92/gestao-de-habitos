import LoginForm from "../../components/LoginForm";
import { loginCardStyle } from "./style";
import { Card } from "@material-ui/core";
import D2DLogo from "../../styles/D2DLogo";

const LoginPage = () => {
  return (
    <Card style={loginCardStyle} raised={true}>
      <D2DLogo />
      <LoginForm />
    </Card>
  );
};

export default LoginPage;
