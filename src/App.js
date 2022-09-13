
import './App.css';
import PaginationComponent from './components/pagination/pagination';
import SearchedMovies from './components/searchedMovies/searchedMovies';
import SearchField from './components/searchField/searchField';
const App = () => {
  
  return(
    <div>
      <SearchField />
      <SearchedMovies/>
      <PaginationComponent/>
    </div>
  );
}

export default App;
