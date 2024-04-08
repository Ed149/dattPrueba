import { useState } from "react"

export const Search = ({handleInputChange,handleOnSubmit}) => {

    return (
        <form onSubmit={handleOnSubmit} className="content">
            <input type="text" placeholder="Ingresa una ubicación" onChange={handleInputChange} className="search"/>
        </form>
    )
}
