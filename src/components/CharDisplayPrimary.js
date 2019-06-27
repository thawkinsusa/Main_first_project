import React, { Component } from 'react'


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    };

    edit = () => {
        this.setState({ editing: !this.state.editing });
        this.props.editHeroesTwo(this.state.heroes, this.props.charactersTwo.heroes);
    };

    saveChanges = () => {
        this.edit();
    };

    handleChange = e => {
        let { heroes, value } = e.target
        this.setState({ [heroes]: value })
    };





    render() {

        let { editing } = this.state
        const imgSrcTwo = this.props.charactersTwo[this.props.iTwo] ? this.props.charactersTwo[this.props.iTwo].image : null
        const armorTwo = this.props.charactersTwo[this.props.iTwo] ? this.props.charactersTwo[this.props.iTwo].armor : null
        const nameTwo = this.props.charactersTwo[this.props.iTwo] ? this.props.charactersTwo[this.props.iTwo].heroes : null
        const healthTwo = this.props.charactersTwo[this.props.iTwo] ? this.props.charactersTwo[this.props.iTwo].health : null
        const damageTwo = this.props.charactersTwo[this.props.iTwo] ? this.props.charactersTwo[this.props.iTwo].attack : null
        console.log(this.props.charactersTwo)
        // console.log(this.props.charactersTwo)   
        return (

            <div className="char-list">
                <div id="slide-num">Hero {`${this.props.iTwo + 1}/4`}
                </div>
                <div className='img-holder-hero-one'>
                    <div className='img-one-background'>
                        <img className='img-one' width="250px" src={imgSrcTwo} alt='' />
                        <div className='char-info'>
                            {editing
                                ?
                                <input value={nameTwo} onChange={this.handleChange} name="name" />
                                :
                                <p> Hero: {nameTwo} </p>}
                            {editing
                                ? (<button onClick={this.saveChanges}>save changes</button>)
                                :
                                (<button onClick={this.edit}> Edit </button>)}
                            <p className='health'>Health: {healthTwo}</p>
                            <p className='dammage'>Damage{damageTwo}</p>
                            <p className='armor'>armor: {armorTwo}</p>
                            <div className='buttons'>
                                <button onClick={() => this.handlePrevTwo()} className='nav-buttons'> {`< Prev`} </button>
                                <button className='center-buttons'> Delete </button>
                                <button onClick={() => this.props.handleNextTwo()} className='nav-buttons'> {`Next > `} </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form