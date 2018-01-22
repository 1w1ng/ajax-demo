var $window = $('.window');
var $imgCt = $('.ct');
var $imgs = $('.ct>li');
var $preBtn = $('.pre');
var $nextBtn = $('.next');
var $bullets = $('.bullets>a');

var imgWidth = $imgs.width();
var imgCount = $imgs.length;

var pageIndex = 0;
var isAnimate = false; //状态锁防止用户重复点击


$nextBtn.on('click',function(){
  playNext();
});
$preBtn.on('click',function(){
  playPre();
});

$bullets.on('click',function(){
  var index = $(this).index();
  play(index);
});

play(0);
autoPlay();


//函数封装
function playNext(){
  play((pageIndex+1)%imgCount);
}
function playPre(){
  play((imgCount + pageIndex -1)%imgCount) ;
}

function play(index){
  if(isAnimate) return;
  isAnimate = true;
  $imgs.eq(pageIndex).fadeOut(500);
  $imgs.eq(index).fadeIn(500,function(){
    isAnimate = false;
  });
  pageIndex = index;
  setBullet();
}

//底部按钮样式效果
function setBullet(){
 $bullets.removeClass('active').eq(pageIndex).addClass('active');
}

//自动播放
function autoPlay(){
  clock = setInterval(function(){
    playNext();
  },3000);
}