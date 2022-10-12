import './MovieCard.scss';


const API_IMG = 'https://image.tmdb.org/t/p/w500/'

export default function MovieCard({title, poster_path, vote_average, release_date, overview}) {
    const poster  = {
        backgroundImage: `url(${API_IMG + poster_path})`
    }
    return (
        <div  className="card">
            <div className="card__front">
                <img className="card__img" src={API_IMG + poster_path}/>
            </div>
            <div className="card__back">
                <div className="card__back-img" style={poster} >
                    <div className="card__content" >
                        {/* <img className="card__img" src={API_IMG + poster_path} /> */}
                            <h1 className="card__title">{title}</h1>
                        <h2 className="card__release">Release date: {release_date}</h2>
                        <h3 className="card__rate">IMDb: {vote_average}</h3>
                        <p className="card__overview">SUMMARY: {overview}</p>  
                    </div>       
                    
                </div>
            </div>
        </div>
    )
}