/*Helper function in order to resolve if a url is an image*/

const loadImage = (id) => new Promise((resolve, reject) => {
  const img = new Image();
  img.addEventListener('load', () => resolve(img));
  img.addEventListener('error', (err) => reject(err));
  img.src =  "https://img.youtube.com/vi/" + id + "/mqdefault.jpg";
});

function checkThumbnail(width) {
    //HACK a mq thumbnail has width of 320.
    //if the video does not exist(therefore thumbnail don't exist), a default thumbnail of 120 width is returned.
    if (width === 120) {
     return false
    }
    return true
  }


 export async function isValidVideo(id) {
 return loadImage(id)
  .then(img => checkThumbnail(img.width))
  .then(result => result)
  .catch(err => console.log(err))
}
  

