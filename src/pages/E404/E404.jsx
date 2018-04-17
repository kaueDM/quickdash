import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

export default class E404 extends React.Component {

    constructor(props) {
        super(props)
        this.backRoute = props.backRoute
    }

    render() {
        return (
            <Container fluid>
                404 - not found <br />
                <NavLink to={this.props.backRoute}>Click here to go back</NavLink>
            </Container>
        )
    }

}