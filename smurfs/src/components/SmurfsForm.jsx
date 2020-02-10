import React from "react";
import { connect } from "react-redux";
import { handleSmurfsFormChange, handleSmurfsFormSubmit } from "../actions/action";
import { Button, Form, Segment } from 'semantic-ui-react'

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
    <div className="form__container">

      <Segment >
        <Form onSubmit={handleSubmit} >
          <h3>Add your smurf</h3>
          <Form.Group widths='equal'>
            <Form.Input fluid type="text" name="name" value={props.input.name} placeholder="Smurf name" onChange={handleChange} />
            <Form.Input fluid type="number" name="age" value={props.input.age} placeholder="Smurf age" onChange={handleChange} />
            <Form.Input fluid type="text" name="height" value={props.input.height} placeholder="Smurf height" onChange={handleChange} />
            <Button icon="add" />
          </Form.Group >
        </Form>
      </Segment>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    input: state.smurfsFormInput
  }
}

export default connect(mapStateToProps, { handleSmurfsFormChange, handleSmurfsFormSubmit })(SmurfsForm);