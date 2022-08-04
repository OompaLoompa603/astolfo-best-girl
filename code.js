document.addEventListener("DOMContentLoaded", function(){
    document.body.addEventListener("touchstart", playVideo);
    function playVideo() {
        const video = document.getElementById('videoBG');
        if(video.playing) {
        } else {
            video.play();
        }
    }
});