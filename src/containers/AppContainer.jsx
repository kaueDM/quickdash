import React from 'react'
import { E404 } from '../pages'
import { appRoutes } from '../routes/app.jsx'
import { Switch, Route } from 'react-router-dom'
import { AppHeader } from '../components'

export default class AppContainer extends React.Component {

    render() {
        return (
            <div>
                <AppHeader title="Dashboard" handleLogoff={this._handleLogoff} />
                <h1>App sidebar</h1>
                <Switch>
                    {this._handleRoutes()}
                    <Route render={() => (<E404 backRoute='/' />)} />
                </Switch>
            </div>
        )
    }

    _handleRoutes = () => (
        appRoutes.map((route, key) => (
            <Route exact path={route.path} component={route.component} key={key} />
        ))
    )

    _handleLogoff = () => (
        console.log('Clicked -> Logoff')
    )
}
