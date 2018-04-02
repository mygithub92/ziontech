import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../actions";

class Grower extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    return _.map(this.props.products, product => {
      return (
            <tr key={product.Key}>
              <th scope="row">{product.Key}</th>
              <td>{product.Record.companyName}</td>
              <td>{product.Record.region}</td>
              <td>{product.Record.vineyard}</td>
              <td>{product.Record.block}</td>
              <td>{product.Record.rowRange}</td>
              <td>{product.Record.variety}</td>
              <td>{product.Record.vintage}</td>
              <td>{product.Record.dateDelivered}</td>
              <td>{product.Record.vinery}</td>
              <td>{product.Record.estimatedWeight}</td>
              <td>{product.Record.actualWeight}</td>
              <td>{product.Record.volume}</td>
              <td>{product.Record.bottlingCompany}</td>
              <td>{product.Record.brand}</td>
              <td>{product.Record.label}</td>
              <td>{product.Record.corkCap}</td>
              <td>{product.Record.seller}</td>
              <td>{product.Record.status}</td>
            </tr>
      );
    });
  }

  render() {
    const { products } = this.props;
    if (!products) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Products</h3>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Company Name</th>
                <th scope="col">Region</th>
                <th scope="col">Vineyard</th>
                <th scope="col">Block</th>
                <th scope="col">Row Range</th>
                <th scope="col">Variety</th>
                <th scope="col">Vintage</th>
                <th scope="col">Date Delivered</th>
                <th scope="col">Vinery</th>
                <th scope="col">Estimated Weight</th>
                <th scope="col">Actual Weight</th>
                <th scope="col">Volume</th>
                <th scope="col">Bottling Company</th>
                <th scope="col">Brand</th>
                <th scope="col">Label</th>
                <th scope="col">Cork/Cap</th>
                <th scope="col">Seller</th>
                <th scope="col">Statue</th>
              </tr>
            </thead>
            <tbody>
            { this.renderProducts() }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps, { fetchProducts })(Grower);
