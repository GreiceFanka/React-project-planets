import React, { Fragment, useState, useEffect } from 'react';
import Planet from './planet';
import Form from './form';

async function getPlanets(){
    let response = await fetch('http://localhost:3001/api/planets.json')
    let data = await response.json()
    return data;
}

const Planets = () => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanets().then(data => {
        setPlanets(data['planets'])
    })
  },[])

  const addPlanet = (new_planet) => {
      setPlanets([...planets, new_planet])

  }
    return (
            <Fragment>
                <h3>Planet List</h3>
                <hr/>
                <Form addPlanet={addPlanet}/>
                <hr/>
                {planets.map((planet,index) =>
                    <Planet 
                    id = {planet.id}
                    name= {planet.name}
                    description = {planet.description}
                    link_url = {planet.link_url}
                    img_url = {planet.img_url}
                    key ={index}
                    /> 
                )}
            </Fragment>     
        )}

export default Planets;
