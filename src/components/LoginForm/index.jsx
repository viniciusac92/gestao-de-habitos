import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, TextField, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import api from '../../Services/index'
import { useState } from 'react'
import { SettingsInputAntennaTwoTone } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const LoginForm = () => {
    const [error, setError] = useState(false);
    const classes = useStyles();
    const history = useHistory()

    const schema = yup.object().shape({
        username: yup.string().required('campo obrigatório!'),
        password: yup
            .string()
            .min(6, 'mínimo de 6 caracteres')
            .required("campo obrigatório!")
    })

    const { register, handleSubmit, errors, reset } = useForm({
        resolver:yupResolver(schema)
    })

    const handleForm = data => {
        setError(false)
        api
        .post('/sessions/', data)
        .then(
            response => {
                sessionStorage.clear()
                sessionStorage.setItem('token', JSON.stringify(response.data.token))
                reset()
                history.push('/home')
            }
        )
        .catch(
            e => setError(true)
        )
    }

    return (
        <form onSubmit = {handleSubmit(handleForm)} >
            <div>
                <TextField 
                    margin = 'normal'
                    variant = 'outlined'
                    label = 'Usuário'
                    name = 'username'
                    size = 'small'
                    color = 'primary'
                    inputRef = {register}
                    error = {!!errors.userName}
                    helperText = {errors.userName?.message}
                />
            </div>
            <div>
                <TextField 
                    margin = 'normal'
                    variant = 'outlined'
                    label = 'Senha'
                    name = 'password'
                    size = 'small'
                    color = 'primary'
                    inputRef = {register}
                    error = {!!errors.password}
                    helperText = {errors.password?.message}
                />
            </div>
            <div className={classes.root}>
                <Button type='submit' variant='contained' color='primary' >Entrar</Button>
            </div>
            <div className={classes.root}>
                <Button onClick={() => history.push('/register')} color='primary' >Cadastre-se</Button>
            </div>
            {error && <span> Usuário ou senha incorretas! </span>}
        </form>
    )

}

export default LoginForm