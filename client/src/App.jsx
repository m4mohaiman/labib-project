import Homepage from "./pages/Home/Homepage";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";

import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  const user = true;
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/login">
          { user ? <Redirect to="/"/> : <Login/> }
        </Route>
        <Route path="/register">
          { user ? <Redirect to="/"/> : <Registration/> }
        </Route>
      </Switch>
    </Router>
  )
};

export default App;