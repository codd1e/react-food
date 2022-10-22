import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMealById} from "../api";
import Preloader from "../components/Preloader";

function Recipe() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getMealById(id).then(data => {
            setRecipe(data.meals[0]);
        })
    }, [id])

    return(
        <>
            {!recipe.idMeal ? (<Preloader/>) : (
                <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="card-image"/>
                    <h1>{recipe.strMeal}</h1>
                    <h4>Category: {recipe.strCategory}</h4>
                    {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                    <p>{recipe.strInstructions}</p>

                    <table className="highlight">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(recipe).map(key => {
                                        if(key.includes('Ingredient') && recipe[key]) {
                                            return(
                                                <tr key={key}>
                                                    <td>{recipe[key]}</td>
                                                    <td>{
                                                        recipe[`strMeasure${key.slice(13)}`]
                                                    }</td>
                                                </tr>
                                            )
                                        }
                                        return null;
                                    }
                                )
                            }
                        </tbody>
                    </table>

                    {recipe.strYoutube ? (
                        <div>
                            <h5 style={{margin: "2rem 0 1.5rem 0"}}>Video Recipe</h5>
                            <iframe title={recipe.strMeal} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen/>
                        </div>
                    ) : null}
                </div>
            )}
            <button className="btn" onClick={() => {navigate(-1)}}>Go back</button>
        </>
    )
}

export default Recipe;