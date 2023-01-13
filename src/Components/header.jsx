import React from "react";
import Logo from "../Imgs/logo.svg"

const NavBar = () => {


    return (
        <>
            <header className="header">

                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>

                <nav className="navBar">
                    <ul>
                        <li><button>About</button></li>
                        <li><button>Careers</button></li>
                        <li><button>Events</button></li>
                        <li><button>Products</button></li>
                        <li><button>Support</button></li>
                    </ul>
                </nav>
            
                <div className="menu-burguer">
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                    <div className="bar bar-3"></div>
                </div>

                <section className="Bg">
                    <div className="border">
                        <h1 className="text">Inmersive experiences that deliver</h1>
                    </div>
                </section>

            </header>

        </>
    )
}

export default NavBar