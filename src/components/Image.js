import React from 'react';


const Image = ({video_id, title, onShowVideo }) => {

   return  (0 === video_id.length) ?
    
     (
     	<img src="./logo.png" alt="Studio Ghibli Logo"/>
     ) :

     (
     	<React.Fragment>
	     	 <a href={`https://youtu.be/${video_id}`} onClick={onShowVideo}>
		     	<img alt={`${title} Trailer Preview`} id={video_id} src={`https://img.youtube.com/vi/${video_id}/hqdefault.jpg`}  /> 
		     </a>
     	</React.Fragment>

     )
  
}

export default Image;
