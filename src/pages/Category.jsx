import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {getFilteredCategory} from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

function Category (props) {
    const {name} = useParams();
    const navigate = useNavigate()
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    }, [name]);

    return(
        <>
            <button className="btn" onClick={()=>{navigate(-1)}}>Go back</button>
            {
                !meals.length ? <Preloader/> : <MealList meals={meals}/>
            }
        </>
    )
}
export default Category;