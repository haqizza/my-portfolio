import Navbar from './Layouts/Navbar';
import MovieAppRouter from './Router';
const MovieApp = () => {
  return (
    <div className="bg-gray-800 text-white">
      <Navbar />
      <div className="py-16"></div>
      <MovieAppRouter />
    </div>
  );
}

export default MovieApp;
