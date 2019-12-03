import React from 'react'
import {NavLink} from 'react-router-dom'
import {Form, Message} from 'semantic-ui-react'

function SuccessForm(props) {
    return (
        <Form success>
            <Message success header='Form Completed' content="You're all set!"/>
            <NavLink to={`/${props.currentUser}`}>Go To Your Page!</NavLink>
        </Form>
    )
}

export default SuccessForm
