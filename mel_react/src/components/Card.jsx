import React from 'react'
import './Card.css'
import cardBackground from '../img/cells.png'

export default props => {

    const textLayout = (
        <div className="listText">
            <h2> Welcome</h2>
            <p>
                adasud haushd uashd uahsd uasj dkasjdiasjdiaj sdiajsdijajij jajajajja jsldklqwke qweolkqwlekqlwek
                qwiejqiwejiqwjeiqjwieajskejd kasj ekajse kajse akje aksjdaosaij
            </p>
        </div>)



    const backgroundConfig = {
        backgroundImage: `url(${cardBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    return (
        <div className="listItem" style={backgroundConfig} >
            {props.cardLayout ? props.cardLayout:textLayout}
        </div>
    )
}