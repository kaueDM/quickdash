import React from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

export default class AppSidebar extends React.Component {

    constructor(props) {
        super(props)
        this.isVisible = props.isVisible
    }

    render() {
        const { isVisible } = this.props

        const options = [
            { name: 'dashboard', icon: 'home', label: 'Dashboard' },
            { name: 'games', icon: 'gamepad', label: 'Games' },
            { name: 'channels', icon: 'camera', label: 'Channels' }
        ]

        return (
            <Sidebar
                as={Menu}
                animation='overlay'
                // width='thin'
                visible={isVisible}
                vertical
                inverted
            >
                {this._renderItems(options)}
            </Sidebar>
        )
    }

    _renderItems = items => items.map((item, index) => (
        <Menu.Item name={item.name} key={index}>
            <Icon name={item.icon} />
            {item.label}
        </Menu.Item>
    ))

}