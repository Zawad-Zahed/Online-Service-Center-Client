import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";

import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivatRoute/PrivateRoute";

import Orders from "./Components/Orders/Orders";
import AddService from "./Components/AddService/AddService";
import ManageService from "./Components/ManageService/ManageService";
import OrderList from "./Components/OrderList/OrderList";
import AddReview from "./Components/AddReview/AddReview";
import Admin from "./Components/Admin/Admin/Admin";
import AddAdmin from "./Components/Admin/AddAdmin/AddAdmin";
import AllOrder from "./Components/Admin/AllOrder/AllOrder";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/manageService">
              <ManageService></ManageService>
            </Route>
            <Route path="/order">
              <Orders></Orders>
            </Route>
            <Route path="/allOrder">
              <AllOrder></AllOrder>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/orderList">
              <OrderList></OrderList>
            </Route>
            <Route path="/addReview">
              <AddReview></AddReview>
            </Route>
            <Route path="/addAdmin">
              <AddAdmin></AddAdmin>
            </Route>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/service/:_id">
              <Orders></Orders>
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
