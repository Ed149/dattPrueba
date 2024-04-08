import React from 'react'
import { BiSearch } from "react-icons/bi";
import { WeatherLogo } from '../../components/WeatherLogo';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = ({search,handleSearch}) => {
    console.log("Navbar",search)
    return (
        <header>
            <nav className='navbar'>
                <AiOutlineMenu />
                <WeatherLogo />
                { search ? <AiOutlineClose onClick={handleSearch}/> : <BiSearch onClick={handleSearch}/>}
            </nav>
        </header>
    )
}
