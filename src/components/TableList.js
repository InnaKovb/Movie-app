import EmptyMessage from "./EmptyMessage";
import { useState ,  useEffect} from 'react';

function TableList () {
    
    const [movies, setMovies] = useState([]);
    const API_KEY = 'bda7fa433b3a835662d4cd7b68962b54';
    const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    

    useEffect (() => {
        fetch(apiURL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMovies(data.results);
        })
    }, [] )

    return (
        <>          
            <EmptyMessage/>
            <h2>Popular movies:</h2>
            <ul>
                {movies.map(movie => (<li key={movie.id}>{movie.original_title}</li>))}
            </ul>
        </>
        
        

    )
}

export default TableList;