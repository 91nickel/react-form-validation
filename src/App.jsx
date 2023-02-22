import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Card from './components/card'
import CardEdit from './components/cardEdit'

function App () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Switch>
                        <Route exact={true} path="/" component={Card}/>
                        <Route path="/edit" component={CardEdit}/>
                        <Redirect to="/404"/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default App
