import React from 'react'

const Contact = (props) => {

    return (
        <div style={{marginTop: 50}}>

            {props.resources.map(site => {
                return <a key={site.id} href={site.link} style={{margin: 10}}>{site.site}</a>
            })}

            {props.addresses.map(address => {
                return <p key={address.id} >{address.street1} {address.street2 ? address.street2 : null} {address.city}, {address.state} {address.zip}, {address.country}</p>
            })}
            
        </div>
    )

}

export default Contact