import logo from '../images/film.png';
import loupe from '../images/search.png';
import menu from '../images/menu.png'
import './Header.scss';
import { AiFillInstagram } from 'react-icons/ai';

function Header() {
    return (
            <header>
                <div className="header__inner">
                    <div  className='container'>
                        <div className='header__content'>
                            <div className='header__content-left'>
                                <a className='company' href='#'>
                                    <img className='company__logo' src={logo} alt='camera roll'/>
                                    <h1 className='company__name '>Filmsgig</h1>
                                </a>
                                <a className='header__popular-btn' href='#'>Popular</a>
                            </div>
                            <nav className='header__content-right'>
                                <div className='navmenu'>
                                    <div className='navmenu__items'>
                                        <a className='navmenu__item navmenu__item--decor' href='#'>Movies</a>
                                        <a className='navmenu__item' href='#'>Serials</a>
                                        <a className='navmenu__item' href='#'>Sports</a>
                                        <a className='navmenu__item' href='#'>Kids</a>
                                    </div>
                                    <form className='navmenu__search'>
                                    
                                        <input className='navmenu__search-inpt' type='text'  placeholder='Find Movies & TV'
                                        // onChange={(e)=>{setSearch(e.target.value)}} value={search} onKeyPress={searchMovie}
                                        >
                                        </input>
                                        <img className='navmenu__search-loupe' src={loupe}/>
                                        <a className='navmenu__more' href='#'>
                                            <img src={menu}/>
                                        </a>
                                    </form>
                                </div>
                            </nav>
                        </div>
                        <div className='header__suggestion'>
                            <h2 className='header__suggestion-title'>Premiere now</h2>
                            <a className='watch-now-btn' href='#'>Watch now</a>
                        </div>
                        <AiFillInstagram color='red'/>
                    </div>
                </div>
            </header>
    )
}

export default Header;