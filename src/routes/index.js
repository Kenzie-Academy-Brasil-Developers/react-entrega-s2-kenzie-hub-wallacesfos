import { BrowserRouter, Route, Switch } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Sucesso from "../pages/Sucesso"

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register  />
                </Route>
                <Route path="/sucesso/:name">
                    <Sucesso />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}