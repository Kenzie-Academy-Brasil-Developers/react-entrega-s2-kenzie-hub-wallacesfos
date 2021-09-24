import {TextField, Button, Alert} from "@material-ui/core"
import './style.css'
import loginImage from '../../images/login.svg'
import { useHistory } from "react-router"
import { useState } from "react"
import axios from "axios"

export default function Login(){

    
    const history = useHistory()

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState(false)

    function sendTo(path){
        history.push(path)
    }

    function handleForm(data){
        data.preventDefault()
        const formData= {
            "email": login,
            "password": senha
        }

        axios.post("https://kenziehub.herokuapp.com/sessions", formData).then(response => {
            localStorage.clear();
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("id", JSON.stringify(response.data.user.id));
            history.push(`/dashboard`)
        }).catch((e) =>{
            setErro(true)
        })
    }
    
    if(JSON.parse(localStorage.getItem("token")) !== null){
        history.push(`/dashboard`)
    }

    return(
        <>
            {erro && <Alert severity="error" className="aletandoLogin">Senha ou Login inválidos</Alert>}

            <div className="container">
                <div className="imagem-div">
                    <img src={loginImage} alt="Login Icon"/>
                </div>

                <form onSubmit={handleForm}>
                    <h4>Login</h4>

                    <div className="pai-inputs">
                        <TextField 
                        margin="normal" 
                        type="text"
                        label="Email"
                        className="inputs-login"
                        onChange={e => setLogin(e.target.value)}
                        />
                    </div>

                    <div className="pai-inputs">
                        <TextField 
                        margin="normal"
                        type="password"
                        label="Senha"
                        className="inputs-login"
                        onChange={e => setSenha(e.target.value)}
                        />
                    </div>
                    <Button variant="contained" className="btn-login" type="submit">Entrar</Button>
                    <p className="text-login" onClick={() => sendTo('/register')}>Não é cadastrado? Cadastre-se</p>
                </form>
            </div>
        </>
    )
}