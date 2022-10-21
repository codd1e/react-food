import {useParams, useNavigate, useLocation} from "react-router-dom";

function Movie () {
    const {id} = useParams();
    const navigate = useNavigate()
    const value2 = useLocation();

    console.log(value2);
    return(
        <>
            <h1>Some {id}</h1>
            <button onClick={() => {navigate(-1)}} className="btn">Go back</button>
        </>
    )
}

export default Movie;