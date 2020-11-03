import React from 'react';

const Image = ({video_id, title }) => {
  return  (0 === video_id.length) ?
    
     (
     	<img src="./logo.png" alt="Studio Ghibli Logo"/>
     ) :

     (
     	<img alt='{title}' src={`https://img.youtube.com/vi/${video_id}/hqdefault.jpg`} /> 

     )
  
}

export default Image;
