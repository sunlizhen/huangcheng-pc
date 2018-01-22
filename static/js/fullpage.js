/**
 * Created by Administrator on 2017/12/5.
 */
$(function(){
    var H;
    //让第一屏的的文字居中；（兼容火狐）
    var imgH = $(".video-control .title_img").height();
    var imgW = $(".video-control .title_img").width();
    console.log(imgW)
    $(".video-control .title_img").css({
        left:"50%",
        marginLeft:-imgW/2+"px",
        top:"50%",
        marginTop:-imgH/2+"px"
    });
    //fullpage.js全屏滚动插件效果；
    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#fff', '#f90'],
        anchors: ['section1', 'section2', 'section3', 'section4','section5','section6'],
        menu:'#myMenu',
        //滚动到某一屏后调用js代码
        afterLoad: function(anchorLink, index){
            if(index == 2){
                //鼠标滑动到右边的div出现的效果；
                $(".animation_effect .left").delay(500).animate({
                    width:'60%'
                },1000);
                $(".animation_effect .right").delay(500).animate({
                    width:'40%'
                },1000);
                //鼠标滑到左边的div出现的效果;
                $(".animation_effect .left").mousemove(function() {
                    $(this).stop().animate({
                        width:'69%'
                    },1000);
                    $(".animation_effect .right").stop().animate({
                        width:'31%'
                    },1000)
                });
                //当鼠标划上右边的div出现的效果;
                $(".animation_effect .right").mouseover(function(){
                    $(this).stop().animate({
                        width:'49%'
                    },1000);
                    $(".animation_effect .left").stop().animate({
                        width:'51%'
                    },1000)
                });
                //鼠标划出左边和右边的div出去的效果;
                $(".animation_effect .left,.animation_effect .right").mouseout(function(){
                    $('.animation_effect .left').stop().animate({
                        width:'60%'
                    },1000);
                    $(".animation_effect .right").stop().animate({
                        width:'40%'
                    },1000)
                });
                //当鼠标划上右边上边的top的div的时候出现的效果;
                $(".animation_effect .top").mouseover(function(){
                    $(this).stop().animate({
                        height:"70%"
                    },1000);
                    $(".animation_effect .center,.animation_effect .bottom").stop().animate({
                        height:"15%"
                    },1000)
                });
                //当鼠标划上中间的div的时候，上下两个div高度都会发生变化;
                $(".animation_effect .center").mouseover(function(){
                    $(".animation_effect .top,.animation_effect .bottom").stop().animate({
                        height:"15%"
                    },1000);
                    $(".animation_effect .center").stop().animate({
                        height:"70%"
                    },1000)
                });
                //当鼠标划上右下方的div的时候上边两个的高都会发生变化;
                $(".animation_effect .bottom").mouseover(function(){
                    $(this).stop().animate({
                        height:"70%"
                    },1000);
                    $(".animation_effect .top,.animation_effect .center").stop().animate({
                        height:"15%"
                    },1000);
                });
                //当鼠标划出右边上边的top的div的时候div的高度回到原位
                $(".animation_effect .top,.animation_effect .center,.animation_effect .bottom").mouseout(function(){
                    $('.animation_effect .top,.animation_effect .center,.animation_effect .bottom').stop().animate({
                        height:H/3
                    },1000);
                });
                //当页面滚动到第二页的时候，上边的竖条进入；
                $(".left_top_con_shu").stop().animate({
                    top:'0px'
                });
                //当页面滚动到第二页的时候，上边的文字进入；
                $(".left_top .left_top_con .left_top_con_wenzi p").stop().animate({
                    marginLeft:'0px'
                });
                //当鼠标离开的时候，遮罩层消失；
                $(".animation_effect .top,.animation_effect .center,.animation_effect .bottom").mouseout(function(){
                    $(".animation_effect .left,.animation_effect .top,.animation_effect .center,.animation_effect .bottom").children(".hover_left").css({
                        display:"block"
                    });
                });
                //当鼠标划上div的时候，出现遮罩层;
                $(".animation_effect .left,.animation_effect .top,.animation_effect .center,.animation_effect .bottom").mousemove(function(){
                    $(this).children(".hover_left").css({
                        display:"none"
                    })
                });
                $(".animation_effect .left,.animation_effect .top,.animation_effect .center,.animation_effect .bottom").mouseover(function(){
                    $(this).children(".hover_left").css({
                        display:"none"
                    })
                });
                //如果鼠标划出section2，左边的蒙层就会消失;
                $(".section2").mouseleave(function(){
                    $(".animation_effect .left .hover_left").css({
                        display:"none"
                    })
                })

            }
            //当切换页面，在切换回第一页的时候，视频扔然播放
            if(index == 1){
                var video = $('#video-bg');
                video[0].play();
                //动态设置右边三个div的高度；和top值;其中中间的div处于屏幕垂直居中位置；如果在index == 2中设置滚动到下边
                // 的时候盒子的高度才会生效；
                H = $('.section').height();
                $('.animation_effect .top,.animation_effect .center,.animation_effect .bottom').css({height:H/3});
                //获取盒子坐标
                $(".video-control").mouseover(function(e){
                    console.log(e.offsetX + ":"+ e.offsetY)
                });
                ////让第一屏的的文字居中；
                //var imgH = $(".video-control .title_img").height();
                //var imgW = $(".video-control .title_img").width();
                //console.log(imgH + ":"+imgW);
                //$(".video-control .title_img").css({
                //    left:"50%",
                //    marginLeft:-imgW/2+"px",
                //    top:"50%",
                //    marginTop:-imgH/2+"px"
                //});

                //---------------鼠标划上第一页文字3d透视效果-----------------
                $(".video-control").mouseover(function(){
                    var data = $('.active').children('a').data('option');
                    $('.animate-2').animate3d(data);
                })

            }
            //第三个页面
            if(index == 3){
                //当页面滚动到第三页的时候，上边的竖条进入；
                $(".left_top_con_shu3").stop().animate({
                    top:'0px'
                });
                //当页面滚动到第二页的时候，上边的文字进入；
                $(".left_top .left_top_con .left_top_con_wenzi3 p").stop().animate({
                    marginLeft:'0px'
                });
            //    第三页动态效果（div从上往下）；
                $(".section3_bottom .section3_bottom_top .con:eq(0),.section3_bottom .section3_bottom_bottom .con:eq(0)").animate({
                    top:"0",
                    opacity:1
                },800);
                $(".section3_bottom .section3_bottom_top .con:eq(1),.section3_bottom .section3_bottom_bottom .con:eq(1)").delay(200).animate({
                    top:"0",
                    opacity:1
                },800);
                $(".section3_bottom .section3_bottom_top .con:eq(2),.section3_bottom .section3_bottom_bottom .con:eq(2)").delay(300).animate({
                    top:"0",
                    opacity:1
                },800);
                $(".section3_bottom .section3_bottom_top .con:eq(3),.section3_bottom .section3_bottom_bottom .con:eq(3)").delay(400).animate({
                    top:"0",
                    opacity:1
                },800);
                $(".section3_bottom .section3_bottom_top .con:eq(4),.section3_bottom .section3_bottom_bottom .con:eq(4)").delay(500).animate({
                    top:"0",
                    opacity:1
                },800);
                $(".section3_bottom .section3_bottom_top .con:eq(5),.section3_bottom .section3_bottom_bottom .con:eq(5)").delay(600).animate({
                    top:"0",
                    opacity:1
                },800)
            }
            //第四个页面
            if(index == 4){
                //当页面滚动到第四页的时候，上边的竖条进入；
                $(".left_top_con_shu4").stop().animate({
                    top:'0px'
                });
                //当页面滚动到第二页的时候，上边的文字进入；
                $(".left_top .left_top_con .left_top_con_wenzi4 p").stop().animate({
                    marginLeft:'0px'
                });
            }
            //第五个页面;
            if(index == 5){
                //当页面滚动到第五页的时候，上边的竖条进入；
                $(".left_top_con_shu5").stop().animate({
                    top:'0px'
                });
                //当页面滚动到第五页的时候，上边的文字进入；
                $(".left_top .left_top_con .left_top_con_wenzi5 p").stop().animate({
                    marginLeft:'0px'
                });
            }
            //第六个页面
            if(index == 6){
                //当页面滚动到第六页的时候，上边的竖条进入；
                $(".left_top_con_shu6").stop().animate({
                    top:'0px'
                });
                //当页面滚动到第六页的时候，上边的文字进入；
                $(".left_top .left_top_con .left_top_con_wenzi6 p").stop().animate({
                    marginLeft:'0px'
                });
            //    文字渐进效果;
                $(".section6_bottom .tubiao ").animate({
                    bottom:"28px",
                    opacity:1
                },1000);
                $(".section6_bottom .bottom").animate({
                    bottom:"0",
                    opacity:1
                },1000);
                //下边图标渐入效果
                $(".jianru_b").animate({
                    top:"-1px",
                    opacity:1
                },1000);
                $(".jianru_t").animate({
                    top:"-43px",
                    opacity:1
                },1000)
            }
        },
        //滚动到某一屏前，或者这一屏幕滚动过后执行的js代码；
        onLeave: function(index, direction){
        }
    });
});
