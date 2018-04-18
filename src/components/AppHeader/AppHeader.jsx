import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'

export default class AppHeader extends React.Component {
    constructor(props) {
        super(props)
        this.title = props.title
        this.handleLogoff = props.handleLogoff
    }

    render() {
        const { title, handleLogoff } = this.props

        const trigger = (
            <span className='app_header__right--icon'>
                <Icon name='setting' />
            </span>
        )

        return (
            <div className='app_header'>
                <div className='app_header__left'>
                    <Icon name='bars' />
                </div>
                <div className='app_header__title'>{title}</div>

                <div className='app_header__right'>
                    <Dropdown trigger={trigger} direction='left'>
                        <Dropdown.Menu>
                            <Dropdown.Item icon='user' text='Account' />
                            <Dropdown.Item icon='inbox' text='Messages' description='12' />
                            <Dropdown.Item icon='warning' text='Alerts' description='3' />
                            <Dropdown.Item icon='close' text='Logoff' onClick={handleLogoff} />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        )
    }
}
