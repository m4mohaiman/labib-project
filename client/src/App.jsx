
import Home from "./pages/Home/Homepage";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success/Success";
import { useSelector } from "react-redux";
import Product from "./pages/Product/Product";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;