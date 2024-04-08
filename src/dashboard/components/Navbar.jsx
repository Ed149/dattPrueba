import React from 'react'
import { BiSearch } from "react-icons/bi";
import { WeatherLogo } from '../../components/WeatherLogo';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const Navbar = ({ search, isOpen, handleSearch, handleIsOpen }) => {
    console.log("Navbar", search);
    console.log("Is open", isOpen)
    return (
        <header>
            <div className="navbar">
                {isOpen ? (<AiOutlineClose onClick={handleIsOpen} />) : (<AiOutlineMenu onClick={handleIsOpen} />)}
                <WeatherLogo />
                {search ? <AiOutlineClose onClick={handleSearch} /> : <BiSearch onClick={handleSearch} />}
                {/* <nav className='navbar'>
            </nav> */}

            </div>

            <nav>

                <ul className={`navigation ${isOpen ? "open" : ""}`}>

                    <div className="close " onClick={handleIsOpen}>
                        <AiOutlineClose />
                    </div>
                    <li>
                        <Link>Inicio</Link>
                    </li>
                    <li>
                        <Link>Segundo</Link>
                    </li>
                    <li>
                        <Link>Cerrar Sesión</Link>
                    </li>
                </ul>
            </nav>



        </header>
    )
}
