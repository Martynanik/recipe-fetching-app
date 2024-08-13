import React from 'react';
import {useNavigate} from "react-router-dom";


const SingleRecipe = ({recipe}) => {

    const nav = useNavigate()


    return (
        <div className="recipe-box d-flex flex-column p-2 justify-content-center align-items-center "
             onClick={() => nav("/recipe/" + recipe.id)}>
            <img className="size2" src={recipe.image} alt=""/>
            <div className="p-2 fw-bold">{recipe.name}</div>

        </div>
    );
};

export default SingleRecipe;