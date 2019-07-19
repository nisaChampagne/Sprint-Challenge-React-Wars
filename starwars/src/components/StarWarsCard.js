import React from "react";
import { Card } from "semantic-ui-react";


export default function StarWarsCard(props) {
  return (
    <Card className='ui centered class'>
      <Card.Content >
        <Card.Header> {props.name}</Card.Header>
        <Card.Meta color='black'>Birth Year: {props.birthyear}</Card.Meta>
        <Card.Description>
        Gender: {props.gender}
        </Card.Description>
        <Card.Description>
         Height: {props.height}cm
        </Card.Description>
        <Card.Description>
         Weight: {props.mass}cm
        </Card.Description>
        <Card.Description>
         Hair Color: {props.haircolor}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
