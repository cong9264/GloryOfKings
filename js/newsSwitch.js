function switchNews(n) {
  var value = -n * 100 + "%"; //计算它最终的margin-left
  var divNews = document.querySelector(".news-banner .news-blocks");
  divNews.style.marginLeft = value;

  var before = document.querySelector(".news-container .title-container .active");
  before.className = "";

  var newsUl = document.querySelector(".news-container .title-container");
  newsUl.children[n].className = "active";
}

var ulTitles = document.querySelector(".news-container .title-container");
ulTitles.onmouseover = function (e) {
  if (e.target.tagName != "LI") {
    return;
  }
  var children = Array.from(ulTitles.children);
  var index = children.indexOf(e.target);
  if (index >= 5) {
    return;
  }
  switchNews(index);
};
