import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import api from "../../Services/index";
import { useState } from "react";
// import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
import jwt_decode from "jwt-decode";
import { SpanError, textAreaStyle, buttonStyle } from "./styled";

const LoginForm = () => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("campo obrigatório!"),
    password: yup
      .string()
      .min(6, "mínimo de 6 caracteres")
      .required("campo obrigatório!"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    setError(false);
    api
      .post("/sessions/", data)
      .then((response) => {
        localStorage.clear();
        const token = JSON.stringify(response.data.access);
        const id = jwt_decode(token).user_id;
        localStorage.setItem("token", token);
        localStorage.setItem("id", JSON.stringify(id));
        reset();
        history.push("/home");
      })
      .catch((e) => setError(true));
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <TextField
          style={textAreaStyle}
          margin="normal"
          variant="outlined"
          label="Usuário"
          name="username"
          size="small"
          color="primary"
          inputRef={register}
          error={!!errors.userName}
          helperText={errors.userName?.message}
        />
      </div>
      <div>
        <TextField
          style={textAreaStyle}
          margin="normal"
          variant="outlined"
          label="Senha"
          name="password"
          type="password"
          size="small"
          color="primary"
          inputRef={register}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <div style={{ paddingTop: "15px" }}>
        <Button type="submit" variant="contained" style={buttonStyle}>
          Entrar
        </Button>
      </div>
      <div>
        <Button onClick={() => history.push("/register")} color="primary">
          Cadastre-se
        </Button>
      </div>
      {error && <SpanError> Usuário ou senha incorretas! </SpanError>}
    </form>
  );
};

export default LoginForm;
