import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { vineryUpdate } from "../actions";

class VineryUpdate extends Component {

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
    const { key } = this.props.match.params;
    console.log(key);
    this.props.vineryUpdate(key, values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
         <Field
          label="Actual Weight"
          name="actualWeight"
          component={this.renderField}
          />
         <Field
          label="Volume"
          name="volume"
          component={this.renderField}
          />
        <Field
          label="Bottling Company"
          name="bottlingCompany"
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
  form: "VineryUpdateForm"
})(connect(null, { vineryUpdate })(VineryUpdate));
