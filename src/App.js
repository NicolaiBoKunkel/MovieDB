import { Routes, Route, Link } from 'react-router-dom';

import UpcomingMovies from './components/upcomingMoviesList';

import PopularMoviesList from './components/popularMoviesList';
import HighestRatedMovieList from './components/highestRatedMoviesList';
import MovieImg from './assets/Image/movie_black2.jpg';
import Home from './components/home';

function App() {
    return (
      <div>


        <div className="jumbotron pb-3 pt-3">
        <div className="navbar navbar-expand-lg">
          <nav className="nav navbar-nav">    
            <Link to='/' className="nav-item nav-link">Home</Link>
            <Link to='/popular' className="nav-item nav-link">Popular</Link>
            <Link to='/highest-rated' className="nav-item nav-link">Highest Rated</Link>
            <Link to='/upcoming' className="nav-item nav-link">Upcoming</Link>

          </nav>
        </div>
          <span className='h1'>React Moviefinder <img className="rounded movie_img m-3" src={MovieImg} width="75" height="75"/></span>
      <span className="d-flex justify-content-between p-0">This small App demonstrates React, Redux-Toolkit, RTK Query and React-Router</span>
        </div>
        <Routes>
            <Route path='/' element={<Home/>} />  
            <Route path='/popular' element={<PopularMoviesList/>} />    
            <Route path='/highest-rated' element={<HighestRatedMovieList/>} />
            <Route path='/upcoming' element={<UpcomingMovies/>} />
        </Routes>


      </div>
    );
  }
  export default App;