import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import image1 from '../images/products.jpeg'
import image2 from '../images/services.jpeg'
import image3 from '../images/signup.jpeg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Align with Tabi</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        text="Card 1 and all of its information."
                        src={ image1 }
                        label="Card1"
                        path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        text="Card 2 and all of its information."
                        src={ image2 }
                        label="Card2"
                        path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        text="Card 2 and all of its information."
                        src={ image3 }
                        label="Card3"
                        path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        text="Card 1 and all of its information."
                        src={ image1 }
                        label="Card1"
                        path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        text="Card 2 and all of its information."
                        src={ image2 }
                        label="Card2"
                        path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        text="Card 2 and all of its information."
                        src={ image3 }
                        label="Card3"
                        path="/services" />
                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default Cards
