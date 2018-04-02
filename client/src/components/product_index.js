import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../actions";

class ProductIndex extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts() {

    return _.map(this.props.products, product => {
      return (
            <tr key={product.Key}>
              <th scope="row">{product.Key}</th>
              <td>{product.Record.region}</td>
              <td>{product.Record.Variety}</td>
              <td>{product.Record.vintage}</td>
              <td>{product.Record.vinery}</td>
            </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/product/new">
            Add a Product
          </Link>
        </div>
        <h3>Products</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Region</th>
              <th scope="col">Variety</th>
              <th scope="col">Vintage</th>
              <th scope="col">Vinery</th>
            </tr>
          </thead>
          <tbody>
           { this.renderProducts() }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps, { fetchProducts })(ProductIndex);
