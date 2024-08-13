import React, {useState} from "react";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";



const SearchBar = () =>{
    const nav=useNavigate()
    const ref = useRef()
    return(

            <form className="d-flex search-bar gap-1">
                <input ref={ref} className=" mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button onClick={() => nav(`/search/${ref.current.value}`)} className="btn btn-outline-secondary my-2 my-sm-0"
                        type="submit">Search
                </button>
            </form>

    )
}

export default SearchBar