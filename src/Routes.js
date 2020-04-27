import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from './Component/home/home'
import about from './Component/about/about'
import notfound from './Component/notfound'
import project from './Component/projects/project'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={about}/>
                <Route exact path="/project" component={project}/>
                <Route component={notfound} />
            </Switch>

        </BrowserRouter>
    )
}
