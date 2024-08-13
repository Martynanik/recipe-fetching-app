import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecipeHttp from "../plugins/RecipeHttp";
import SingleRecipe from "../components/SingleRecipe";



const TagRecipePage = () =>{
    const [chosenRecipe, setChosenRecipe] = useState([]); // Initialize as null or {}
    const { tag } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        RecipeHttp.get(`/tag/${tag}`)
            .then(res => {
                setChosenRecipe(res.recipes);
                console.log(chosenRecipe)
            })

    }, []);


    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-wrap gap-3 mb-5 m-2 justify-content-center">
                {chosenRecipe && chosenRecipe.map((x, i) => <SingleRecipe key={i} recipe={x}/>)}

            </div>

            <div className="d-flex justify-content-center mt-2">
                <div className="go-back-button" onClick={() => nav(-1)}>Go Back</div>
            </div>

        </div>
    )
}

export default TagRecipePage