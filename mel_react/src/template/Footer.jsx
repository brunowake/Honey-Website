import React from 'react'
import './Footer.css'

export default props => {


    return (
        <footer className="footer">
            <div className=" footerColunmText">
                <ul className="footerColunm clearlist ">
                    <li>1231231231231231</li>
                    <li>12312231231231231233123</li>
                    <li>123123123123123</li>
                </ul>
                <ul className="footerColunm clearlist ">
                    <li>1231231231231231223</li>
                    <li>1231123123123123123</li>
                    <li>1231231312312312312323</li>
                </ul>
            </div>
            <div className="socialMidia">
                <span>
                    <h3>Social Media</h3>
                </span>
                <nav className="socialMidia-Icon">
                    <a href=""><img src={props.socialMedias_img[0]} alt="facebook" /></a>
                    <a href=""><img src={props.socialMedias_img[1]} alt="Instagram" /></a>
                    <a href=""><img src={props.socialMedias_img[2]} alt="Linkedin" /></a>
                    <a href=""><img src={props.socialMedias_img[3]} alt="Twitter" /></a>
                </nav>

            </div>

        </footer>
    )
}