import React from 'react'
import { E404 } from '../pages'
import { appRoutes } from '../routes/app.jsx'
import { Switch, Route } from 'react-router-dom'
import { AppHeader, AppSidebar } from '../components'
import { Sidebar } from 'semantic-ui-react'

export default class AppContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

    render() {
        const { isVisible } = this.state
        return (
            <div className='app_container'>
                <AppHeader
                    title='Dashboard'
                    handleSidebar={this._handleSidebar}
                    handleLogoff={this._handleLogoff}
                />
                <Sidebar.Pushable>
                    <AppSidebar isVisible={isVisible} />
                    <Sidebar.Pusher dimmed={isVisible} onClick={this._handlePusherClick}>
                        <div className='app_container__content'>
                            <Switch>
                                {this._handleRoutes()}
                                <Route render={() => (<E404 backRoute='/' />)} />
                            </Switch>
                        </div>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }

    _handleRoutes = () => (
        appRoutes.map((route, key) => (
            <Route exact path={route.path} component={route.component} key={key} />
        ))
    )

    _handlePusherClick = () => this.setState({ isVisible: false })

    _handleSidebar = () => this.setState({ isVisible: !this.state.isVisible })

    _handleLogoff = () => console.log('Clicked -> Logoff')
}
