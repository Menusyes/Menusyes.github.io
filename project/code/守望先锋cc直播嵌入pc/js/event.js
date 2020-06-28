/**
 * 初始化 
 * 添加点击事件等
 * 在获取数据完成后再调用
 */
function Init() {
    var isMatchData = false; //赛事数据是否已经加载
    var mySwiper = new Swiper('.schedule_title .swiper-container', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.schedule_button_prev',
            prevEl: '.schedule_button_next',
        },
        slidesPerView: 6,
        spaceBetween: 7,
        slidesPerGroup: 6,
    })
    
    // mySwiper.slideTo(groupMatchesSchedule.nowWeek-1, 1000, false);//切换到第一个slide，速度为1秒

    $('.schedule_title .swiper-slide').click(function (e) {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.schedule_body .schedule_body_item').eq(i).addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
    /**
     * 顶部战队数据、赛事积分、赛事数据切换
     * 添加点击事件
     */
    $('.tab_title .tab_title_item').click(function (e) {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab_body .tab_body_item').eq(i).addClass('active').siblings().removeClass('active');
        if (!isMatchData && i == 2) {
            var matchSwiper = new Swiper('.match_list .swiper-container', {
                direction: 'horizontal',
                // slidesPerView :'auto',
                navigation: {
                    nextEl: '.match_list_button_prev',
                    prevEl: '.match_list_button_next',
                },
                slidesPerView: 5,
                spaceBetween: 24,
                slidesPerGroup: 5,
            });
            isMatchData = true;
            
            $(".tab_body .match_data .match_list .match_list_item").eq(matchData.now_match_index).click();
        }
        e.preventDefault();
    });

    /**
     * 赛事积分
     * 常规赛、季中赛、季后赛
     * 添加点击事件
     * 季中赛、季后赛已实现不可点击
     */
    $('.match_integral .integral_tab .integral_tab_title').click(function (e) {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.match_integral .integral_tab_body .integral_tab_body_item').eq(i).addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });


    /**
     * 赛事积分
     * 小组赛
     * 小组积分榜
     * 添加点击事件
     */
    $('.group_right .ranking_title .ranking_title_item').click(function (e) {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.group_right .ranking_body .ranking_body_item').eq(i).addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });



    /**
     * 战队数据
     * 选手信息切换
     * 添加点击事件
     */
    $('.teamTab_body .player_box .player_item').click(function (e) {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().siblings('.player_info').children(".player_info_item").eq(i).addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });


    /**
     * 赛事数据
     * 每场比赛切换
     * 添加点击事件
     * 并使滚动到指定位置
     */
    $('.tab_body .match_data .match_list .match_list_item').click(function (e) {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });

    $(".schedule_title .swiper-container .swiper-slide").eq(groupMatchesSchedule.now_week-1).click();

}

/**
 *赛事数据切换
 *请求在此处发送即可 
 * @param matchId {Number} 比赛id
 */
function matchSwitch(matchId) {
    if (matchId == 0) {
        nowMatchInfo.status = 0;
    } else if (matchId == 1) {
        nowMatchInfo.status = 1;

    } else if (matchId == 2) {
        nowMatchInfo.status = 2;
    }
    // 赛事数据 比赛详情
    // 重新发请求
    // 重新渲染模板
    document.getElementById('matchInfo').innerHTML = template("matchData_teamplate", {
        myData: nowMatchInfo
    });

}


/**
 * 比赛详情数据
 * 小局
 * 添加点击事件
 * 展示对应的小场
 */
function smallMatchClick(ele,index,isdoing) {  
    $(ele).addClass('active').siblings().removeClass('active');
    if(!isdoing) { //进行中不需要切换下方展示
        $('.tab_body .match_data .match_info .small_match_boxs .small_match_item').eq(index).addClass('active').siblings().removeClass('active');
    }
}


/**
 * 战队数据
 * 战队切换
 * 添加点击事件
 * @param team_id {Number} 战队id
 */
function teamClick(team_id, ele, from) {
    // console.log(team_id);
    // console.log(ele);
    $(ele).addClass('active').siblings().removeClass('active');
    if (from == "left") {
        $('.teamTab_title .teamTab_title_rigth').children(".teamTab_title_item").removeClass('active');
    } else {
        $('.teamTab_title .teamTab_title_left').children(".teamTab_title_item").removeClass('active');

    }
    e.preventDefault();
    // 战队数据 战队详情
    // 重新发请求
    // 重新渲染模板
    
}