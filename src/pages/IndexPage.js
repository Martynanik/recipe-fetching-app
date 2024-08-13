import React, {useEffect, useState} from "react";
import RecipeStore from "../store/RecipeStore";
import RecipeHttp from "../plugins/RecipeHttp";
import { useParams } from 'react-router-dom';
import SingleRecipe from "../components/SingleRecipe";


const IndexPage = () =>{
    const { pageNumber } = useParams(); // Get pageNumber from URL params
    const {recipesObject, setRecipes} = RecipeStore()


    useEffect(() => {
        // Default to pageNumber if it's truthy, otherwise default to 1
        const page = pageNumber ? pageNumber : 1;

        RecipeHttp.get(`?limit=10&skip=10`)
            .then(res => {
                console.log(res);
                setRecipes(res.recipes);
            });
    }, [pageNumber]);

    return(
        <div className="d-flex flex-wrap gap-3 mb-5 m-2 justify-content-center">

            {recipesObject.map((x, i) => <SingleRecipe key={i} recipe={x}/>)}
        </div>
    )
}

export default IndexPage
