(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-world"],{"0880":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page"},[t.showVideo?a("PlayVideo",{staticClass:"playVideo",attrs:{url:t.videoUrl},on:{Vclose:function(e){arguments[0]=e=t.$handleEvent(e),t.closePop.apply(void 0,arguments)}}}):t._e(),t.showImage?a("PlayImage",{staticClass:"playVideo",attrs:{url:t.imgUrl},on:{Vclose:function(e){arguments[0]=e=t.$handleEvent(e),t.closePop.apply(void 0,arguments)}}}):t._e(),a("Heade",{attrs:{url:t.url,isBack:!0,type:t.pageType,showType:t.showBj},on:{language:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLangae.apply(void 0,arguments)}}}),a("v-uni-image",{staticClass:"topImg",attrs:{src:i("9299").replace(/^\./,""),mode:"heightFix"}}),a("v-uni-scroll-view",{staticClass:"resBox",attrs:{"scroll-y":"true"}},[a("v-uni-web-view",{attrs:{src:t.content[t.language]}})],1),a("v-uni-image",{staticClass:"buttomImg",staticStyle:{opacity:"0.5"},attrs:{src:i("dfcd").replace(/^\./,""),mode:"heightFix"}})],1)},o=[]},"125c":function(t,e,i){"use strict";i.r(e);var a=i("739e"),n=i("56c3");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("64db");var c,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"36cc3d68",null,!1,a["a"],c);e["default"]=l.exports},1688:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".card-Box[data-v-36cc3d68]{width:90%;height:20%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;position:relative;z-index:99;margin-left:5%;border-bottom:1px solid #a89eb1}.box-top[data-v-36cc3d68]{margin-top:5%;width:33.3%;height:45%;display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;font-weight:700;font-size:%?15?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.box-title[data-v-36cc3d68]{margin:auto;text-align:center;width:90%;font-size:3.5vw;font-weight:1000}.line[data-v-36cc3d68]{width:1%;height:50%;border-right:1px solid #a89eb1}.line_h[data-v-36cc3d68]{border-right:1px solid #f5a418}.fontColr[data-v-36cc3d68]{color:#f5a418}.lunboBox[data-v-36cc3d68]{margin-top:1%;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;color:#000}.box-contaner[data-v-36cc3d68]{width:90%;height:78%;margin:auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.desc[data-v-36cc3d68]{margin-top:1%;width:96%;height:98%;color:#000}.videoLisrt[data-v-36cc3d68]{margin-top:1%;width:96%;height:34%;white-space:nowrap}.video-item[data-v-36cc3d68]{width:48%;height:100%;display:inline-block}.video-cover[data-v-36cc3d68]{width:100%;height:80%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.video-name[data-v-36cc3d68]{margin-top:1%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:18%;color:#1c6984}.cover-item[data-v-36cc3d68]{margin-left:4%}.title-box-box[data-v-36cc3d68]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:80%;height:80%;font-size:3vw}",""]),t.exports=e},1717:function(t,e,i){"use strict";i.r(e);var a=i("0880"),n=i("8710");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("58b5");var c,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"f5a46eca",null,!1,a["a"],c);e["default"]=l.exports},"29f6":function(t,e,i){"use strict";(function(t){var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("a859")),o=a(i("c2f7")),c=a(i("125c")),s=a(i("a014")),l=a(i("b68b")),r={components:{Heade:n.default,Foot:o.default,Card:c.default,PlayVideo:s.default,PlayImage:l.default},data:function(){return{content:this.CON.CON.wenzi.world.content,showBj:"",showVideo:!1,showImage:!1,LunBo:!0,videoUrl:"",pageType:"/pages/index/res",url:"../../static/img/res.png",language:"",item:[],title:""}},mounted:function(){var e=this;window.addEventListener("message",(function(t){e.ceshi(t.data.data)}),!1),uni.getStorage({key:"language",success:function(t){e.language=t.data},fail:function(){t.log("dx"),uni.setStorage({key:"language",data:"china",success:function(){this.language="china",t.log("success")}})}}),this.$nextTick((function(){var t=e.CON.CON.music;e.LunBo=!0,e.title=t.title,e.item=t.item,e.changeLangae(e.language)}))},methods:{ceshi:function(t){switch(t.type){case"img":this.showImage=!0,this.imgUrl=t.src;break;case"video":this.showVideo=!0,this.videoUrl=t.src;break}},palyVideo:function(e){switch(t.log("url "+e.type),e.type){case"img":this.showImage=!0,this.imgUrl=e.src;break;case"video":this.showVideo=!0,this.videoUrl=e.src;break}},changeLangae:function(t){var e=this;this.LunBo=!1,this.language=t,this.$nextTick((function(){e.LunBo=!0}))},closePop:function(t){switch(t){case"video":this.showVideo=!1,this.videoUrl=!1;break;case"img":this.showImage=!1,this.imgUrl=!1;break}}}};e.default=r}).call(this,i("5a52")["default"])},"56c3":function(t,e,i){"use strict";i.r(e);var a=i("bf12"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"58b5":function(t,e,i){"use strict";var a=i("9a19"),n=i.n(a);n.a},"64db":function(t,e,i){"use strict";var a=i("ec0c"),n=i.n(a);n.a},"739e":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"lunboBox"},[i("v-uni-view",{staticClass:"card-Box"},t._l(t.item,(function(e,a){return i("v-uni-view",{staticClass:"box-top clickEffict",class:{fontColr:t.selectI==a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.xuanzhe(e,a)}}},[i("v-uni-view",{staticClass:"box-title",domProps:{innerHTML:t._s(e.name[t.language])}}),a!=t.length-1?i("v-uni-view",{staticClass:"line"}):t._e()],1)})),1),i("v-uni-view",{staticClass:"box-contaner"},[i("v-uni-scroll-view",{staticClass:"desc",attrs:{"scroll-y":"true","show-scrollbar":"true"}},[i("v-uni-web-view",{attrs:{src:t.contaner.desc[t.language]},on:{message:function(e){arguments[0]=e=t.$handleEvent(e),t.message.apply(void 0,arguments)}}})],1)],1)],1)},o=[]},8710:function(t,e,i){"use strict";i.r(e);var a=i("29f6"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"9a19":function(t,e,i){var a=i("cdf5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("65b3395a",a,!0,{sourceMap:!1,shadowMode:!1})},bf12:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"Card",props:["imgArr","itemData"],data:function(){return{left:0,status:!0,contaner:"",selectI:0,language:this.CON.CON.language,videoN:0,length:this.itemData.length,item:this.itemData}},mounted:function(){var e=this;window.addEventListener("message",(function(t){e.playVideo(t.data.data)}),!1),t.log("xx"+JSON.stringify(this.item)),this.xuanzhe(this.item[0],0)},methods:{click_left:function(){this.left>=100&&(this.left=this.left-150),this.status=!0},xuanzhe:function(t,e){this.selectI=e,this.contaner=t,this.videoN=t.video.length},click_right:function(){this.status&&(this.left=this.left+150)},maxLeft:function(t){this.status=!1},fangdaImg:function(){uni.showToast({image:"../../static/img/i.png",title:"暂只支持中文",duration:2e3})},message:function(e){t.log("接收到消息"+e.detail.data)},playVideo:function(t){this.$emit("VplayVideo",t)}}};e.default=i}).call(this,i("5a52")["default"])},cdf5:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".middle-box[data-v-f5a46eca]{width:88.8vw;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:absolute}.box-content[data-v-f5a46eca]{width:100%;height:72%}.box-img[data-v-f5a46eca]{position:absolute}.title-botoom[data-v-f5a46eca]{position:absolute;bottom:0;width:88.8vw;height:13.3%;text-align:left;text-align:left}.titleBox[data-v-f5a46eca]{width:100%;height:20%}.title1[data-v-f5a46eca]{color:#ffa400;letter-spacing:70;font-size:4vw;font-family:FZQingKeBenYueSongS-R-GB;font-weight:400;margin-left:10vw}.title2[data-v-f5a46eca]{font-size:4vw;font-family:Microsoft YaHei;font-weight:400;color:#fff;opacity:.8;text-align:left;margin-top:1%;margin-left:6vw}.iimg[data-v-f5a46eca]{display:inline-block;width:3.2vw;margin-left:0;position:relative;height:3.2vw}.title_span[data-v-f5a46eca]{margin-left:-8vw}.uploadBox[data-v-f5a46eca]{float:right;right:4vw;top:12vh;position:absolute;width:14vw;height:14vw;z-index:1}.uploadBox[data-v-f5a46eca]:active{-webkit-transform:scale(.8);transform:scale(.8)}.zhiboBox[data-v-f5a46eca]{float:right;right:4vw;top:2vh;position:absolute;width:14vw;height:14vw;z-index:1}.zhiboBox[data-v-f5a46eca]:active{-webkit-transform:scale(.8);transform:scale(.8)}.resBox[data-v-f5a46eca]{width:100vw;background-color:#fff;height:82vh}.content[data-v-f5a46eca]{color:#000}.playVideo[data-v-f5a46eca]{position:absolute;top:0;z-index:999}",""]),t.exports=e},dfcd:function(t,e,i){t.exports=i.p+"static/img/xiongmao.8e22ac0f.png"},ec0c:function(t,e,i){var a=i("1688");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("295c4984",a,!0,{sourceMap:!1,shadowMode:!1})}}]);