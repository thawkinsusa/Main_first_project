import React, {Component} from "react"
class Create extends  Component {
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
export default Create