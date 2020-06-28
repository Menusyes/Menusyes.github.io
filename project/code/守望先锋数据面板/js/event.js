
/**
 * 初始化 
 * 添加点击事件等
 * 在获取数据完成后再调用
*/
function Init() {
    /**
     * 顶部战队数据、赛事积分、赛事数据切换
     * 添加点击事件
    */
   $('.tab_title .tab_title_item').click(function (e) { 
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab_body .tab_body_item').eq(i).addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });

    /**
     * 赛事积分
     * 预赛、小组赛、复赛
     * 添加点击事件
     * 预赛已实现不可点击
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
     * 赛程切换 （第一周、第二周）
     * 添加点击事件
    */
    // $('.group_left .schedule_title .schedule_title_item').click(function (e) { 
    //     var i = $(this).index();
    //     $(this).addClass('active').siblings().removeClass('active');
    //     $('.group_left .schedule_body .schedule_body_item').eq(i).addClass('active').siblings().removeClass('active');
    //     e.preventDefault();
    // });

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
     * 战队切换
     * 添加点击事件
    */
    $('.tab_body .team_data .teamTab_title .teamTab_title_item').click(function (e) { 
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab_body .team_data .teamTab_body .teamTab_body_item').eq(i).addClass('active').siblings().removeClass('active');
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
     * 战队数据
     * 队伍胜率进度条
    */
    $(".winRate").circleChart({
        size:$(".winRate").width(),
        startAngle: 75,
        // value: 70,
        text: 0,
        textSize:"22px",
        textWeight: "bold",
        textFamily: "Industry",
        onDraw: function(el, circle) {
            circle.text(Math.round(circle.value) + '%');
        },
        color: "#119BDA",
        lineCap:'butt',
        backgroundColor:"#4A4C52",
        widthRatio: 0.15,
    });

    /**
     * 战队数据
     * 选手信息切换
     * 添加点击事件
     * 并使滚动到指定位置
    */
   $('.tab_body .match_data .match_list .match_list_item').click(function (e) { 
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');

        $(".match_data .match_list").animate({
            scrollTop: $(this).offset().top - $(".match_data .match_list").offset().top
        }, 400);
        e.preventDefault();
    });


}

/**
 *赛事数据切换
 *请求在此处发送即可 
 * @param matchId {Number} 比赛id
*/
function matchSwitch(matchId) {  
    // console.log(matchId);
    //获取到的新数据
    var newData= {
        teamA_id: 0,
        teamB_id: 0,
        match_id: 1,
        status: 0,
        time: '10-15 10:00',
        teamA_name: "哈哈哈",
        teamA_score: 0,
        teamA_player: [
            {
                nick_name: "111",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190528165113/2b9045daa4f8653e0a89558c8dd66dde/0",
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
            },
            {
                nick_name: "222",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190528164644/b44862166a1eb26b0aabff92d344d5a4/0",
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
            },
            {
                nick_name: "333",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190625112105/1a9f9b6cdcdb21e5c98d5bb2960c4643/0",
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
            },
            {
                nick_name: "444",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190625112105/1a9f9b6cdcdb21e5c98d5bb2960c4643/0",
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
            },
        ],
        teamB_name: "嘻嘻嘻",
        teamB_score: 1,
        teamB_player: [
            {
                nick_name: "555",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190528165113/2b9045daa4f8653e0a89558c8dd66dde/0",
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
            },
            {
                nick_name: "666",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190528164644/b44862166a1eb26b0aabff92d344d5a4/0",
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
            },
            {
                nick_name: "777",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190625112105/1a9f9b6cdcdb21e5c98d5bb2960c4643/0",
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
            },
            {
                nick_name: "888",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190625112105/1a9f9b6cdcdb21e5c98d5bb2960c4643/0",
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
            },
        ],
        small_score: [
            {
                teamA_score: '-',
                teamB_score: '1',
            },
            {
                teamA_score: '0',
                teamB_score: '-',
            },
            {
                teamA_score: '-',
                teamB_score: '-',
            },
            {
                teamA_score: '-',
                teamB_score: '-',
            },
        ]
    };
    nowMatchInfo = newData; //替换比赛详情的数据
    // 重新渲染模板
    // 赛事数据 比赛详情
    document.getElementById('matchInfo').innerHTML = template("matchData_teamplate",{
        myData: nowMatchInfo
    });
}

/**
 * 赛事积分比赛点击
 * 小组赛比赛、复赛比赛
 * @param matchId {Number} 比赛id
*/
function matchClick(match_id) {  
    console.log(match_id);
    $('.tab_title .match_data').click();//触发顶部tab(赛事数据)的点击事件
    // 然后通过比赛id 获取到在列表中的索引  
    // 用改索引 通过 $('.tab_body .match_data .match_list .match_list_item').eq(index).click();
    // 获取到对应的元素 并触发点击事件即可
    $('.tab_body .match_data .match_list .match_list_item').eq(3).click();

}
