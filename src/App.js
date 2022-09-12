import './App.css';
import SearchedMovies from './components/searchedMovies/searchedMovies';
import SearchField from './components/searchField/searchField';
const App = () => {
  
  return(
    <div>
      <SearchField />
      <SearchedMovies/>
    </div>
  );
}

export default App;
