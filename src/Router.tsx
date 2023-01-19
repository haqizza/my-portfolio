import { Routes, Route } from 'react-router-dom';
import MovieApp from './movie_app';
import MainApp from './main/Pages/main';
import Home from './movie_app/Pages/Home';
import Upcoming from './movie_app/Pages/Upcoming';
import CurrentlyAiring from './movie_app/Pages/CurrentlyAiring';
import Detail from './movie_app/Pages/Detail';
import Profile from './profile';

const RootRouter = () => {
    return (
        <Routes>
            <Route index element={ <MainApp /> } />
            <Route path="movie-app/*" element={ <MovieApp  />}>
                <Route index element={ <Home /> } />
                <Route path="upcoming" element={ <Upcoming /> } />
                <Route path="currently-airing" element={ <CurrentlyAiring /> } />
                <Route path="movie/:id/detail" element={ <Detail /> } />
            </Route>
            <Route path="profile" element={ <Profile/> } />
            <Route path="*" element={
                <div>Not Found 404</div>}
            />
        </Routes>
    );
}
  
  export default RootRouter;