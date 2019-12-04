
import {Route, Redirect, Switch} from 'react-router-dom'
import React, { Component } from 'react'

class Example extends Component {
    state = {
        flag : true
    }

    renderPath1 = () => {
        return <div>Path 1 Results</div>
    }

    renderPath2 = () => {
        if(this.state.flag){
            return <div>Path 2 Results</div>
        }else{
           return  <Redirect to="/path1"/>
        }
    }

    renderIndex = () => {
        if(this.state.flag){
            return <div>Path 3 Results</div>
        }else{
            return <Redirect to="/path1"/>
        }
    }

    render404 = () => {
        return <div>NOT FOUND</div>
    }

    render() {
        return (
            <Switch>
                <Route path="/path1" render={this.renderPath1} />
                <Route path="/path2" render={this.renderPath2} />
                <Route exact path="/" render={this.renderIndex} />
                <Route render={this.render404} />
            </Switch>
        )
    }
}

export default Example