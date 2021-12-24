$(document).ready(function () {
    if (!localStorage.getItem("firstVist")) {
        if (document.getElementById("download")) {
            document.getElementById("download").style.display = "block";
            document.getElementsByTagName('body')[0].setAttribute('style', 'position:fixed; width:100%;')//下层不能滚动
        }
    }
    localStorage.setItem("firstVist", 1);

    // $(window).resize(function () {
    //     setHtmlFontSize();
    // });

    // $(function () {
    //     setHtmlFontSize();
    // });

});

function change() {
    var n = (localStorage.getItem("language") == null) ? "china" : localStorage.getItem("language");
    console.log(n);
    if (n == "china") {
        localStorage.setItem("language", 'english');
        get();
        console.log("English");
    } else {
        localStorage.setItem("language", 'china');
        get();
    }
}

//点击关于我们弹窗
$('#about').click(function () {
    $("#download").show();
    document.getElementsByTagName('body')[0].setAttribute('style', 'position:fixed; width:100%;')//下层不能滚动

});

//关闭关于我们弹窗
$('.close1').click(function () {
    $(".opacityBottom").hide();
    document.getElementsByTagName('body')[0].setAttribute('style', 'position:relative;')
});

// //关闭弹窗
// $('.close').click(function () {
//     $(".opacityBottom").hide();
//     location.reload();
//     // $(".myform").find('input[type=text],input[type=email]').each(function() {
//     //     $(this).val('');
//     // });
// });

function get() {
    var n = (localStorage.getItem("language") == null) ? "china" : localStorage.getItem("language");
    if (n == 'english') {
        $(".English").css({ "display": "block" });
        $(".chinese").css({ "display": "none" });
        $("#en_text").css({ "color": "#f0a944" });
        $("#ch_text").css({ "color": "white" });
        $("#huihua").attr("src", "img/index/huihua_en.png");
        $("#shipin").attr("src", "img/index/shipin_en.png");
        $("#shougong").attr("src", "img/index/shougong_en.png");
        $("#zhanlan").attr("src", "img/index/zhanlan_en.png");
        $("#banjiang").attr("src", "img/index/banjiang_en.png");
    } else {
        $(".English").css({ "display": "none" });
        $(".chinese").css({ "display": "block" });
        $("#en_text").css({ "color": "white" });
        $("#ch_text").css({ "color": "#f0a944" });
        $("#huihua").attr("src", "img/index/huihua.png");
        $("#shipin").attr("src", "img/index/shipin.png");
        $("#shougong").attr("src", "img/index/shougong.png");
        $("#zhanlan").attr("src", "img/index/zhanlan.png");
        $("#banjiang").attr("src", "img/index/banjiang.png");
    }
}

get();
$(window).resize(function () {
    setHtmlFontSize();
});

$(function () {
    setHtmlFontSize();
});
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?e472e0735de8565515f155571d57493e";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();