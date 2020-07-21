// n表示第几张图片
function switchImage(n) {
  var value = -n * 100 + "%"; //计算最终的margin-left
  var ulBanner = document.querySelector(".banner-container .banner-img");
  ulBanner.style.marginLeft = value;

  var before = document.querySelector(".banner-title .active");
  before.className = "";
  
  var ulTitle = document.querySelector(".banner-title");
  ulTitle.children[n].className = "active";
}

var ulTitle = document.querySelector(".banner-title");
ulTitle.onmouseover = function (e) {
  // e.target 得到当前移入的元素的dom对象
  // 先把ulTitle.children变成真的数组
  var children = Array.from(ulTitle.children);
  var index = children.indexOf(e.target);
  currentIndex = index; //更改当前是第几张图片
  switchImage(index);
};

var timer = "";
var currentIndex = 0; //一开始是第1张图片

function start() {
  clearInterval(timer);
  timer = setInterval(function () {
    currentIndex++;
    if (currentIndex == 5) {
      currentIndex = 0;
    }
    switchImage(currentIndex);
  }, 3000);
}

// 停止切换图片
function stop() {
  clearInterval(timer);
}

start();

var bannerContainer = document.querySelector(".banner-container");
bannerContainer.onmouseover = function () {
  stop();
};
bannerContainer.onmouseout = function () {
  start();
};