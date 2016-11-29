import './style.css'

import React from 'react'
import { render } from 'react-dom'

const contacts = [
    { name: 'Gatuk', email: 'gatuk@pronto.com' },
    { name: 'Man', email: 'man@pronto.com' }
]

const GetContact = contact => (
    <div>
        <h2>Name: {contact.name}</h2>
        <div>Email: {contact.email}</div>
    </div>
)

class Layout extends React.Component {
    render() {
        return (
            <div id='Layout'>
            Hello from layout
            { 
                contacts.map(c =>
                    <GetContact {...c} />
                )
            }
            </div>
        )
    }
}

render(<Layout />, document.getElementById('main-app'));
