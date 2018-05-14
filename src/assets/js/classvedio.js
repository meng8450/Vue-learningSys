var flashvars={
    f:'http://movie.ks.js.cn/flv/other/1_0.flv',
    c:0,
    b:1
    };
var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always'};
CKobject.embedSWF('ckplayer/ckplayer.swf','a1','ckplayer_a1','400','250',flashvars,params);
/*
CKobject.embedSWF(播放器路径,容器id,播放器id/name,播放器宽,播放器高,flashvars的值,其它定义也可省略);
下面三行是调用html5播放器用到的
*/
var video=['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4'];
var support=['iPad','iPhone','ios','android+false','msie10+false','webKit'];
CKobject.embedHTML5('video','ckplayer_a1',600,400,video,flashvars,support);