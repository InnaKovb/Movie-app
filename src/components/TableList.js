import EmptyMessage from "./EmptyMessage";
import Header from "./Header/Header";
import { useState ,  useEffect} from 'react';
import Loader from "./Loader/Loader";
import MovieCard from "./MovieCard/MovieCard"
import Pagination from "./Pagination/Pagination";
import { requestMoviesList } from "../store/movies/actions";
 import { useSelector, useDispatch } from 'react-redux';
 import "./TableList.scss";


function TableList () {
    const dispatch = useDispatch();
    const moviesData = useSelector((state) => state.moviesStore.moviesData);
    const totalMoviesPages = useSelector((state) => state.moviesStore.totalMoviesPages);
    const  isLoading = useSelector((state) => state.moviesStore.loading);

    console.log(moviesData);
    console.log(totalMoviesPages);
    useEffect (() => {
            dispatch(requestMoviesList())
            
        }, [] )

    const moviesPageChange = (page) => { 
            const selectedPage  = page.selected + 1;
            dispatch(requestMoviesList(selectedPage))
            console.log(page,  "test") 
       
    }


    return (
        <>          
            {moviesData.lenght > 0 ? (
            <Loader isLoading={isLoading} loaderColor='orange'/>,
            <EmptyMessage/>) 
            : (
                <>  
                    <Header/>
                    <div className="wrapper">
                        <div className="wrapper-overlay">
                            <h2 className='title'>Popular Movies:</h2>
                            <Loader isLoading={isLoading} loaderColor='orange'/>
                            <div>
                                <div className='movieCardInner'>
                                    {moviesData.map(movie => 
                                    <MovieCard key={movie.id} {...movie}/>)
                                    }
                                </div>  
                                <Pagination totalPages={500} handlePageChange={(data)=> moviesPageChange(data)}/>    
                            </div>
                                    
                        </div> 
                    </div>
                </>
            )}      
        </>

    )
}

export default TableList;