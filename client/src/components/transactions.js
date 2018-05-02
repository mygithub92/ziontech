import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../actions";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

class Grower extends Component {

  state = {
    open: false,
    imgUrl: ''
  };

  handleOpen = (key) => {
    const t = {open: true, imgUrl: `/qr/qr${key}.png`};
    console.log(t)
    this.setState(t);
  };

  handleClose = () => {
    this.setState({open: false});
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    return _.map(this.props.products, product => {
      return (
            <tr key={product.Key}>
              <th scope="row"><RaisedButton label={product.Key} onClick={() => this.handleOpen(product.Key)} /></th>
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

    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onClick={this.handleClose}
      />
    ];
    return (
      <div>
        <MuiThemeProvider>
        <Dialog
          autoScrollBodyContent="true"
          title="Please scan."
          style={{width: "500px"}}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.imgUrl}/>
        </Dialog>

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
                <th scope="col">Winery</th>
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
        </MuiThemeProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps, { fetchProducts })(Grower);
