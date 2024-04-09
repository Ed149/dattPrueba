import React from 'react'
import { BiSearch } from "react-icons/bi";
import { WeatherLogo } from '../../components/WeatherLogo';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const Navbar = ({ search, isOpen, handleSearch, handleIsOpen }) => {
    let user = JSON.parse(localStorage.getItem('actualUser'));

    console.log("User email", user.email)

    console.log("Navbar", search);
    console.log("Is open", isOpen);
    const handleLogOut = () => {
        localStorage.removeItem('actualUser');
    }
    return (
        <header>
            <div className="navbar d-flex jc-space-btw ai-center">
                {isOpen ? (<AiOutlineClose onClick={handleIsOpen} className='icon'/>) : (<AiOutlineMenu onClick={handleIsOpen} className='icon'/>)}
                <WeatherLogo />
                {search ? <AiOutlineClose onClick={handleSearch} /> : <BiSearch onClick={handleSearch} className='icon'/>}
            </div>
            <nav>


                <ul className={`navigation ${isOpen ? "open" : ""}`}>

                    <div className="close " onClick={handleIsOpen}>
                        <AiOutlineClose />
                    </div>

                    <div className="profile center d-flex ai-center flex-dir-col">
                        <div className='profile__picture'></div>
                        <p>{`${user.nombre} ${user.apellido}`}</p>
                        <p>{`${user.email}`}</p>

                    </div>
                    <li>
                        <Link to='/dashboard'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/auth/' onClick={handleLogOut}>Cerrar Sesión</Link>
                    </li>
                </ul>
            </nav>



        </header>
    )
}
