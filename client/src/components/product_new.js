import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createProduct } from "../actions";

class ProductNew extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group row ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label className="col-sm-2 col-form-label">{field.label}:</label>
        <div className="col-sm-8">
          <input className="form-control" type="text" {...field.input} placeholder={field.label}/>
          <div className="text-help">
            {touched ? error : ""}
          </div>
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createProduct(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
         <Field
          label="Product ID"
          name="id"
          component={this.renderField}
        />
         <Field
          label="Company Name"
          name="companyName"
          preValue="Hoggies Estate"
          component={this.renderField}
          />
         <Field
          label="Region"
          name="region"
          preValue="Coonawarra"
          component={this.renderField}
          />
        <Field
          label="Vineyard"
          name="vineyard"
          preValue="Gartner"
          component={this.renderField}
        />
        <Field
          label="Block"
          name="block"
          preValue="4"
          component={this.renderField}
        />
        <Field
          label="Row Range"
          name="rowRange"
          preValue="4-12"
          component={this.renderField}
        />
        <Field
          label="Variety"
          name="variety"
          preValue="Sauvignon Blanc"
          component={this.renderField}
        />
        <Field
          label="Vintage"
          name="vintage"
          preValue="2015"
          component={this.renderField}
        />
        <Field
          label="Date Delivered"
          name="dateDelivered"
          preValue="2017-12-23"
          component={this.renderField}
        />
        <Field
          label="Winery"
          name="vinery"
          preValue="Rymills"
          component={this.renderField}
        />
        <Field
          label="Estimated Weight"
          name="estimatedWeight"
          preValue="35"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.companyName) {
    errors.companyName = "Enter Company Name";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "ProductNewForm"
})(connect(null, { createProduct })(ProductNew));
