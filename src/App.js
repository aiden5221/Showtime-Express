
import { useSelector } from 'react-redux';
import './App.css';
import PaginationComponent from './components/pagination/pagination';
import Placeholder from './components/placeholder/placeholder';
import SearchedMovies from './components/searchedMovies/searchedMovies';
import SearchField from './components/searchField/searchField';
import SelectedMovies from './components/selectedMovies/selectedMovies';
import { selectIsLoading, selectShowNominated } from './store/movies/movies.selector';
const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const showNominated = useSelector(selectShowNominated);
  return(
    <div className='main'>
      <SearchField />
      {
        showNominated ? <SelectedMovies /> : null
      }
      {
        isLoading ? <Placeholder isLoading={true}/> : <SearchedMovies/>
      }
      
      <PaginationComponent />
    </div>
  );
}

export default App;
