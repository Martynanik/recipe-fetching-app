import React, {useState} from "react";
import SearchBar from "./SearchBar";
import {useNavigate} from "react-router-dom";



const Logo = () =>{
    const nav = useNavigate()
    return(
        <div className="d-flex justify-content-between align-items-center m-1">
            <img onClick={()=>nav('/')} src="https://eyummykitchen.com/wp-content/uploads/2020/12/logo-black.png" className="logo" alt=""/>
            <SearchBar></SearchBar>

        </div>
    )
}

export default Logo