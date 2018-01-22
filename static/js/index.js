/**
 * Created by Administrator on 2017/12/11.
 */
$(function(){
    var video = $('#video-bg');
    video[0].play();
    var video2 = $("#video_large");

    //点击中间的播放按钮出现的效果；如果弹出的视频停止后关闭，点击这个按钮的时候视频会继续播放；
    $(".title_anniu").click(function(){
        $("#dowebok").hide();
        $(".video_large_wrap").show();
        video2[0].play();
        //动态获取video_large的宽和高(点击出现的视频)
        var Width = $("#video_large").outerWidth();
        var Height = $("#video_large").outerHeight();
        $("#video_large").css({
            left:"50%",
            top:"50%",
            marginLeft:-Width/2+"px",
            marginTop:-Height/2+"px"
        })
    });

    //点击弹出的视频video_close关闭按钮，出现的效果;
    $("#video_close").click(function(){
        $("#dowebok").show();
        $(".video_large_wrap").hide();
        video[0].play();
    })

});

