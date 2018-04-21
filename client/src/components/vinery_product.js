import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../actions";

class Vinery extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }


  renderProducts() {
    return _.map(this.props.products, product => {
      return (
            <tr key={product.Key}>
              <th scope="row"><Link to={`/product/vinery/${product.Key}`}>{product.Key}</Link></th>
              <td>{product.Record.companyName}</td>
              <td>{product.Record.variety}</td>
              <td>{product.Record.vintage}</td>
              <td>{product.Record.dateDelivered}</td>
              <td>{product.Record.estimatedWeight}</td>
              <td>{product.Record.actualWeight}</td>
              <td>{product.Record.volume}</td>
              <td>{product.Record.bottlingCompany}</td>
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
        <h3>Products (Winery View)</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Company Name</th>
              <th scope="col">Variety</th>
              <th scope="col">Vintage</th>
              <th scope="col">Date Delivered</th>
              <th scope="col">Estimated Weight</th>
              <th scope="col">Actual Weight</th>
              <th scope="col">Volume</th>
              <th scope="col">Bottling Company</th>
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

export default connect(mapStateToProps, { fetchProducts })(Vinery);
