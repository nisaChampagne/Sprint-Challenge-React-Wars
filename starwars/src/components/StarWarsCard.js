import React from "react";
import { Card } from "semantic-ui-react";

export default function StarWarsCard(props) {
  return (
    <Card>
      <Card.Content >
        <Card.Header>Name: {props.name}</Card.Header>
        <Card.Meta>Birth Year: {props.birth_year}</Card.Meta>
        <Card.Description>
        Gender: {props.gender}
        </Card.Description>
        <Card.Description>
         Height: {props.height}cm
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
