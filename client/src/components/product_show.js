import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProduct, deleteProduct } from "../actions";

class ProductShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchProduct(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deleteProduct(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { product } = this.props;

    if (!product) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Product
        </button>
        <h3>{product.title}</h3>
        <h6>Categories: {product.categories}</h6>
        <p>{product.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ products }, ownProps) {
  return { product: products[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchProduct, deleteProduct })(ProductShow);
