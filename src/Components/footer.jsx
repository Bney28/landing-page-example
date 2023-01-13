import React from "react";
import logo from '../Imgs/logo.svg'
import Facebook from "../Imgs/icon-facebook.svg"
import Twitter from "../Imgs/icon-twitter.svg"
import Pinterest from "../Imgs/icon-pinterest.svg"
import Instagram from "../Imgs/icon-instagram.svg"



const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                
                <ul>
                    <li><button>About</button></li>
                        <li><button>Careers</button></li>
                        <li><button>Events</button></li>
                        <li><button>Products</button></li>
                        <li><button>Support</button></li>
                </ul>
            </div>

    <div>
                <ul className="social">
                    <li> <img src={Facebook} alt="" /></li>
                    <li> <img src={Twitter} alt="" /> </li>
                    <li> <img src={Pinterest} alt="" /></li>
                    <li> <img src={Instagram} alt="" /></li>
                </ul>
                <div className="copyright">&copy; 2021 Loopstudios. All rights reserved.</div>


    </div> 
            
        </footer>

        </>
    )
}

export default Footer