import React, { Component } from 'react'


class CharDisplayPrimary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            imgSrcTwo: this.props.charactersTwo[this.props.iTwo] ? this.props.charactersTwo[this.props.iTwo].image : '',
            armorTwo: this.props.charactersTwo[this.props.iTwo] ? this.props.charactersTwo[this.props.iTwo].armor : '',
            healthTwo: this.props.charactersTwo[this.props.iTwo] ? this.props.charactersTwo[this.props.iTwo].health : '',
            damageTwo: this.props.charactersTwo[this.props.iTwo] ? this.props.charactersTwo[this.props.iTwo].attack : '',
            nameTwo: this.props.charactersTwo[this.props.iTwo] ? this.props.charactersTwo[this.props.iTwo].name : ''
        }
    };

    componentDidUpdate(prevProps) {
        if(prevProps.charactersTwo[this.props.iTwo] !== this.props.charactersTwo[this.props.iTwo]) {
            this.setState({
                imgSrcTwo: this.props.charactersTwo[this.props.iTwo].image,
                armorTwo: this.props.charactersTwo[this.props.iTwo].armor,
                healthTwo: this.props.charactersTwo[this.props.iTwo].health,
                damageTwo: this.props.charactersTwo[this.props.iTwo].attack,
                nameTwo: this.props.charactersTwo[this.props.iTwo].name,
            })
        }
    }

    edit = () => {
        this.setState({ editing: !this.state.editing });
    };

    saveChanges = () => {
        this.edit();
    };

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    };





    render() {

        let { editing } = this.state
        console.log(this.props.charactersTwo)
        // console.log(this.props.charactersTwo)   
        return (

            <div className="char-list">
                <div id="slide-num">Hero {`${this.props.iTwo + 1}/4`}
                </div>
                <div className='img-holder-hero-one'>
                    <div className='img-one-background'>
                        <img className='img-one' width="250px" src={this.state.imgSrcTwo} alt='' />
                        <div className='char-info'>
                            {editing
                                ?
                                <div>
                                <input value={this.state.nameTwo} onChange={this.handleChange} name="nameTwo" />
                                <input value={this.state.damageTwo} onChange={this.handleChange} name="damageTwo" />
                                <input value={this.state.healthTwo} onChange={this.handleChange} name="healthTwo" />
                                <input value={this.state.armorTwo} onChange={this.handleChange} name="armorTwo" />
                                </div>

                                :
                                <div>
                                 <p> Hero: {this.state.nameTwo} </p>
                                 <p className='health'>Health: {this.state.healthTwo}</p>
                                 <p className='damage'>Damage{this.state.damageTwo}</p>
                                 <p className='armor'>armor: {this.state.armorTwo}</p>
                                 </div>
                                 }
                            
                                 
                            {editing
                                ? (<button onClick={this.saveChanges}>save changes</button>)
                                :
                                (<button onClick={this.edit}> Edit </button>)}
                           
                            <div className='buttons'>
                                <button onClick={() => this.props.handlePrevTwo()} className='nav-buttons'> {`< Prev`} </button>
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

export default CharDisplayPrimary