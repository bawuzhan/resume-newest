
FastClick.attach(document.body);

var winW = document.documentElement.clientWidth;
if(document.documentElement.clientWidth>=768){

    document.documentElement.style.fontSize = winW / 355 * 100 + "px";
    var swipers=document.querySelectorAll('.swiper-slide:not(.page5)>*');
    for(var i=0;i<swipers.length;i++){
        swipers[i].style.marginLeft=.2+"rem"
        var ul=document.querySelector('.page2>ul');
        ul.style.marginLeft=0
    }
    img5=document.querySelector('.page5>#img5');
    img5.style.marginLeft=.2+"rem"


}else{

    document.documentElement.style.fontSize = winW / 320 * 100 + "px";
}


new Swiper(".swiper-container",{
    loop:true,
    direction:"vertical",
    effect:"coverflow",
    autoplay:4000,
    pagination : '.swiper-pagination',
    paginationType : 'custom',
    paginationCustomRender: function (swiper, current, total) {
        return current + ' / ' + total;
    },
    onSlidePrevEnd:changeEnd,
    onSlideNextEnd:changeEnd
});



function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            if(n==1||n==6){
                slide.id="page1";
                return;
            }
            if(n==2){
                slide.id="page2";
                return;
            }
            if(n==3){
                slide.id="page3";
                return;
            }
            if(n==4){
                slide.id="page4";
                return;
            }
            if(n==5||n==0){
                slide.id="page5";
                return;
            }

        }
        slide.id = null;
    });
}


//->音频的自动播放
var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();//->让音频播放:浏览器开始下载资源文件,也就是让它播放到出声音还需要一段时间,只有发出声音后我们才会显示音乐的图标
    musicAudio.addEventListener("canplay", function () {
        //->canplay:音频文件已经可以播放了,但是不一定是所有资源都加载完成了,大部分是边播放边界
        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    //->当前是暂停状态我让其播放
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    //->当前是播放状态我让其暂停
    musicAudio.pause();
    music.className = "music";
}, false);
