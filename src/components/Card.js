import React from 'react';
import Image from './Image'

const Card = ({ id, release_date, title, description, producer, director, video_id }) => {
  return (
    <div className='card'>
     <Image video_id={video_id} title={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
         <dl>
	        <dt>Release Date</dt><dd>{release_date}</dd>
	        <dt>Producer</dt><dd>{producer}</dd>
	        <dt>Director</dt><dd>{director}</dd>
        </dl>
      </div>
    </div>
  );
}

export default Card;
