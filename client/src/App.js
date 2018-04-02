import React, { Component } from 'react';
import { Provider } from "react-redux";
import { Link } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import ProductIndex from "./components/product_index";
import ProductNew from "./components/product_new";
import VineryUpdate from "./components/vinery_update";
import BottlerUpdate from "./components/bottler_update";
import Transactions from "./components/transactions";

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
                    <div className="col-xs-6 col-sm-2 sidebar-offcanvas bg-light" id="sidebar" role="navigation">
                        <div className="sidebar-nav">
                            <ul className="nav">
                                <li className="active"><Link to="/">Grower</Link></li>
                                <li><Link to="/">Vinery</Link></li>
                                <li><Link to="/">Bottler</Link></li>
                                <li className="nav-divider"></li>
                                <li><Link to="/transactions">Transaction</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-10" id="main-content">
                        <Switch>
                          <Route path="/product/new" component={ProductNew} />
                          <Route path="/product/vinery/:key" component={VineryUpdate} />
                          <Route path="/product/bottler/:key" component={BottlerUpdate} />
                          <Route path="/transactions" component={Transactions} />
                          <Route path="/" component={ProductIndex} />
                        </Switch>
                    </div>
                </div>
                <hr/>
                <footer>
                    <p>© Company 2018</p>
                </footer>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
