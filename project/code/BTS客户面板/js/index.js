$(function(){
    // tips提示初始化
    $.minimalTips();
    // 添加点击事件
    clicks();
    // 筛选游戏系列事件
    filtrateEvents();
    var times = ['8:15', '8:25', '8:35', '8:35', '8:35', '8:35', '8:35', '8:35', '8:35'];
    var yesterdayData = [5, 10, 15, 25, 35, 45, 35, 15, 55];
    var todayData = [55, 10, 45, 15, 15, 15, 15, 15, 15];
    setLineEcharts(".statistics .participation .charts-box","#13B6EE",yesterdayData,todayData,times);
    setLineEcharts(".statistics .bet .charts-box","#EE8813",yesterdayData,todayData,times);
    var matchChartsData = [];
    var chartsData;
    var chartsType;
    buildChartsData(matchChartsData,chartsData,chartsType);
    document.querySelectorAll('.match .match_item  .match_charts').forEach(ele => {
        setMatchEcharts(ele,matchChartsData);
    })
});
