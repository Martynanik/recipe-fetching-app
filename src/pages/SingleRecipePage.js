import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecipeHttp from "../plugins/RecipeHttp";
import SingleRecipe from "../components/SingleRecipe";
const SingleRecipePage = () =>{
    const [chosenRecipe, setChosenRecipe] = useState([]); // Initialize as null or {}

    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        RecipeHttp.get(`/`+id)
            .then(res => {
                setChosenRecipe(res);
                console.log(chosenRecipe)
            })
            .catch(error => {
                console.error("Error fetching recipe:", error);
            });
    }, [id]);



    return(
        <div className="d-flex justify-content-center">
            {chosenRecipe &&
                <div className="d-flex flex-column align-items-center justify-content-center" >
                    <SingleRecipe recipe={chosenRecipe}/>
                    <div className="d-flex justify-content-center gap-2 m-3">
                        {chosenRecipe.tags && chosenRecipe.tags.map((tag, index) => (
                            <div onClick={()=>nav(`/tag/${tag}`)} className="border p-1" key={index}>{tag}</div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <div className="go-back-button" onClick={() => nav(-1)}>Go Back</div>

                    </div>
                </div>
            }


        </div>
    )
}

export default SingleRecipePage