import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

export default class Login extends React.Component {

    render() {
        return (
            <Container fluid>
                <NavLink to="/signup">
                    Click to go to sign up
                </NavLink>
            </Container>
        )
    }

}