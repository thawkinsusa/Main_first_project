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
        if (prevProps.charactersTwo[this.props.iTwo] !== this.props.charactersTwo[this.props.iTwo]) {
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
        let {imgSrcTwo, armorTwo, healthTwo, damageTwo, nameTwo} = this.state
        let updateCharacter={
            image: imgSrcTwo,
            armor: armorTwo,
            health: healthTwo,
            attack:damageTwo,
            name: nameTwo
            
        }
        this.props.editHeroTwo(updateCharacter, this.props.charactersTwo[this.props.iTwo].id) 
        this.edit();
    };

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    };

    attack() {

        let attack = this.props.charactersTwo[this.props.iTwo].attack
        console.log('DAMAGE', {attack})
        let health = document.getElementById("health-enemy")
        health.value -= attack


    }





    render() {
        let {charactersTwo} = this.props
        let { editing } = this.state
        console.log('hello', this.props.iTwo)
        // console.log(this.props.charactersTwo)   
        return (

            <div className="char-list">
                <div id="slide-num">Hero {`${this.props.iTwo + 1}/${charactersTwo.length}`}
                </div>
                <div className='img-holder-hero-one'>
                    <div className='img-one-background'>
                        <img className='img-one' width="250px" src={this.props.charactersTwo[0] && this.props.charactersTwo[this.props.iTwo].image} alt='' />
                        <progress id="health" value={this.props.charactersTwo[0] && this.props.charactersTwo[this.props.iTwo].health} max="100"></progress>
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
                                    <p> Hero: {this.props.charactersTwo[0] && this.props.charactersTwo[this.props.iTwo].name} </p>
                                    <p className='health'>Health: {this.props.charactersTwo[0] && this.props.charactersTwo[this.props.iTwo].health}</p>
                                    <p className='damage'>Damage{this.props.charactersTwo[0] && this.props.charactersTwo[this.props.iTwo].attack}</p>
                                    <p className='armor'>armor: {this.props.charactersTwo[0] && this.props.charactersTwo[this.props.iTwo].armor}</p>
                                </div>
                            }


                            {editing
                                ? (<button onClick={this.saveChanges}>save changes</button>)
                                :
                                (<button onClick={this.edit}> Edit </button>)}
                                <button onClick={() => this.props.handlePrevTwo()} className='nav-buttons'> {`< Prev`} </button>
                                <button className='center-buttons' onClick={(e)=> this.props.deleteHero(this.props.charactersTwo[this.props.iTwo].id)}> {`Delete`} </button>
                                <button onClick={() => this.props.handleNextTwo()} className='nav-buttons'> {`Next > `} </button>
                                <button onClick={() => this.attack()}>attack</button>
                            <div className='buttons'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharDisplayPrimary