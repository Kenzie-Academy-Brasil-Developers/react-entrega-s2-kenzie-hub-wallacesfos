import {Button, TextField, Select, InputLabel, FormControl, MenuItem, Alert} from '@material-ui/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './style.css'

export default function NewTecnologia(){

    const [tecnologia, setTecnologia] = useState('')
    const [nivel, setNivel] = useState('')
    const [alerta, setAlert] = useState(false)
    const [alertaErro, setAlertaErro] = useState(false)

    function handleForm(data){
        data.preventDefault();

        const obj = {
            "title": tecnologia,
            "status": nivel,
        }
        axios.post("https://kenziehub.herokuapp.com/users/techs", obj, {
            headers:{Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`}
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
            {alerta && <Alert severity="success">Tecnologia criada com sucesso!</Alert>}
            {alertaErro && <Alert severity="error">Tecnologia já existe</Alert>}

            <form id="newTec" onSubmit={handleForm}>
                <div className="inputs-newtecnologias">
                    <h4> Adicionar nova Tecnologia </h4>
                    <TextField required label="Tecnologia" margin="normal" onChange={(e) => setTecnologia(e.target.value)}/>
                    <FormControl className="forms" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Nivel</InputLabel>
                        <Select
                        required
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Nivel"
                        className="Select"
                        onChange={(event) => setNivel(event.target.value)}
                        >
                            <MenuItem value="Iniciante">Iniciante</MenuItem>
                            <MenuItem value="Intermediário">Intermediário</MenuItem>
                            <MenuItem value="Avançado">Avançado</MenuItem>
                        </Select>
                    </FormControl>

                    <Button variant="contained" type="submit">Criar</Button>
                </div>
            </form>

        </div>
    )
}