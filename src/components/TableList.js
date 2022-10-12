import EmptyMessage from "./EmptyMessage";
import { useState ,  useEffect} from 'react';
import Loader from "./Loader/Loader";
import MovieCard from "./MovieCard/MovieCard";



function TableList () {
    const wrapper = {
        overflowX: 'auto',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
        margin: '20px'
    }

    const [movies, setMovies] = useState([]);
    const API_KEY = 'bda7fa433b3a835662d4cd7b68962b54';
    const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    const [loading, setLoading] = useState(false);

    

    useEffect (() => {
        setLoading(true)
        fetch(apiURL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMovies(data.results);
            setLoading(false);
        })
    }, [] )

    return (
        <>          
            <EmptyMessage/>
            <Loader isLoading={loading} loaderColor='orange'/>
            <h2>Popular movies:</h2>
            {/* {if (movies.length } */}
            {/* <ul>
                {movies.map(movie => (<li key={movie.id}>{movie.original_title}</li>))}
            </ul> */}
            <div  style={wrapper}>
                {movies.map(movie => 
            <MovieCard key={movie.id} {...movie}/>)}
            </div>
            
        </>

    )
}

export default TableList;