import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Admin from './component/Admin/Admin';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Login from './component/Login/Login';
import CheckOut from './component/CheckOut/CheckOut';
import AddProduct from './component/AddProduct/AddProduct';
import EditProduct from './component/EditProduct/EditProduct';
import Orders from './component/Orders/Orders';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path='/checkOut/:checkOutId'>
              <CheckOut></CheckOut>
            </PrivateRoute>
            <Route path='/addProduct'>
              <AddProduct></AddProduct>
            </Route>
            <Route path='/editProduct'>
              <EditProduct></EditProduct>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
