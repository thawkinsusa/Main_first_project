import React, {Component} from "react"
import CharDisplayPrimary from './CharDisplayPrimary'
class Animate extends CharDisplayPrimary {
    constructor(props) {
        super(props)
        this.state = {
        

    }
    };
    render() {
        return (<progress id="health" value={this.props.health} max="10000"></progress>
        )
    }
}
export default Animate