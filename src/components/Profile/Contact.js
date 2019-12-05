import React from 'react'

const Contact = (props) => {

    return (
        <div style={{marginTop: 50}}>

            {props.addresses.map(address => {
                return <p key={address.id} >{address.street1} {address.street2 ? address.street2 : null} {address.city}, {address.state} {address.zip}, {address.country}</p>
            })}
            
        </div>
    )

}

export default Contact