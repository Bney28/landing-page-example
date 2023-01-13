import React from "react";
import Logo from "../Imgs/logo.svg"

const NavBar = () => {


    return (
        <>
            <header className="header">

                <section className="Bg">
                    <div className="Bg__border">
                        <h1>Inmersive experiences that deliver</h1>
                    </div>
                </section>

                <div className="header__logo">
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


            </header>

        </>
    )
}

export default NavBar