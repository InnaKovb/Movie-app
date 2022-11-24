import './MovieCard.scss';


const API_IMG = 'https://image.tmdb.org/t/p/w500/'

export default function MovieCard({title, poster_path, backdrop_path, vote_average, release_date, overview}) {
    const poster  = {
        backgroundImage: `url(${API_IMG + poster_path})`
    }

    const backdrop = {
        backgroundImage: `url(${API_IMG + backdrop_path})`
    }

    return (
        <div  className="card">
            <div className="card__front">
                <img className="card__img" src={API_IMG + poster_path}/>
            </div>
            <div className="card__back">
                <div className="card__back-img" style={poster} >
                    <div className="card__content" >
                            <h1 className="card__title">{title}</h1>
                        <div className="card__rate">
                            <span className='card__rate--title'>IMDb: </span>
                            <span  className='card__rate--vote'>{vote_average}</span>
                        </div>
                        {/* <h3 className="card__release">Release Date: {release_date}</h3> */}
                        <div className='card__overview-decor'>
                            <p className="card__overview">{overview}</p>  
                        </div>
                        <div className='card__btns'>
                            <a className="card__btn-first" >Watch Now</a>
                            <a className="card__btn-second">Add to Watchlist</a>
                        </div>       
                    </div>
                </div>
            </div>
        </div>
    )
}