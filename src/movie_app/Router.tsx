import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import CurrentlyAiring from './Pages/CurrentlyAiring';
import Upcoming from './Pages/Upcoming';

const MovieAppRouter = () => {
    return (
        <Routes >
            <Route index element={<Home />} />
            <Route path="upcoming" element={<Upcoming />} />
            <Route path="currently-airing" element={<CurrentlyAiring />} />
            <Route path="movie/:id/detail" element={<Detail />} />
        </Routes>
    );
}
  
  export default MovieAppRouter;