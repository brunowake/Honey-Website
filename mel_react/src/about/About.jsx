import React from 'react'
import Card from '../components/Card'


export default props => {

    const mapLayout = (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.9145377527493!2d-0.17075182534466032!3d51.47808298922854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605715a0c9cc7%3A0x48a6d4725e20cda6!2sDraft%20House%20Westbridge!5e0!3m2!1spt-BR!2suk!4v1613866724128!5m2!1spt-BR!2suk"
                style={{
                    width: "100%",
                    height: "500",
                    style: "border:0",
                    allowfullscreen: "",
                    loading: "lazy"
                }}>

            </iframe>
        </div>)


    const textLayout = (
        <div className="listText">
            <h2> O mne</h2>
            <p>
                Zakladám si na dlhoročne overených tradíciách, ktoré garantujú kvalitu a jedinečnosť.
                Med je zbieraný v súlade s prírodou, z malej včelej farmy sídliacej v Považskom Inovci od roku 2014
    </p>
        </div>)


    return (
        <div>
            <Card cardLayout={textLayout}/>
            <Card cardLayout={mapLayout} />
        </div>

    )
}