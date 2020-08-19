import React from 'react';
import GrayImg from '../../shared/gray-img';
import{Link} from 'react-router-dom';

const Planet = (props) => {
    let title;
    if(props.name)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h3>{props.name}</h3>
    return (
        <div>
            <Link to={`/planet/${props.id}`}>{title}</Link>
            <p>{props.description}</p>
            <p><a href={props.link_url}>{props.link_url}</a></p>
            <GrayImg img_url = {props.img_url} gray={props.gray} />
        </div>
          )
}

 export default Planet;