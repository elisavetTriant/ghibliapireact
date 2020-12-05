import React from 'react';
import Image from './Image';
import {Link} from "react-router-dom";

const Card = ({ id, release_date, title, description, producer, director, video_id, onShowVideo }) => {
  return (
    <div className='card'>
     <Image video_id={video_id} title={title} onShowVideo={onShowVideo} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
         <dl className='mtb-20 pd-40'>
	        <dt>Release Date</dt><dd>{release_date}</dd>
	        <dt>Producer</dt><dd>{producer}</dd>
	        <dt>Director</dt><dd>{director}</dd>
        </dl>
        <Link className="myButton" to={`movie/${id}`}>See more</Link>
      </div>
    </div>
  );
}

export default Card;
