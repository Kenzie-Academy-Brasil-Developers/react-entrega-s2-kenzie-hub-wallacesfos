import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "@material-ui/core"
import './style.css'


export default function Works(){

    const [works, setWorks] = useState([])

    useEffect(() =>{
        axios.get(`https://kenziehub.herokuapp.com/users/${JSON.parse(localStorage.getItem("id"))}`)
        .then(response => {
            const {works} = response.data
            setWorks(works)
        })
    }, [works])


    function Excluir(param){
        axios.delete(`https://kenziehub.herokuapp.com/users/works/${param}`,{
            headers:{Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`}
        })
    }

    return(
        <div className="tecnologias-renderization">
            {works.map((item) => {
                return(
                    <div key={item.id} className="card">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <Button variant="contained" onClick={() => Excluir(item.id)}>Excluir</Button>
                    </div>
                )
            })}
        </div>
    )
}