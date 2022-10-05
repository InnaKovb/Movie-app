
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import TableList from './components/TableList';

function App() {
  return (
    <>
      <Header/>
      {/* <Loader isLoading="true" loaderColor='orange'/> */}
      <TableList/>
      <Footer/>
    </>
  );
}

export default App;
