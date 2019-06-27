import React, { Component } from 'react'

class Edit extends Component {
    constructor(props) {
        super(props)
        this.setState = {
            editing: false
        }
    }
    flipEdit = () => {
        // switching editing on and off 
        this.setState({ editing: !this.state.editing });
        // grabbing rating from above and grabbing id from parent
        this.props.editDogRating(this.state.rating, this.props.dogs.id);

    };

    saveChanges = () => {
        this.flipEdit();
    }

    // handle the change e is handling the event
    handleChange = e => {
        let { name, value } = e.target
        // this is the input target or any target when you reuse this
        // puting [name] allows you to reuse this value for w.e
        this.setState({ [name]: value })

    }

}


export default Edit