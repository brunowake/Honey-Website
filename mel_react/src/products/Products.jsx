import React from 'react'
import Card from '../components/Card'
import './Products.css'
import honey from '../img/honey.png'

export default props => {

    const honeyLayout = (
        <div className="productContent">
            <div className='productImg'><img src={honey}/> </div>
            <ul >
                <li>123651762351762123123</li>
                <li>123651762351762123123</li>
                <li>123651762351762123123</li>
                <li>123651762351762123123</li>
            </ul>
            <div className='productText'>
                <span> honey name</span>
                <p>
                    adasud haushd uashd uahsd uasj dkasjdiasjdiaj sdiajsdijajij jajajajja jsldklqwke qweolkqwlekqlwek
                    qwiejqiwejiqwjeiqjwieajskejd kasj ekajse kajse akje aksjdaosaij
                </p>
            </div>
        </div>)


    return (
        <div>
            <Card cardLayout={honeyLayout}/>
            <Card cardLayout={honeyLayout}/>
            <Card cardLayout={honeyLayout}/>
        </div>
        
    )
}