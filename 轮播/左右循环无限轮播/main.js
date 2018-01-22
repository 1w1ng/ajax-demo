var $imgCt = $('.ct');
var $imgs = $('.ct>li');
var $preBtn = $('.pre');
var $nextBtn = $('.next');
var $bullets = $('.bullets>a');

var pageIndex = 0;
var isAnimate = false; //状态锁防止用户重复点击

var imgCount = $imgs.length;
var imgWidth = $imgs.width();

$imgCt.append($imgs.first().clone()); //把第一个图片clone到最后
$imgCt.prepend($imgs.last().clone()); 
$imgCt.width((imgCount + 2) * imgWidth);//计算父容器总宽度
$imgCt.css({left: -imgWidth}); //显示第一张

//点击左右按钮轮播
$preBtn.on('click',function(){
  playPre(1);
});

$nextBtn.on('click',function(){
  playNext(1);
});

//点击底部按钮 跳动图片
$bullets.click(function(){
  pageIndex = $(this).index();
  $imgCt.animate({
    left:-imgWidth * (pageIndex + 1)
  });
  setBullet();
});

// 自动轮播
autoPlay();

// 鼠标移入，停止轮播
$('.window').mouseover(function () {
  clearInterval(timer);
});
// 鼠标移出，轮播
$('.window').mouseout(function () {
  autoPlay();
});

// 轮播函数封装
function autoPlay () {
  // 自动向右轮播,时隔2s
  timer = setInterval(function () {
    playNext(1);
  },2000);
}

function playNext(len){
  if(isAnimate) return;
  isAnimate = true;
  $imgCt.animate({
    left:'-=' + len*imgWidth //原来基础上在减小宽度
  },function(){
    pageIndex += len;
    if(pageIndex === imgCount){
      pageIndex = 0;
      $imgCt.css({left:-imgWidth}); //当pageIndex加到数量最大值时,重设为0,并返回第一张
    }
    setBullet();
    isAnimate = false;
  });
}

function playPre(len){
  if(isAnimate) return;
  isAnimate = true;
  $imgCt.animate({
    left:'+=' + len*imgWidth
  },function(){
    pageIndex -= len;
    if(pageIndex < 0){
      pageIndex = imgCount - 1;
      $imgCt.css({left: -imgCount*imgWidth});
    }  
    setBullet();
    isAnimate = false;
  });
}

//底部按钮点击效果设置
function setBullet(){
  $bullets.removeClass('active').eq(pageIndex).addClass('active');
}