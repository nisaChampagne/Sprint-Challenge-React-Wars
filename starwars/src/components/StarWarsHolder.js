import React, { useState, useEffect } from "react";
import StarWarsCard from "./StarWarsCard";
import { Button } from "semantic-ui-react";
import axios from "axios";

export default function StarWarsContainer() {
  const [data, setData] = useState({});
  const [character, setCharacter] = useState("1");

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/${character}/`).then(res => {
      const data = res.data;
      console.log("GUUD", data);
      setData(res.data);
    });
  }, [character]);

  return (
    <div>
      <Button basic color='black'onClick={() => setCharacter("1")}>Luke Skywalker</Button>
      <Button basic color='black' onClick={() => setCharacter("2")}>C-3P0</Button>
      <Button basic color='black'onClick={() => setCharacter("3")}>R2-D2</Button>
      <Button basic color='black' onClick={() => setCharacter("4")}>Darth Vader</Button>
      <Button basic color='black' onClick={() => setCharacter("5")}> Leia Organa</Button>
      <Button basic color='black'onClick={() => setCharacter("20")}>Yoda</Button>
      <Button basic color='black'onClick={() => setCharacter("21")}>Palpatine</Button>
      <Button basic color='black' onClick={() => setCharacter("16")}>Jabba Desilijic </Button>
      <Button basic color='black'onClick={() => setCharacter("13")}>Chewbacca</Button>
      <Button basic color='black' onClick={() => setCharacter("11")}>Anakin Skywalker</Button>
      <Button basic color='black'onClick={() => setCharacter("22")}>Boba Fett</Button>
      {data ? (
        <StarWarsCard
          name={data.name}
          gender={data.gender}
          height={data.height}
          birthyear={data.birth_year}
          haircolor={data.hair_color}
        />
      ) : (
        <div> Oops one second </div>
      )}
    </div>
  );
}
