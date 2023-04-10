function startVideoFromCamera(){

    const width = 400
    const heigth = 400

    navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{

        const videoElement = document.querySelector("#video")
        videoElement.srcObject = stream

    }).catch(error=>{console.log(error)})


}

window.addEventListener("DOMContentLoaded", startVideoFromCamera)
