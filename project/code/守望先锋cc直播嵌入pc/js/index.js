$(function () {

    $.ajax({
        type: "get",
        url: "http://192.168.0.221:8008/esports/x_huan/gs",
        success: function (response) {
            console.log(response);
        }
    });

    /**
     * 以下模板渲染在请求数据完成后调用
     */
    // 小组赛赛程
    document.getElementById('groupMatchesSchedule').innerHTML = template("groupMatchesSchedule_template",{
        myData: groupMatchesSchedule
    });
    // 小组赛积分排名
    document.getElementById('groupRanking').innerHTML = template("groupRanking_teamplate",{
        myData: groupIntegralRanking
    });

    // // 复赛对阵图
    // document.getElementById('againstChartBox').innerHTML = template("againstChart_teamplate",{
    //     myData: repetitionData
    // });

    // 战队数据
    document.getElementById('teamDataBox').innerHTML = template("teamData_teamplate",{
        myData: teamData,
        teamInfo:nowTeamInfo
    });


    // 赛事数据 比赛列表
    document.getElementById('matchList').innerHTML = template("matchList_teamplate",{
        myData: matchData
    });

    // 赛事数据 比赛详情
    document.getElementById('matchInfo').innerHTML = template("matchData_teamplate",{
        myData: nowMatchInfo
    });

   
    /**
     * 初始化 
     * 添加点击事件等
     * 在获取数据完成并且对应模板渲染完成后再调用
    */
    Init();


})