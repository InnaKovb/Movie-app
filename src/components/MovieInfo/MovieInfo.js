import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { requestMovie } from "../../store/movies/actions";
import { useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import EmptyMessage from "../EmptyMessage";
import HeaderMain from "../Header/HeaderMain";
import './MovieInfo.scss';




function MovieInfo() {
    let img_path="https://image.tmdb.org/t/p/w500";
    

    const dispatch = useDispatch();
    const currentMovie = useSelector((state) => state.moviesStore.currentMovie);
    const  isLoading = useSelector((state) => state.moviesStore.loading);

    const params = useParams();
    const currentID = params.id;
    console.log(currentID)
    console.log(currentMovie)
    console.log(currentMovie.release_date.split("-").shift())
    const backdrop  = {
            backgroundImage: `url(${img_path+ currentMovie.backdrop_path})`
        }
   


    const navigate = useNavigate();
    const handleClick = () => {
        // 👇️ replace set to true
        navigate('/', {replace: true});
      };

    useEffect (() => {
            dispatch(requestMovie(currentID))
            
        }, [] )
    return(
        <>
            
            
            <div>
                <HeaderMain/>
                <button onClick={handleClick} className="btn_go-back">Go Back</button>
            </div> 
            <div className="movie-card__wrapper" style={backdrop}>
                <div className="movie_card" id="bright">
                    <button onClick={handleClick} className="btn_go-back">Go Back</button>
                    <div className="info_section">
                        <div className="movie_header">
                            <img className="locandina" src={img_path+currentMovie.poster_path}/>
                            <h1>{currentMovie.title}</h1>
                            <h4>{currentMovie.release_date.split("-").shift()}</h4>
                            <span className="minutes">{currentMovie.runtime} min</span>
                            <p className="type">{currentMovie.genres.map((gen)=> gen.name).join(', ')}</p>
                        </div>
                        <div className="movie_desc">
                            <p className="text">
                                {currentMovie.overview}
                            </p>
                        </div>
                        <div className='movie__btns'>
                            <a className="movie__btn-first">Watch Now</a>
                            <a className="movie__btn-second">Add to Watchlist</a>
                        </div>  
                        <div className="movie_social">
                            <ul>
                                <li><div className="material-icons">share</div></li>
                                <li><div className="material-icons"></div></li>
                                <li><div className="material-icons">chat</div></li>
                            </ul>
                        </div>
                    </div>
                    <div className="blur_back bright_back" style={backdrop}></div>
                </div>
            </div>
            

               
        </>
    )
}
export default MovieInfo;