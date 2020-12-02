import React from 'react';
import {Link} from "react-router-dom";

const CharacterCard = ({ name, gender, eye_color, hair_color }) => {
  return (
    <div className='card pd-20'>
      <div>
        <h3>{name}</h3>
         <dl>
	        <dt>Gender</dt><dd>{gender}</dd>
	        <dt>Eye Color</dt><dd>{eye_color}</dd>
	        <dt>Hair Color</dt><dd>{hair_color}</dd>
        </dl>
      </div>
    </div>
  );
}

export default CharacterCard;