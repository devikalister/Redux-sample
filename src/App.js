import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={["/", "/products"]} component={ProductList}/>
          <Route exact path={"/products/:id"} component={ProductDetail}/>
          <Route path="*" >
          <Redirect to="/products" />
            </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
