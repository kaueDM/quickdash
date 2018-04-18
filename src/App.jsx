import React from 'react'
import { HashRouter } from 'react-router-dom'
import { default as AppContainer } from './containers/AppContainer.jsx'
import { default as PagesContainer } from './containers/PagesContainer.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isAuthenticated: true }
  }

  render() {
    return (
      <HashRouter>
        {this._handleAuthentication()}
      </HashRouter>
    )
  }


  _handleAuthentication = () => (
    this.state.isAuthenticated ? <AppContainer /> : <PagesContainer />
  )

}
