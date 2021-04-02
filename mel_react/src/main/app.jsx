import React from 'react'
import './App.css'
import Menu from '../template/Menu'
import Footer from '../template/Footer'
import backgroundImg from '../img/body.png'
import Routes from './routes'


export default props => {

    function importAll(r) {
        
        return r.keys().map(r)
      }
      
    const images = importAll(require.context('../img/socialMedia', false, /\.(png|jpe?g|svg)$/))
    const backgroundConfig = {
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }


    return (
        <div style={backgroundConfig}>
            <Menu />
            <Routes/>
            <Footer socialMedias_img={images}/>
        </div>
    )
}