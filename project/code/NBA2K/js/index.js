var isKing = true;

// 数据请求
function getFight(parameter) {  
    $.ajax({
        type: "get",
        url: "/e/extend/api/index.php?m=nbamatch&c=nbamatch",
        data:parameter,
        success: function (res) {
            if(res.success) {
                // console.log(res.data);
                var data = {
                    fightData:res.data,
                    isKing: isKing
                }
                var html = template("team_charts_box_template",data);
                document.getElementById('tab_box').innerHTML = html;
                if(isKing) {
                    $('.data_details .tab_title .tabs:nth-child(1)').text('选手胜率');
                } else {
                    $('.data_details .tab_title .tabs:nth-child(1)').text('团队胜率');
                }
                tabClick();
                teamInfoClick();
                starSwiper();
            }
        },
        error:function (data) {
            // console.log(data.result);
        }
    });
}
// 返回顶部
function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(currentScroll);
    // ie浏览器返回顶部会有2px的距离 
    if (currentScroll > 2) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo (0,currentScroll - (currentScroll/5));
    }
};
function closeVideo() {
    document.getElementById("videoBox").classList.add("closeVideo");
}
function openVideo() {
    document.getElementById("videoBox").classList.remove("closeVideo");
}
// 团队胜率、球星胜率、阵容数据切换
function tabClick() {  
    $('.data_details .tab_title .tabs').click(function (e) { 
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.data_details .tab_box .data_box').eq(i).addClass('active').siblings().removeClass('active');
        e.preventDefault();
        
    });
}
// 团队胜率队伍详情切换
function teamInfoClick() {  
    $('.data_details .tab_box .charts_box .team_charts_box').click(function (e) { 
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.data_details .tab_box .team_data_box .team_data').eq(i).addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
}
// 球星数据简单轮播 
function starSwiper() {  
    var pos = 0;
    var totalSlides = $('.star_data_ul .star_ranking_item').length;
    var sliderWidth = $('.qiuxing_data .star_data .star_ranking_item').width();
	$('.qiuxing_data .next').click(function(){
		slideRight();
	});
	$('.qiuxing_data .prev').click(function(){
		slideLeft();
	});
    function slideLeft(){
        pos--;
        if(pos==-1){ pos = totalSlides-1; }
        $('.star_data_ul').css('left', -(sliderWidth*pos)); 	
    }
    function slideRight(){
        pos++;
        if(pos==totalSlides){ pos = 0; }
        $('.star_data_ul').css('left', -(sliderWidth*pos)); 
    }
}

$(function () {
    getFight();
    // banner效果
    $(".banner").mousemove(function (e) {
        var x = e.originalEvent.x || e.originalEvent.layerX || 0;
        var y = e.originalEvent.y || e.originalEvent.layerY || 0;
        var ww = window.innerWidth / 2;
        var wh = window.innerHeight / 2;
        x -= ww, y -= wh;
        // slogan  decorate  leagueLogo tag
        $(".slogan").css({
            "transform": 'rotateY(' + (x * 0.005) + 'deg) rotateX(' + (-y * 0.005) +
                'deg) translate(' + x *
                0.02 + 'px,' + y * 0.02 + 'px)',
        });
        $(".leagueLogo").css({
            "transform": 'translate(' + x * -0.03 + 'px,' + y * -0.03 + 'px)',
        });
        $(".decorate").css({
            "transform": 'translate(' + x * 0.01 + 'px,' + y * 0.01 + 'px)',
        });
        $(".tag").css({
            "transform": 'translate(' + x * 0.05 + 'px,' + y * 0.05 + 'px)',
        });
    });
    // 滚动给电梯导航添加选中效果
    $(window).scroll(function(){
        var top = $(document).scrollTop(); 
        var menu = $(".navigation");  
        var items = $(".anchor");  
        var curId = ""; 
        // console.log(top);
        if(top > 1000 ) {
            $(".elevator").css({
                "opacity":"1"
            })
        } else {
            $(".elevator").css({
                "opacity":"0"
            })
        }
        items.each(function(){
            var m = $(this); 
            var itemsTop = m.offset().top;        
            if(top > itemsTop-100){
                curId = "#" + m.attr("id");
            }else{
                return false;
            }
        });
        var curLink = menu.find(".active");
        if( curId && curLink.attr("href") != curId ){
            curLink.removeClass("active");
            menu.find( "[href=" + curId + "]" ).addClass("active");
        }
    });

    
})


