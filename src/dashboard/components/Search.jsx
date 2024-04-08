import { useState } from "react"

export const Search = ({handleInputChange,handleOnSubmit}) => {

    return (
        <form onSubmit={handleOnSubmit} className="content search__container">
            <input type="text" placeholder="Ingresa una ubicación" onChange={handleInputChange} className="search"/>
        </form>
    )
}
