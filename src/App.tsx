import { NavLink } from 'react-router-dom';
import RootRouter from './Router';

import logo from "./assets/tatsuya.png"
import { useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

const App = () => {

  const [controllerWidth, setControllerWidth] = useState('w-0');


  const showController = () => {
    setControllerWidth(controllerWidth === 'w-0' ? 'w-32' : 'w-0');
  }


  return (
    <>
    <div  className={ "z-50 fixed bottom-0 left-0 bottom-0 duration-300 " + controllerWidth }>
      <div className="absolute right-0 bottom-0 px-4 py-3 bg-gray-200/50 rounded-tr-xl">
        <div className="flex flex-col justify-between items-center">
          <NavLink to="/">
            <img src={ logo } alt="Logo" className="w-16" />
          </NavLink>
          <div className="flex flex-col justify-evenly">
            <NavLink to="profile" className="px-4 py-2 mx-2 hover:bg-gray-400 text-black rounded-lg">
              Profile
            </NavLink>
            <NavLink to="movie-app/" className="px-4 py-2 mx-2 hover:bg-gray-400 text-black rounded-lg">
              Movie App
            </NavLink>
          </div>
        </div>
      </div>
      <button className="absolute bottom-0 bg-gray-300 p-1 rounded-r-xl" onClick={() => showController()}>
        {
          controllerWidth === 'w-0' ?
          <FaCaretRight className="h-16" />
          :
          <FaCaretLeft className="h-16" />
        }
      </button>
    </div>
      <RootRouter />
    </>
  );
}

export default App;
