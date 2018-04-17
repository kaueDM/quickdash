import React from 'react'
import './css/style.css'
import App from './App.jsx'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import fontawesome from '@fortawesome/fontawesome'
import registerServiceWorker from './registerServiceWorker'
import {
    faBars,
    faArrowLeft,
    faArrowRight,
    faEllipsisV
} from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(
    faBars,
    faArrowLeft,
    faArrowRight,
    faEllipsisV
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
