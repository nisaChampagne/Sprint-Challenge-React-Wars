import React, { useState, useEffect } from 'react';
import StarWarsCard from './StarWarsCard';
import axios from 'axios';


export default function StarWarsContainer(){
    const [data, setData] = useState({});
    const [character, setCharacter] = useState('1')

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/${character}/`)
        .then(res => {
            const data = res.data;
            console.log('GUUD', data);
            setData(res.data);
        });
    }, [character]);

    return(
        <div>
              <button onClick={() => setCharacter('1')}>Luke Skywalker</button>
              <button onClick={() => setCharacter('2')}>C-3P0</button>
              <button onClick={() => setCharacter('3')}>R2-D2</button>
              <button onClick={() => setCharacter('4')}>Darth Vader</button>
              <button onClick={() => setCharacter('5')}> Leia Organa</button>
              <button onClick={() => setCharacter('20')}>Yoda</button>
              <button onClick={() => setCharacter('21')}>Palpatine</button>
              <button onClick={() => setCharacter('16')}>Jabba Desilijic Tiure</button>
              <button onClick={() => setCharacter('13')}>Chewbacca</button>
              <button onClick={() => setCharacter('11')}>Anakin Skywalker</button>
              <button onClick={() => setCharacter('22')}>Boba Fett</button>
                {data ? <StarWarsCard name={data.name}
                            gender={data.gender}
                            height={data.height}
                            birthyear={data.birth_year}
                             />
                : <div> Oops one second </div>}
        </div>
    )
}