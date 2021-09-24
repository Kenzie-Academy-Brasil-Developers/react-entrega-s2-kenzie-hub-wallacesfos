import sucessoImagem from '../../images/sucesso.svg'
import {useParams} from 'react-router-dom'
import {Button} from "@material-ui/core"
import { useHistory } from 'react-router';
import './style.css'

export default function Sucesso(){

    const {name} = useParams()
    const history = useHistory()

    function voltar(){
        history.push('/')
    }

    return(
        <div className="container">
             <div className="imagem-div">
                <img src={sucessoImagem} alt="Login Icon"/>
            </div>

            <div className="sucesso">
                <img src="https://icon-library.com/images/icon-from-png/icon-from-png-8.jpg" alt="Sucesso"/>
                <h3 className="sucesso-msg">Cadastrado com Sucesso!!</h3>
                <p className="sucesso-text">Olá {name}! Sua conta na plataforma foi criada com sucesso, aproveite o site!</p>
                <Button variant="contained" className="btn-sucesso" onClick={voltar}>Voltar</Button>
            </div>
        </div>
    )
}