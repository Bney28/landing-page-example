import React from "react";
import Logo from "../Imgs/logo.svg"

const NavBar = () => {

    const showNav = () => {
        const menuBurguer = document.querySelector(".menu-burguer")
        const navBar = document.querySelector(".navBar")

        menuBurguer.addEventListener('click', ()=>{
            navBar.classList.toggle('open')
            menuBurguer.classList.toggle('close')
        })
    }

    return (
        <>
            <header className="header">

                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>

                <nav className="navBar">
                        <div className="logo-nav">
                            <img src={Logo} alt="logo" />
                        </div>
                    <ul>
                        <li><button>About</button></li>
                        <li><button>Careers</button></li>
                        <li><button>Events</button></li>
                        <li><button>Products</button></li>
                        <li><button>Support</button></li>
                    </ul>
                </nav>

                <div className="menu-burguer" onClick={()=>showNav()}>
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                    <div className="bar bar-3"></div>
                </div>

            </header>

        </>
    )
}

export default NavBar