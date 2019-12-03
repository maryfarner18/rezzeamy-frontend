import React, { Component } from 'react'

const Contact = (props) => {

    return (
        <React.Fragment style={{marginTop: 50}}>
            {props.resources.map(site => {
                return <a href={site.link} style={{margin: 10}}>{site.site}</a>
            })}
            {props.addresses.map(address => {
                return <p>{address.street1} {address.street2 ? address.street2 : null} {address.city}, {address.state} {address.zip}, {address.country}</p>
            })}
        </React.Fragment>
    )

}

export default Contact