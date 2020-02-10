import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { deleteSmurf } from "../actions/action";
import { connect } from "react-redux";

const Smurf = props => {

  const handleDeleteSmurf = e => {
    e.preventDefault();
    props.deleteSmurf(props.id);
    console.log(`Smurf with id ${props.id} deleted`)
  }

  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>Age: {props.age} years</Card.Meta>
        <Card.Description>Height: {props.height}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Edit
          </Button>
          <Button basic color='red' onClick={handleDeleteSmurf}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, { deleteSmurf })(Smurf);

