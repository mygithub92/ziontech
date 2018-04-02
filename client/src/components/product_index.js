import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserRole } from "../actions";
import Grower from "./grower_product";
import Vinery from "./vinery_product";
import Bottler from "./bottler_product";
import Seller from "./seller_product";


const ROLES = {grower: 'grower', vinery: 'vinery', bottler: 'bottler', seller: 'seller'}

class ProductIndex extends Component {
  componentDidMount() {
    this.props.fetchUserRole();
  }

  renderComponent(role) {
    console.log(role);
    if(role === ROLES.grower){
      return <Grower/>; 
    }
    if(role === ROLES.vinery){
      return <Vinery/>; 
    }
    if(role === ROLES.bottler){
      return <Bottler/>; 
    }
    if(role === ROLES.seller){
      return <Seller/>; 
    }
    return <Grower/>; 
  }

  render() {
    return (
      this.renderComponent(this.props.role)
    );
  }
}

function mapStateToProps(state) {
  console.log(state.role);
  return { role: state.role };
}

export default connect(mapStateToProps, { fetchUserRole })(ProductIndex);
