import React from 'react';
import Planet from '../components/planet';
import {Link} from 'react-router-dom';

const NotFoundScreen = () =>{
    return(
        <div>
           <h3>Página não encontrada</h3> 
           <Link to='/'>Voltar a listagem</Link>
        </div>
    )
}

export default NotFoundScreen;