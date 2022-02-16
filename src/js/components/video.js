const videoBlock = document.querySelector('.video-block');
const video = videoBlock.querySelector('.video-block__content');
const playBtn = videoBlock.querySelector('.video-block__play');

playBtn.addEventListener('click', () => {
    videoBlock.classList.add('video-block--played');
    playBtn.classList.add('video-block__play--played');
    video.play();
    video.controls = true;
});

video.onpause = function () {
    videoBlock.classList.remove('video-block--played');
    playBtn.classList.remove('video-block__play--played');
    video.controls = true;
}