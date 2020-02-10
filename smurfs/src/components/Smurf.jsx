import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

const Smurf = props => {
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
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default Smurf;

