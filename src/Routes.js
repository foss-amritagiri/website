import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from './Component/home/home'
import about from './Component/about/about'
import notfound from './Component/notfound'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={about}/>
                <Route component={notfound} />
            </Switch>

        </BrowserRouter>
    )
}
