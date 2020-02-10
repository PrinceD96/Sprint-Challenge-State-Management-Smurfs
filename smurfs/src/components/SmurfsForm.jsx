import React from "react";
import { connect } from "react-redux";
import { handleSmurfsFormChange, handleSmurfsFormSubmit } from "../actions/action";

const SmurfsForm = props => {
  const handleChange = e => {
    props.handleSmurfsFormChange({ ...props.input, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.handleSmurfsFormSubmit(props.input)
    // console.log("input", props.input)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={props.input.name} placeholder="Smurf name" onChange={handleChange} />
        <input type="number" name="age" value={props.input.age} placeholder="Smurf age" onChange={handleChange} />
        <input type="text" name="height" value={props.input.height} placeholder="Smurf height" onChange={handleChange} />
        <button>Submit Smurf</button>
      </form>
    </>
  )
}

const mapStateToProps = state => {
  return {
    input: state.smurfsFormInput
  }
}

export default connect(mapStateToProps, { handleSmurfsFormChange, handleSmurfsFormSubmit })(SmurfsForm);