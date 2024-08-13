import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import SingleRecipe from "../components/SingleRecipe";
import RecipeStore from "../store/RecipeStore";
import RecipeHttp from "../plugins/RecipeHttp";




const SearchedRecipePage = () =>{
    const {recipesObject, setRecipes} = RecipeStore()
    const { word } = useParams(); // Get pageNumber from URL params
    const nav= useNavigate()
    useEffect(() => {
        // Default to pageNumber if it's truthy, otherwise default to 1
        RecipeHttp.get(`/search?q=${word}`)
            .then(res => {
                console.log(res);
                setRecipes(res.recipes);
            });
    }, [word]);
    return(
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-wrap justify-content-center gap-3 m-1">
                {recipesObject.map((x, i) => <SingleRecipe key={i} recipe={x}/>)}
            </div>
            <div className="go-back-button" onClick={() => nav(-1)}>Go Back</div>
        </div>
    )
}

export default SearchedRecipePage