import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from "react-redux";
import { createProduct } from "../actions";

class ProductNew extends Component {
  state = {
    selectedOption: '',
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group row ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label className="col-sm-2 col-form-label">{field.label}:</label>
        <div class="col-sm-8">
          <input className="form-control" type="text" {...field.input} placeholder={field.label}/>
          <div className="text-help">
            {touched ? error : ""}
          </div>
        </div>
      </div>
    );
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }


  onSubmit(values) {
    this.props.createProduct(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { selectedOption } = this.state;
  	const value = selectedOption && selectedOption.value;

    const { handleSubmit } = this.props;
    const companies = [{value:'Hoggies Estate',label:'Hoggies Estate'}, {value: 'Hoggies Estate', label:'Hoggies Estate'}];
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
         <Field
          label="Company Name"
          name="companyName"
          component={this.renderField}
        />
         <Field
          label="Region"
          name="region"
          component={this.renderField}
        />
        <Field
          label="Vineyard"
          name="vineyard"
          component={this.renderField}
        />
        <Field
          label="Block"
          name="block"
          component={this.renderField}
        />
        <Field
          label="Row Range"
          name="rowRange"
          component={this.renderField}
        />
        <Field
          label="Vintage"
          name="vintage"
          component={this.renderField}
        />
        <Field
          label="Variety"
          name="variety"
          component={this.renderField}
        />
        <Field
          label="Date Delivered"
          name="dateDelivered"
          component={this.renderField}
        />
        <Field
          label="Estimated Weight"
          name="estimatedWeight"
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
  if (!values.title) {
    errors.title = "Enter a title";
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
