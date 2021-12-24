const Yu = function () {
    let yunData = " ds ";
    let p = {//位置信息
        boxes: document.getElementById("boxes"),
        x: 0,
        left: 0,
        boxesX: 0, //
        l: 0, //移动的距离
        isDown: false, //是否按下
        yunData: [], //数据存储
        id: '',
        data: '',
        layer: [],
        direction: '',
        space: -200, //物体移动放的距离
        lastE: 0,
        speed: 1,
        scroll: '',
        currentVideoUrl: '',
        videoMap: [],
        localMap: []
    };

    this.init = function () {//程序初始化
        //请求数据
        this.getData(function (dat) {
            if (dat) {
                $("#bar").animate({
                    width: 100 + "%",
                });
                $("#page").remove();
                p.yunData = dat;

            }
            SYun.rendData();
        });
    };

    this.getData = function (callback) {//获取数据
        $.ajax({
            type: "get",
            url: 'static/js/data.json',
            dataType: 'json',
            success: function (dat) {
                callback(dat);
            },
            error: function (e) {
                callback(false);
            }
        })
    };
    this.val = function () {
        return p;
    };


    this.down = function (e) {//按下
        //获取x坐标
        p.x = e.clientX;
        p.isDown = true;
        p.left = p.boxes.scrollLeft + e.clientX;
        console.log("按下x " + p.yunData.name);
    };

    this.mouseMove = function (e) {//移动
        if (p.isDown) {
            let w = p.boxes.scrollWidth - p.boxes.clientWidth;
            p.l = p.left - e.clientX;
            if (p.l <= 0) {
                p.l = 0;
                p.isDown = false;
                e.preventDefault();
            }
            if (p.l > w) {
                p.l = w;
                p.isDown = false;
                e.preventDefault();
            }
            p.boxesX = p.l;
            p.boxes.scrollLeft = p.boxesX;
        }
    };

    this.thingMove = function () {//物件的移动
        console.log("执行");
        for (let i in p.layer) {
            let zIndex;
            switch (p.layer[i].zIndex) {
                case 1://第一层
                    zIndex = 3000 * p.speed;
                    break;
                case 2://第二层
                    zIndex = 2000 * p.speed;
                    break;
                case 3://第三层
                    zIndex = 1000 * p.speed;
                    break;
            }
            for (let j in p.layer[i].thing) {
                let id = "videopage0layer";
                let x = 1400 + p.boxesX;
                id = id + i + j;
                let leftX = $("#" + id).position().left;
                let left = leftX + p.space;
                let thingX = parseInt(p.layer[i].thing[j].x.replace("px", ''));
                // $("#xinxi").html("改变的left "+left+" 物体的left "+leftX+" 显示区域 "+x+" p.space "+p.space+" p.direction "+p.direction+"  >>"+thingX);
                if (thingX - 200 <= left && thingX >= left) {
                    if (leftX < x) {
                        // $("#" + id).animate({
                        //     left: left + "px"
                        // }, zIndex);
                    }
                }
            }
        }
    };

    this.release = function (e) {//松开
        p.isDown = false;
    };

    this.rendData = function () {
        //渲染封面
        let data = p.yunData.page;
        for (let i in data) {
            console.log("i " + i);
            let pageId = "page" + i;
            let page = "<div id=\"" + pageId + "\" class='page'><div class='mask'></div></div>";
            $("#boxes").append(page);
            p.layer = data[0].layer;
            this.rendUi(data[i].layer, pageId);//渲染ui图层
            if (i == 0) {
                let page1 = data[i].cover;
                // this.rendFirst(page1);
            }
        }
    };

    /**
     * 渲染背景
     */
    this.rendUi = function (data, pageId) {
        for (let k in data) {
            let layerId = pageId + "layer" + k;
            let yunId = pageId + "yun" + k;
            let style = "z-index:" + data[k].zIndex;
            let index = parseInt(data[k].zIndex) - 1;
            let yunIndex = "z-index:" + index;
            let layer = "<div id=\"" + layerId + "\"  style=\"" + style + "\" class='layer'></div>";
            let yun = "<div  style=\"" + yunIndex + "\" class='layer yunClass' ><div id=\"" + yunId + "\"></div></div>";
            $("#" + pageId).append(layer);
            $("#" + pageId).append(yun);
        }
        let n = 0;
        for (let i in data) {
            let videoList = data[i].thing;
            let yunId = pageId + "yun" + i;
            let layerId = pageId + "layer" + i;
            n++;
            this.rendDataV(videoList, layerId, n);//渲染视频到界面中
            switch (i) {
                case "0":
                    $("#" + yunId).addClass("clouds_one ");
                    break;
                case "1":
                    $("#" + yunId).addClass("clouds_two");
                    break;
                case "2":
                    $("#" + yunId).addClass("clouds_three");
                    break;
            }
        }

        $.ajax({
            type: "post",
            url: 'http://api.ec.lz06.com/sing/api/media.php',
            data: {
                "action": "getMediaByProject",
                "projectId": 10
            },
            dataType: 'json',
            success: function (dat) {
                console.log(dat);
                let data = dat.mediaList;
                if (data) {
                    for (var i = 0; i < data.length; i++) {
                        if (document.getElementById("num_" + data[i].url)) {
                            document.getElementById("num_" + data[i].url).innerHTML = data[i].up_num;
                            var hand = localStorage.getItem(data[i].url);
                            if (hand == null) {
                                document.getElementById("img_" + data[i].url).src = "static/img/hand_unclick.png";
                            } else {
                                document.getElementById("img_" + data[i].url).src = "static/img/hand_clicked.png";
                            }
                            p.videoMap[data[i].url] = data[i];
                        } else {
                            continue;
                        }
                    }
                }
            },
            error: function (e, a, b) {
                console.log(e);
                console.log(a);
                console.log(b);
            }
        });
        this.aniation();
    };

    //开始自动动
    this.aniation = function () {
        let w = p.boxes.clientWidth;
        console.log("w " + w);
        let n = p.boxes.scrollLeft + 100;

        let id = this.getVideoId();
        if (id != undefined) {
            let arr = p.yunData.page[0].layer[1].thing;

            let xx = arr[id].x;
            let weizhi = xx.replace("px", "");
            p.boxes.scrollLeft = weizhi - 394;
            p.isDown = true;
            setTimeout(() => {
                p.isDown = false;
            }, 2000);
            console.log(weizhi + " left " + p.boxes.scrollLeft);

        }
        p.scroll = setInterval(function () {
            if (!p.isDown) {
                p.boxes.scrollLeft = p.boxes.scrollLeft + 1;
            }
        }, 20);

        $(".clouds_one").addClass("cloud1");
        $(".clouds_two").addClass("cloud2");
        $(".clouds_three").addClass("cloud3");
        document.getElementById("boxes").addEventListener('scroll', function () {
            let w = p.boxes.scrollWidth - p.boxes.clientWidth;

            if (w <= p.boxes.scrollLeft) {
                console.log("到底了");
                $(".clouds_one").removeClass("cloud1");
                $(".clouds_two").removeClass("cloud2");
                $(".clouds_three").removeClass("cloud3");
                clearInterval(p.scroll);
                // p.boxes.scrollLeft = 0;
            }
        });
    };

    /**
     * 渲染数据
     */
    this.rendDataV = function (data, id, n) {
        for (let i in data) {
            p.localMap[data[i].src] = data[i];
            let videoId = "video" + id + i;
            let videoMId = "videoM" + id + i;
            let type = data[i].type;
            let thing;
            let imgId = videoMId + "img";
            let maskId = "mask" + imgId;
            let css = "width:" + data[i].w + ";height:" + data[i].h + ";left:" + data[i].x + ";top:" + data[i].y;
            switch (type) {
                case 1://视频
                    thing = "<div ondragstart='return false;' onmouseover='SYun.movePlay(\"" + imgId + "\")' onclick='SYun.playVideo(\"" + data[i].src + "\",\"" + data[i].name + "\")'  onmouseout='SYun.likai(\"" + imgId + "\")' class=\"item \" style=\"" + css + "\"  id=\"" + videoId + "\">" +
                        "<div class='videoMask' id=\"" + videoMId + "\" ><img class='playBut' src='static/img/play.png' />" +
                        "</div><img id=\"" + imgId + "\" src=\"" + data[i].cover + "\" />" +
                        "<div class='videoName'>" + data[i].name + "<div class='videoMask1'></div>&nbsp;&nbsp;<img src='static/img/hand_clicked.png' id='img_" + data[i].src + "'  style='width: 15px; height: 15px;'>&nbsp;<span id='num_" + data[i].src + "'>0</span></div>" +
                        "<div class='zhezhao' id=\"" + maskId + "\"></div>" +
                        "</div>";
                    break;
                case 2://小物件
                    thing = "<div  class=\"item effect\" style=\"" + css + "\"  id=\"" + videoId + "\"><div class='videoMask' id=\"" + videoMId + "\" onclick='SYun.playVideo(\"" + data[i].src + "\",\"" + data[i].name + "\")'><img class='playBut' src='static/img/play.png' /><div class='zhezhao'></div> </div><img src=\"" + data[i].cover + "\" /></div>";
                    break;
            }
            $("#" + id).append(thing);
        }
    };

    /**
     * 获取videoId
     */
    this.getVideoId = function () {
        let url = document.location.toString();
        let arr = url.slice(url.indexOf('?') + 1);
        let arr1 = arr.split('&');//通过&符号将字符串分割转成数组
        let id = arr1[0].split("=")[1];//获取数组中第一个参数
        return id;
    }

    /**
     * 漂浮的云
     */
    this.yun = function (data, layerId, pageId) {
        for (let i in data) {
            console.log(layerId);
            let yunId = pageId + layerId + i;
            p.id = pageId + layerId;
            p.data = data[0];
            //this.create_yun(data[0], pageId + layerId);
        }
    };

    /**
     * 随机生成云
     */
    this.create_yun = function (data, id) {
        //底层云
        let num = this.randomNum(1, 3);
        this.create(data, 0, num, id);
    };

    this.create = function (data, n, num, id) {

        let imgId = "img" + n;
        let x = this.randomNum(p.boxesX - 200, p.boxesX + 200);
        let y = 0;
        let yun = "<img style='max-width: 100%;user-select: none;' id=\"" + imgId + "\" class='yunImg'  src=\"" + data + "\" \>";
        $("#" + id).append(yun);
        $("#" + imgId).css({
            marginLeft: x + "px",
            marginTop: y + "px"
        });
        if (n <= num) {
            n++;
            this.create(data, n, num, id);
        }
    };


    /**
     * 渲染cover 封面
     * @param data
     */
    this.rendFirst = function (data) {
        let coverHtml = "<div id='cover' class='cover'><div class='close effect' onclick='SYun.close()'><img src='static/img/close.png'></div> <img src=\"" + data.url + "\" /></div>";
        $("#page" + 0).append(coverHtml);
        let coverCss = {
            width: data.width,
            height: 720 + "px"
        };
        $("#cover").css(coverCss);
        $("#cover>img").css({ height: 720 + "px" });
    };

    //生成从minNum到maxNum的随机数
    this.randomNum = function (minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    };

    /**
     * 关闭封面
     *
     */
    this.close = function () {
        $(".coverBox").css("display", "none");
    };

    this.movePlay = function (id) {
        $("#" + id).addClass("imgFil");
        let maskId = "mask" + id;
        $("#" + maskId).css("display", 'none');
        //$("#" + id).css("opacity", 1);
    };

    this.likai = function (id) {
        let maskId = "mask" + id;
        $("#" + id).removeClass("imgFil");
        $("#" + maskId).css("display", 'block');
        //$("#" + id).css("opacity", 0.9);
    };

    /**
     * 返回
     */
    this.backHome = function () {
        location.href = "../index.html";
    };

    /**
     * 点击播放
     */
    this.playVideo = function (data, title) {
        p.currentVideoUrl = data;
        p.isDown = true;

        document.getElementById("video").setAttribute('src', data);
        $(".video").css("display", "flex");
        var hand = localStorage.getItem(data);
        if (hand == null) {
            document.getElementById("full_hand").src = "static/img/hand_unclick.png";
        } else {
            document.getElementById("full_hand").src = "static/img/hand_clicked.png";
        }
        document.getElementById("full_num").innerHTML = document.getElementById("num_" + data).innerHTML;
        document.getElementById("videoTitle").innerHTML = title;
        document.getElementById("full_desc").innerHTML = p.localMap[data].desc;
    };

    this.closeVideo = function () {
        document.getElementById("video").setAttribute('src', "");
        $(".video").css("display", "none");
        p.isDown = false;
        document.getElementById("shareT").innerHTML = "";
    };

    /**
     * 分享视频
     */
    this.shareVideo = function () {
        let arr = p.yunData.page[0].layer[1].thing;
        console.log(p.currentVideoUrl);
        returnIndex((obj) => {
            console.log(obj);
            let dat = obj;
            let shareUrl = returnUrl() + "?videoId=" + dat;

            console.log("分享的地址 " + shareUrl);
            document.getElementById("videoInput").value = shareUrl;
            let videoId = document.getElementById("videoInput");
            videoId.select();
            document.execCommand("Copy");
            document.getElementById("shareT").innerHTML = "已复制";
        });

        function returnUrl() {
            let url = self.location.href;
            let index = url.lastIndexOf("/");
            let utll = url.substring(index, -1);
            return utll;
        }

        function returnIndex(callback) {
            for (let i in arr) {
                if (arr[i].src == p.currentVideoUrl) {

                    callback(i);
                    return false;
                }
            }
        }
    };

    this.upVideo = function () {
        var url = p.currentVideoUrl;
        if (document.getElementById("full_hand").src.indexOf("static/img/hand_clicked.png") > -1) {
            return;
        }
        document.getElementById("full_hand").src = "static/img/hand_clicked.png";
        document.getElementById("full_num").innerHTML = Number(document.getElementById("full_num").innerHTML) + 1;
        document.getElementById("num_" + url).innerHTML = document.getElementById("full_num").innerHTML;
        document.getElementById("img_" + url).src = "static/img/hand_clicked.png";
        $.ajax({
            type: "post",
            url: 'http://api.ec.lz06.com/sing/api/media.php',
            data: {
                action: "upMedia",
                url: url,
                "projectId": 8
            },
            dataType: 'json',
            success: function (dat) {
                hand = localStorage.setItem(dat.url, "clicked");
                console.log(dat);
            },
            error: function (e, a, b) {
                console.log(e);
                console.log(a);
                console.log(b);
            }
        })
    }

    /**
     * 显示
     *
     */
    this.show = function () {

        alert("显示");
    };


    /**
     * 置顶
     */
    this.top = function () {
        p.boxesX = 0;
        $(".coverBox").css("display", "flex");
        $("#boxes").animate({
            scrollLeft: 0
        }, 1000);
        clearInterval(p.scroll);
        setTimeout(function () {
            p.scroll = setInterval(function () {
                if (!p.isDown) {
                    p.boxes.scrollLeft = p.boxes.scrollLeft + 1;
                }
            }, 20);
            $(".clouds_one").addClass("cloud1");
            $(".clouds_two").addClass("cloud2");
            $(".clouds_three").addClass("cloud3");
        }, 5000);

        for (let i in p.layer) {
            let zIndex;
            switch (p.layer[i].zIndex) {
                case 1://第一层
                    zIndex = 3000 * p.speed;
                    break;
                case 2://第二层
                    zIndex = 2000 * p.speed;
                    break;
                case 3://第三层
                    zIndex = 1000 * p.speed;
                    break;
            }
            for (let j in p.layer[i].thing) {
                let id = "videopage0layer";
                let x = 1400 + p.boxesX;
                id = id + i + j;
                let thingX = parseInt(p.layer[i].thing[j].x.replace("px", ''));

                $("#" + id).animate({
                    left: thingX + "px"
                }, zIndex);
            }
        }
    }
};

