import React, { useState,useEffect } from 'react';
import GrayImg from '../shared/gray-img';
import Form from '../planet/form';
import {useParams, useHistory, Redirect} from 'react-router-dom';


async function getPlanet(id){
    let response = await fetch(`http://localhost:3001/api/${id}.json`)
    let data = await response.json();
    return data;

}

const Planet = () => {
    const [satellites,setSatellites] = useState([]);
    const [planet, setPlanet] = useState ({});
    const [redirect, setRedirect] = useState(false);

    let {id} = useParams();
    let history = useHistory();

    useEffect(()=> {
        getPlanet(id).then(data =>{
            setSatellites(data['satellites']);
            setPlanet(data['data']);
        }, error =>{
            setRedirect(true);
        })
    },[])

    const goToPlanets = () =>{
        history.push('/')
    }


  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite])

}

    if(redirect)
      return <Redirect to='/' />

    return (
        <div>
            <h3>{planet.name}</h3>
            <p>{planet.description}</p>
            <p><a href={planet.link_url}>{planet.link_url}</a></p>
            <h4>Satélites</h4>
            <hr/>
            <Form addSatellite={addSatellite}/>
            <hr/>
            <ul>
            {satellites.map((satellite, index) =>
                <li key ={index}>{satellite.name}</li>
            )}
            </ul>
            <GrayImg img_url = {planet.img_url} gray={planet.gray} />
            <hr></hr>
            <button type="button" onClick={goToPlanets}>Voltar a listagem</button>
        </div>
          )

  
}

 export default Planet;