import logo from '../images/film.png';
import loupe from '../images/search.png';
import menu from '../images/menu.png'
import './HeaderMain.scss';
import  { BsSearch } from 'react-icons/bs';



function HeaderMain() {
    return (
            <header>
                {/* <div className="header__wrapper"> */}
                    <div  className='header-container'>
                        <div className='header-main__content'>
                            <div className='header-main__content-left'>
                                <a className='company' href='#'>
                                    <img className='company__logo' src={logo} alt='camera roll'/>
                                    <h1 className='company__name '>Filmsgig</h1>
                                </a>
                                {/* <a className='header__popular-btn' href='#'>Popular</a> */}
                            </div>
                            <nav className='header-main__content-right'>
                                <div className='navmenu'>
                                    <div className='navmenu__items'>
                                        <a className='navmenu__item navmenu__item--decor' href='#'>Movies</a>
                                        <a className='navmenu__item' href='#'>Serials</a>
                                        <a className='navmenu__item' href='#'>Sports</a>
                                        <a className='navmenu__item' href='#'>Kids</a>
                                        <a className='navmenu__item' href='#'>Popular</a>
                                    </div>
                                    <form className='navmenu__search'>
                                        <div className='navmenu__search-loupe'>
                                            <BsSearch size="23px" color="orange"/>
                                        </div>
                                        <input className='navmenu__search-inpt' type='text'  placeholder='Find Movies & TV'
                                        // onChange={(e)=>{setSearch(e.target.value)}} value={search} onKeyPress={searchMovie}
                                        >
                                        </input>
                                        
                                        
                                    </form>
                                    <a className='navmenu__more' href='#'>
                                            <img src={menu}/>
                                    </a>
                                </div>
                            </nav>
                        </div> 
                    </div>
                {/* </div> */}
            </header>
    )
}

export default HeaderMain;