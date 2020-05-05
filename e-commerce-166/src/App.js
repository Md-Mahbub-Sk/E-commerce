import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Review from './Components/Review/Review';
import ProductCategory from './Components/ProductCategory/ProductCategory';
import WatchProduct from './Components/WatchProduct/WatchProduct';
import BraceletProduct from './Components/BraceletProduct/BraceletProduct';
import BodysprayProduct from './Components/BodysprayProduct/BodysprayProduct';
import NotFound from './Components/NotFound/NotFound';
import ProductDetail from './Components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/categories">
            <ProductCategory></ProductCategory>
          </Route>
          <Route path="/watch">
            <WatchProduct></WatchProduct>
          </Route>
          <Route path="/bracelet"> 
            <BraceletProduct></BraceletProduct>
          </Route>
          <Route path="/bodySpray">
            <BodysprayProduct></BodysprayProduct>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
