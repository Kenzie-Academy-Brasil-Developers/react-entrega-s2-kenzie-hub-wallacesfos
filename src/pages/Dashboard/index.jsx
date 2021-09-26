import Menu from '../../Components/Menu'
import './style.css'
import NewTecnologia from '../../Components/NewTecnologia'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import CardTecnologias from '../../Components/CardTecnologias'
import axios from 'axios'
import MenuIcon from '@material-ui/icons/Menu';
import { Checkbox } from '@material-ui/core'
import Works from '../../Components/Works'
import NewWorkss from '../../Components/NewWorks'



export default function Dashboard(){
    const history = useHistory()


    if(JSON.parse(localStorage.getItem("token")) === null){
        history.push(`/`)
    }

    const [newTech, setNewTech] = useState(false);
    const [techs, setTechs] = useState(true);
    const [checkboxes, setCheckboxes] = useState(false)
    const [works, setWorks] = useState(false)
    const [newWorks, setNewWorks] = useState(false)


    return(
        <div className="dashboard">
            <header className="Menu-horizontal">
                <h4>DB</h4>
                <div>
                    <label for="checkboxes"><MenuIcon className="iconeHamburguer" /></label>
                    <input type="checkbox" id="checkboxes" value={checkboxes} onChange={(e) => setCheckboxes(e.target.checked)}/>
                </div>
            </header>
            <Menu checkboxes={checkboxes} id="menu" techs={techs} newTech={newTech} setNewWorks={setNewWorks} setTechs={setTechs} setNewTech={setNewTech} works={works} setWorks={setWorks}/>
            <div className="vazio">
            </div>
            {newTech && <NewTecnologia />}
            {techs && <CardTecnologias />}
            {works && <Works />}
            {newWorks && <NewWorkss />}

        </div>
    )
}