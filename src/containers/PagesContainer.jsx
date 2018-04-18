import React from 'react'
import { E404 } from '../pages'
import { pagesRoutes } from '../routes/pages.jsx'
import { Switch, Route } from 'react-router-dom'

export default class PagesContainer extends React.Component {

    render() {
        return (
            <div>
                <h1>Pages header</h1>
                <h1>Pages sidebar</h1>
                <Switch>
                    {this._handleRoutes()}
                    <Route render={() => (<E404 backRoute='/login' />)} />
                </Switch>
            </div>
        )
    }

    _handleRoutes = () => (
        pagesRoutes.map((route, key) => (
            <Route exact path={route.path} component={route.component} key={key} />
        ))
    )
}
