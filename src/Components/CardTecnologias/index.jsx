import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "@material-ui/core"
import './style.css'


export default function CardTecnologias(){

    const [tecnologias, setTecnologias] = useState([])

    useEffect(() =>{
        axios.get(`https://kenziehub.herokuapp.com/users/${JSON.parse(localStorage.getItem("id"))}`)
        .then(response => {
            const {techs} = response.data
            setTecnologias(techs)
        })
    }, [tecnologias])


    function Excluir(param){
        axios.delete(`https://kenziehub.herokuapp.com/users/techs/${param}`,{
            headers:{Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`}
        })
    }

    return(
        <div className="tecnologias-renderization">
            {tecnologias.map((item) => {
                return(
                    <div key={item.id} className="card">
                        <h3>{item.title}</h3>
                        <h4>Nivel</h4>
                        <Button variant="contained" onClick={() => Excluir(item.id)}>Excluir</Button>
                    </div>
                )
            })}
        </div>
    )
}