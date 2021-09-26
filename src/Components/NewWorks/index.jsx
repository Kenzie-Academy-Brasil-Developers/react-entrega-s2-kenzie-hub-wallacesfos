import {Button, TextField, Select, InputLabel, FormControl, MenuItem, Alert} from '@material-ui/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './style.css'

export default function NewTecnologia(){

    const [works, setWorks] = useState('')
    const [description, setDescription] = useState('')
    const [alerta, setAlert] = useState(false)
    const [alertaErro, setAlertaErro] = useState(false)

    function handleForm(data){
        data.preventDefault();

        const obj = {
            "title": works,
            "description": description,
            "deploy_url": "https://kenziehub.me",
        }
        axios.post("https://kenziehub.herokuapp.com/users/works", obj, {
            headers:{ Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`}
        }).then(response => {
            setAlert(true)
        }).catch(() => {
            setAlertaErro(true)
        })
    }

    useEffect(() => {
        setTimeout(() =>{
            setAlert(false)
        },5000)
    }, [alerta])

    useEffect(() => {
        setTimeout(() =>{
            setAlertaErro(false)
        },5000)
    }, [alertaErro])

    return(
        <div id="main"> 
            {alerta && <Alert severity="success">Trabalho criado com sucesso!</Alert>}
            {alertaErro && <Alert severity="error">Trabalho já existe</Alert>}

            <form id="newTec" onSubmit={handleForm}>
                <div className="inputs-newtecnologias">
                    <h4> Adicionar novo trabalho </h4>
                    <TextField required label="Trabalho" margin="normal" onChange={(e) => setWorks(e.target.value)}/>
                    <TextField required label="Descrição" margin="normal" onChange={(e) => setDescription(e.target.value)}/>


                    <Button variant="contained" type="submit">Criar</Button>
                </div>
            </form>

        </div>
    )
}