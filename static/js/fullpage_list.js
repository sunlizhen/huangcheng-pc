/**
 * Created by Administrator on 2017/12/18.
 */
$(function(){
    //    -----------------------------第六页焦点图效果开始-----------------------------;
    var section_H = $(".list_section6").width();
    $(".list_section6 .list_top li").css("width",section_H+"px");
    $(".list_section6 .list_top").css("width",section_H*6+"px");
    //获取第一张图片放在li的最后;
    var firstImg = $(".list_section6 .list_top li").first().clone(true);
    $(".list_section6 .list_top").append(firstImg)
    var i = 0;
    var timer;

    //点击下一个的时候;
    $(".list_section6 .next").click(function(){
        i++;
        moveImg(i);
    });
    //点击上一个出现的效果;
    $(".list_section6 .preve").click(function(){
        i--;
        moveImg(i);
    });
    //自动设置图片滚动;
        moveImg();
    function moveImg(){
        //当为最后一个图片的时候，跳到第一个图片;
        if(i == $(".list_section6 .list_top li").length){
            i = 1;
            $(".list_section6 .list_top").css("left",0)
        }
        if(i == -1){
            i=$(".list_section6 .list_top li").length-2;
            $(".list_section6 .list_top").css("left",($(".list_section6 .list_top li").length-1)*(-section_H));
            //$('#ul').css({left:($('#ul li').length-1)*-800});
        }
        $(".list_section6 .list_top").stop().animate({
            left:-(section_H*i) +"px"
        },400)
    }
    //-----------------------------第六页焦点图效果结束------------------------------;
    //设置黄色fixd的区域位置；
    //获取浏览器的高度;
    var WH = $(window).height();
    //$(".summary").css("top",WH+"px")
    //    鼠标划上导航的时候，下拉导航出现;
    $(".nav").mouseover(function(){
        $(".nav_list").stop().animate({
            height:"200px"
        },500)
    });
    $(".nav").mouseout(function(){
        $(".nav_list").stop().animate({
            height:"0"
        },500)
    });
    //整个页面滚动效果;
    $('#dowebok').fullpage({
        sectionsColor: ['#b6040f', '#fff', '#fff','#fff', '#fff', '#fff'],
        anchors: ['section1', 'section2', 'section3', 'section4','section5','section6','section7'],
        menu:'#myMenu1',
        afterLoad: function(anchorLink, index){
            //当切换页面，在切换回第一页的时候，视频扔然播放
            if(index == 2){
                //当页面滚动到第二页的时候，上边的竖条进入；
                $(".left_top_con_shu4").stop().animate({
                    top:'0px'
                });
                //当页面滚动到第二页的时候，上边的文字进入；
                $(".left_top .left_top_con .left_top_con_wenzi4 p").stop().animate({
                    marginLeft:'0px'
                });
                $(".nav span").css({
                    color:"#000",
                    background:'url("../static/img/list1/nav.png")',
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"center right"
                })
                $(".nav_list a").css({
                    color:"#000"
                })
                $(".nav_list .arrar").css({
                    "border-color":"transparent transparent transparent #000"
                })
            }
            if(index == 3){
                //当页面滚动到第二页的时候，上边的竖条进入；
                $(".left_top_con_shu5").stop().animate({
                    top:'0px'
                });
                //当页面滚动到第二页的时候，上边的文字进入；
                $(".left_top .left_top_con .left_top_con_wenzi5 p").stop().animate({
                    marginLeft:'0px'
                });
                $(".list_section3_bottom .list_section3").stop().animate({
                    bottom:0
                },500);
                $(".summary1").stop().animate({
                    top:"134px"
                },1000)
            }
            if(index == 4){
                //当页面滚动到第四页的时候，上边的竖条进入；
                $(".left_top_con_shu6").stop().animate({
                    top:'0px'
                });
                //当页面滚动到第二页的时候，上边的文字进入；
                $(".left_top .left_top_con .left_top_con_wenzi6 p").stop().animate({
                    marginLeft:'0px'
                });
                $(".list_section4_bottom .list_section4").stop().animate({
                    bottom:0
                },500);
                $(".summary2").stop().animate({
                    top:"0"
                },1000)

            }
            //滚动到第五页出现的效果；
            if(index == 5){
                //当页面滚动到第四页的时候，上边的竖条进入；
                $(".left_top_con_shu7").stop().animate({
                    top:'0px'
                });
                //当页面滚动到第二页的时候，上边的文字进入；
                $(".left_top .left_top_con .left_top_con_wenzi7 p").stop().animate({
                    marginLeft:'0px'
                });
                $(".list_section5_bottom .list_section5").stop().animate({
                    bottom:0
                },500);
                $(".summary3").stop().animate({
                    top:"0"
                },1000)
            }
            //滚动到第五页出现的效果；
            if(index == 6){
                //当页面滚动到第四页的时候，上边的竖条进入；
                $(".left_top_con_shu8").stop().animate({
                    top:'0px'
                });
                //当页面滚动到第二页的时候，上边的文字进入；
                $(".left_top .left_top_con .left_top_con_wenzi8 p").stop().animate({
                    marginLeft:'0px'
                });
            }
            if(index == 7){
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
        onLeave: function(index, nextIndex ,direction){


        }
    });
});