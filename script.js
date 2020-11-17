// if ('pictureInPictureEnabled' in document) {
//     pipButton.classList.remove('hidden')
//     pipButton.disabled = false;
  
//     pipButton.addEventListener('click', () => {
//       video.requestPictureInPicture();
//     });
//   }

  const videoElement = document.getElementById('video')
  const button = document.getElementById('button')

  // Prompt user to select media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (e) {
        console.log(e)
    }
}



//On Load
selectMediaStream()

button.addEventListener('click', async() => {
    // Disable the button
    button.disabled = true;
    //Start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset button
    button.disabled = false;
});