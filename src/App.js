import { useNavigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import TableList from './components/TableList';
import MovieInfo from './components/MovieInfo/MovieInfo';

function App() {
 

  return (
    <>
    
    <Routes>
      <Route path="/" element={<TableList/>}/>
      <Route path="/movie/detail/:id" element={<MovieInfo/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
