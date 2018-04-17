import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

export default class SignUp extends React.Component {

    render() {
        return (
            <Container fluid>
                <NavLink to="/">
                    Click to go to login
                </NavLink>
            </Container>
        )
    }

}