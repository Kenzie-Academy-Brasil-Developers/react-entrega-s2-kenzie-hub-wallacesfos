import './style.css'
import Assigment from "@material-ui/icons/Assignment"
import {Button} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useHistory } from 'react-router';

export default function Menu(props){
    const {setNewTech, setTechs, checkboxes, setWorks, setNewWorks} = props
    const history = useHistory()
    
    function deslogar(){
        localStorage.clear();
        history.push('/')
    }

    function CriarTech(){
        setNewTech(true)
        setTechs(false)
        setNewWorks(false)
    }

    function tecnologias(){
        setTechs(true)
        setNewTech(false)
        setWorks(false)
        setNewWorks(false)
    }

    function Trabalho(){
        setTechs(false)
        setNewTech(false)
        setWorks(true)
        setNewWorks(false)
    }

    function NewWorks(){
        setTechs(false)
        setNewTech(false)
        setWorks(false)
        setNewWorks(true)
    }

    return(
        <div className={checkboxes? 'sumir Menu' : 'Menu'}>
            <h4 className="dashboard-title"> <Assigment className="DashIcon" color="disabled"/>DashBoard</h4>
            <Button variant="contained" className="btn-menu newTech" onClick={CriarTech}><AddCircleIcon className="iconAdd"/>Nova Tecnologia</Button>
            <Button variant="outlined" className="btn-menu" onClick={NewWorks}>Novo Trabalho</Button>

            <div className="tarefas-menu">
                <h4 className="sub-title-menu">Tecnologia</h4>
                <div className="tipos-tarefas">
                    <p className="types-tarefas" onClick={tecnologias}>Suas Tecnologias</p>
                </div>
            </div>

            <div className="tarefas-menu">
                <h4 className="sub-title-menu">Trabalhos</h4>
                <div className="tipos-tarefas">
                    <p className="types-tarefas" onClick={Trabalho}>Seus Trabalhos</p>
                </div>
            </div>

            <Button variant="contained" className="btn-menu sair" onClick={deslogar}>Sair</Button>
        </div>

    )
}