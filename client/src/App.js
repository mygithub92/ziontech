import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import ProductIndex from "./components/product_index";
import ProductNew from "./components/product_new";
import ProductShow from "./components/product_show";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <div>
            <div className="navbar navbar-fixed-top navbar-default" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">ZIONTECH</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container-fluid ">
                <div className="row row-offcanvas row-offcanvas-left">
                    <div className="col-xs-6 col-sm-2 sidebar-offcanvas" id="sidebar" role="navigation">
                        <div className="sidebar-nav">
                            <ul className="nav">
                                <li className="active"><a href="#">Grower</a></li>
                                <li><a href="#">Vinery</a></li>
                                <li><a href="#">Bottling</a></li>
                                <li><a href="#">Seller</a></li>
                                <li><a href="#">Buyer</a></li>
                                <li className="nav-divider"></li>
                                <li><a href="#">Transaction</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-10" id="main-content">
                        <Switch>
                          <Route path="/product/new" component={ProductNew} />
                          <Route path="/product/:id" component={ProductShow} />
                          <Route path="/" component={ProductIndex} />
                        </Switch>
                    </div>
                </div>
                <hr/>
                <footer>
                    <p>© Company 2013</p>
                </footer>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
