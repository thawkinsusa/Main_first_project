import React, { Component } from 'react'

class CharDisplaySecondary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const imgSrc = this.props.characters[this.props.i] ? this.props.characters[this.props.i].image : null
        const armor = this.props.characters[this.props.i] ? this.props.characters[this.props.i].armor : null
        const name = this.props.characters[this.props.i] ? this.props.characters[this.props.i].name : null
        const health = this.props.characters[this.props.i] ? this.props.characters[this.props.i].health : null
        const damage = this.props.characters[this.props.i] ? this.props.characters[this.props.i].attack : null
        console.log(this.props.characters)
        // console.log(this.props.characters)   
        return (

            <div className="char-list">
                <div id="slide-num"> Hero {`${this.props.i + 1}/4`}
                </div>
                <div className='img-holder-hero-one'>
                    <div className='img-one-background'>
                        <img className='img-one' width="250px" src={imgSrc} alt='' />
                        <div className='char-info'>
                            <p className='name'>Hero: {name}</p>
                            <p className='health'>Health: {health}</p>
                            <p className='dammage'>Damage{damage}</p>
                            <p className='armor'>armor: {armor}</p>
                            <div className='buttons'>
                                <button onClick={() => this.props.handlePrev()} className='nav-buttons'> {`< Prev`} </button>
                                <button className='center-buttons'> Edit </button>
                                <button className='center-buttons' onClick={()=> this.props.deleteHero()}> {`Delete`} </button>
                                <button onClick={(e) => this.Pay.handleNext()} className='nav-buttons'> {`Next > `} </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharDisplaySecondary