$(function () {


    /**
     * 赛事积分
     * 小组赛
     * 小组积分榜
     * 添加点击事件
     */
    $('.match_integral .ranking_title .ranking_title_item').click(function (e) {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.match_integral .ranking_body .ranking_body_item').eq(i).addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
    $('.team_data .ranking_title .ranking_title_item').click(function (e) {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.team_data .ranking_body .ranking_body_item').eq(i).addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });

})

// 展示选择框
function showTab() {  
    $('#app .select_box_list').addClass("show");
    $('#app .select_mask').addClass("show");
}
// 切换整体TAB并关闭选择框
function hideTab(to) {  
    $('#app .select_mask').removeClass("show");
    $('#app .select_box_list').removeClass("show");
    if(to == 1) { //赛事积分
        $('#app>.match_integral').addClass("show");
        $('#app>.team_data').removeClass("show");
        $('#app>.match_data').removeClass("show");
    } else if(to == 2) { //战队数据
        $('#app>.match_integral').removeClass("show");
        $('#app>.team_data').addClass("show");
        $('#app>.match_data').removeClass("show");
    } else if(to == 3) { //赛事数据
        $('#app>.match_integral').removeClass("show");
        $('#app>.team_data').removeClass("show");
        $('#app>.match_data').addClass("show");
    }
}
// 展示比赛详情
function goToMatchInfo(form) {  
    $('#app>.match_integral').removeClass("show");
    $('#app>.team_data').removeClass("show");
    $('#app>.match_data').removeClass("show");
    $('#app>.match_info').addClass("show");
    // 临时调试用 0未开始 1进行中 2已结束
    if(form == 0) {
        $('#app>.match_info>.notStart').addClass("show");
    } else if(form == 1) {
        $('#app>.match_info>.doing').addClass("show");
    } else if(form == 2) {
        $('#app>.match_info>.over').addClass("show");
    }
}
// 比赛详情返回比赛列表
function goBackMatchData() {  
    $('#app>.match_info').removeClass("show");
    $('#app>.match_data').addClass("show");

    // 临时
    $('#app>.match_info>.notStart').removeClass("show");
    $('#app>.match_info>.doing').removeClass("show");
    $('#app>.match_info>.over').removeClass("show");
}

function smallMatchClick(ele,isdoing) {  
    $(ele).addClass('active').siblings().removeClass('active');
    var i = $(ele).index();
    if(!isdoing) { //进行中不需要切换下方展示
        $('.match_info .over .teamData_and_matchData .small_match_boxs .small_match_item').eq(i).addClass('active').siblings().removeClass('active');
    }
}

// $(".match_data .match_list_box").animate({
//     scrollTop: $(".match_data .match_list_box").children().eq(1).offset().top - $(".match_data .match_list_box").offset().top
// }, 400);