import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { Navigate } from 'react-router-dom';
import './style/Dark.scss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from './formSource';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthenticationContext } from './context/AuthenticationContext';
import { productColumn, userColumn } from './datatableSource';

function App() {

  const {darkMode} = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthenticationContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='login' />;
  };

  return (
    <div className={darkMode ?"App dark" : "App"}>
      <BrowserRouter>
    <Routes>
      <Route path="/">
      <Route path='login' element={<Login/>}/>
        <Route index element={<RequireAuth><Home/></RequireAuth>} />
        <Route path='/users'>
          <Route index element={<RequireAuth><List source={userColumn} title="Add New User" collect="user"/></RequireAuth>}/>
          <Route path=':userId'element={<RequireAuth><Single/></RequireAuth>}/>
          <Route path='new' element={<RequireAuth><New collect="user"inputs ={userInputs} title="Add New User"/></RequireAuth>}/>
        </Route>
        <Route path='/products'>
          <Route index element={<RequireAuth><List title="Add New Product" source={productColumn} collect="product"/></RequireAuth>}/>
          <Route path=':productId'element={<RequireAuth><Single/></RequireAuth>}/>
          <Route path='new' element={<RequireAuth><New collect="product" inputs={productInputs} title="Add New Product"/></RequireAuth>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
