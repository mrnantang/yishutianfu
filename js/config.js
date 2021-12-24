//返回
function back() {
    location.href = "index.html";
}
function backRes() {
    location.href = "res.html";
}

function setHtmlFontSize() {
    //得到手机屏幕的宽度
    var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var clienH = parseInt(document.documentElement.clientHeight);
    //得到html的Dom元素
    var htmlDom = document.getElementsByTagName('html')[0];
    //设置根元素字体大小
    htmlDom.style.fontSize = htmlWidth / 19.2 + 'px';

}
function onload() {
    document.getElementById("mybody").style.display = "block";
}