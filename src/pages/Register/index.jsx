
import { useHistory } from "react-router"
import Form from "../../Components/Form"

export default function Register(){

    const history = useHistory()

    if(JSON.parse(localStorage.getItem("token")) !== null){
        history.push(`/`)
    }

    return(
        <Form />
    )
}