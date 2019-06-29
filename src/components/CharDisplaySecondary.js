import React, { Component } from 'react'

class CharDisplaySecondary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            imgSrc: this.props.characters[this.props.i] ? this.props.characters[this.props.i].image : '',
            armor: this.props.characters[this.props.i] ? this.props.characters[this.props.i].armor : '',
            health: this.props.characters[this.props.i] ? this.props.characters[this.props.i].health : '',
            damage: this.props.characters[this.props.i] ? this.props.characters[this.props.i].attack : '',
            name: this.props.characters[this.props.i] ? this.props.characters[this.props.i].name : ''
        }
    };

    componentDidUpdate(prevProps) {
        if (prevProps.characters[this.props.i] !== this.props.characters[this.props.i]) {
            this.setState({
                imgSrcTwo: this.props.characters[this.props.i].image,
                armorTwo: this.props.characters[this.props.i].armor,
                healthTwo: this.props.characters[this.props.i].health,
                damageTwo: this.props.characters[this.props.i].attack,
                nameTwo: this.props.characters[this.props.i].name,
            })
        }
    }

    edit = () => {
        this.setState({ editing: !this.state.editing });
    };

    saveChanges = () => {
        let {imgSrc, armor, health, damage, name} = this.state
        let updatecharacters={
            image: imgSrc,
            armor: armor,
            health: health,
            damage:damage,
            name: name
            
        }
        this.props.editHeroTwo(updatecharacters, this.props.characters[this.props.i].id) 
        this.edit();
    };

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    };




    render() {
        let {characters} = this.props
        let { editing } = this.state
        console.log('hello', this.props.i)
        // console.log(this.props.characters)   
        return (

            <div className="char-list">
                <div id="slide-num">Hero {`${this.props.i + 1}/${characters.length}`}
                </div>
                <div className='img-holder-hero-one'>
                    <div className='img-one-background'>
                        <img className='img-one' width="250px" src={this.props.characters[0] && this.props.characters[this.props.i].image} alt='' />
                        <progress id="health-enemy" value={this.props.characters[0] && this.props.characters[this.props.i].health} max={this.props.characters[0] && this.props.characters[this.props.i].health}></progress>
                        <div className='char-info'>
                            {editing
                                ?
                                <div>
                                    <input value={this.state.name} onChange={this.handleChange} name="name" />
                                    <input value={this.state.damage} onChange={this.handleChange} name="damage" />
                                    <input value={this.state.health} onChange={this.handleChange} name="health" />
                                    <input value={this.state.armor} onChange={this.handleChange} name="armor" />
                                </div>

                                :
                                <div>
                                    <p> Hero: {this.props.characters[0] && this.props.characters[this.props.i].name} </p>
                                    <p className='health'>Health: {this.props.characters[0] && this.props.characters[this.props.i].health}</p>
                                    <p className='damage'>Damage{this.props.characters[0] && this.props.characters[this.props.i].attack}</p>
                                    <p className='armor'>armor: {this.props.characters[0] && this.props.characters[this.props.i].armor}</p>
                                </div>
                            }


                            {editing
                                ? (<button onClick={this.saveChanges}>save changes</button>)
                                :
                                (<button onClick={this.edit}> Edit </button>)}
                                <button onClick={() => this.props.handlePrev()} className='nav-buttons'> {`< Prev`} </button>
                                <button onClick={() => this.props.handleNext()} className='nav-buttons'> {`Next > `} </button>
                                
                            <div className='buttons'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharDisplaySecondary