
// 给元素添加点击事件
function clicks() {  
  $('.client a').click(function (e) { 
      e.preventDefault();
      if($('.title .select').hasClass('hidden')){
          $('.title .select').removeClass('hidden');
      } else {
          $('.title .select').addClass('hidden');
      }
  });
  $('.title .select li').click(function (e) { 
      e.preventDefault();
      $('.client a').text($(this).text());
      $('.title .select').addClass('hidden');
  });
  $(".match .match_item .match_title").click(function (e) { 
      e.preventDefault();
      if($(this).next().hasClass('unfold')){
          $(this).next().removeClass('unfold');
      } else {
          $(this).next().addClass('unfold');
      }
  });

  $('.match .match_title .is_top').click(function (e) { 
      e.stopPropagation();
      var stickBox = $('.match .stick_box');
      var notStickBox = $('.match .not_stick_box');
      $(this).parent().next().addClass('unfold');
      if($(this).hasClass('stick')){
          $(this).removeClass('stick');
          $(this).parents('.match_item').slideUp('normal');
          setTimeout(() => {
              $(this).parents('.match_item').prependTo(notStickBox).slideDown('normal');
              
          }, 500);
          
      } else {
          $(this).addClass('stick');
          $(this).parents('.match_item').slideUp('normal');
          setTimeout(() => {
              $(this).parents('.match_item').appendTo(stickBox).slideDown('normal');
          }, 500);
          
      }
      
  });
}
// 删选游戏
function filtrateEvents() {  
  $('.filtrate_menu').click(function (e) { 
    $(this).parent().addClass('active');
    $('.filtrate_games').addClass('show');
    $('.shade').addClass('show');
  });
  $('.shade').click(function (e) { 
    $('.filtrate_box').removeClass('active');
    $('.filtrate_games').removeClass('show');
    $(this).removeClass('show');
  });
  $('.filtrate_box .confirm').click(function (e) { 
    $('.filtrate_box').removeClass('active');
    $('.filtrate_games').removeClass('show');
    $('.shade').removeClass('show');
  });
  $('.games_box .game_item').click(function (e) { 
    // $(this).addClass();
    if($(this).hasClass('game_all')) {
      // 是全部游戏
      
      if($(this).hasClass('active')) {
        // 有选择
        $(this).removeClass('active');
        $(this).siblings().addClass('active');
      } else {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
      }
    } else {
      // 不是全部游戏
      $('.games_box .game_all').removeClass('active');
      if($(this).hasClass('active')) {
        // 有选择
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
      }
    }
    if(!$('.games_box .game_item').hasClass('active')) {
      // 没有选中的
      $('.games_box .game_all').addClass('active');
    }
  });
}
// 折线图
function setLineEcharts(eleName, todayColor, yesterdayData, todayData, times) {
  var dom = document.querySelector(eleName);
  var myChart = echarts.init(dom);
  option = null;
  option = {
    backgroundColor: "#292E36",
    grid: {
      top: "15%",
      left: "14%",
      right: "4%",
      bottom: "13%"
    },
    dataZoom: [{
      type: "inside",
      minValueSpan: 2,
      startValue: todayData.length >= 7 ? todayData.length - 7 : 0,
      endValue: todayData.length - 1
    }],
    xAxis: {
      type: "category",
      // data: ['8:15', '8:25', '8:35'],
      data: times,
      axisLine: {
        lineStyle: {
          color: "#465981",
          width: 1,
          type: "dashed"
        }
      },
      axisLabel: {
        color: "#768199"
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      position: "left",
      //   max: that.lineMax,
      //   min: that.lineMin,
      axisLine: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#494D54",
          type: "dashed"
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#768199",
      }
    },

    series: [{
        //   data: [20, 18, 2],
        data: todayData,
        type: "line",
        itemStyle: {
          opacity: 0
        },
        lineStyle: {
          color: todayColor,
          width: 3
        }
      },
      {
        //   data: [5, 10, 15],
        data: yesterdayData,
        type: "line",
        itemStyle: {
          opacity: 0
        },
        lineStyle: {
          type: "dashed",
          color: "#7CD281"

        }

      }
    ]
  };
  if (option && typeof option === "object") {
    myChart.setOption(option, true);
  }
}
// 比赛项 Charts图
function setMatchEcharts(eleName,data) {
  // var dom = document.querySelectorAll(eleName);
  var myChart = echarts.init(eleName);
  option = null;
  // var datas = ['获得全场胜利', '第一滴血', '第一座防御塔', '首先获得十杀'];
  function team(num) {
    if (num > 0) {
      return '队伍A';
    } else if (num < 0) {
      return '队伍B';
    } else {
      return '无投注';
    }
  }
  option = {
    backgroundColor: "#2F343D",
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: { // 坐标轴指示器，坐标轴触发有效
    //     type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    //   },
    //   formatter: function (params, ticket, callback) {
    //     console.log(params);
    //     var showHtm = "";
    //     showHtm += '时间：' + params[0].name + '<br>';
    //     for (var i = 0; i < params.length; i++) {
    //       var name = params[i].seriesName;
    //       var value = params[i].data;
    //       showHtm += '&nbsp;&nbsp;' + params[i].marker + '&nbsp;' + name + '：' + team(value) + "--" + Math.abs(value) + '<br>'
    //     }
    //     return showHtm;
    //   }
    // },
    grid: {
      left: "6%",
      right: "1%",
      bottom: "10%"
    },
    legend: {
      type: "plain",
      // data: ['获得全场胜利', '第一滴血', '第一座防御塔', '首先获得十杀'],
      // data: datas,
      textStyle: {
        color: '#fff'
      },
      itemGap: 20,
      left: "1%",
      top: "1%",
      itemWidth: 15,
      itemHeight: 15
    },
    xAxis: {
      // type : 'value',
      // position: 'top',
      // splitLine: {lineStyle:{type:'dashed'}},
      axisLine: {
        show: false
      },
      axisTick: {
        show: false

      },

      axisLabel: {
        show: false
      },
      data: []
    },
    yAxis: {
      type: "value",
      position: "left",
      //   max: that.lineMax,
      //   min: that.lineMin,
      axisLine: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#383D44",
          // type: "dashed"
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#646F82",
        formatter:function (value) {  
          return Math.abs(value);
        }
      }
    },
    series:data
    // series: [
    //   {
    //     name: '获得全场胜利',
    //     type: 'bar',
    //     barWidth:13,
        
    //     // label: {
    //     //     show: true,
    //     //     formatter:'{c}'
    //     // },
    //     // data: [-7,-9,2,44,44,44,44,44,44,44,],
    //     data: [-7],
    //     itemStyle: {
    //       normal: {
    //         color: '#13B9F1',
    //         barBorderRadius:  [0,0,5,5],
    //       },
    //     },
    //   },
    //   {
    //     name: '第一滴血',
    //     type: 'bar',
    //     barWidth:13,
    //     // label:{
    //     //   show:true  
    //     // },
    //     // data: [18,18,-2,8,8,8,8,8,8,8],
    //     data: [18],
    //     itemStyle: {
    //       color: "#FFB13D",
    //       barBorderRadius:  [5,5,0,0],
    //     }

    //   },
    //   {
    //     name: '第一座防御塔',
    //     type: 'bar',
    //     barWidth:13,
    //     // label:{
    //     //     show:true

    //     // },
    //     // data: [-18, -3, 4, -5, -5, -5, -5, -5, -5, -5],
    //     data: [-18],
    //     itemStyle: {
    //       color: "#70FFA1",
    //       barBorderRadius:  [0,0,5,5],
    //     }
    //   },
    //   {
    //     name: "首先获得十杀",
    //     type: "bar",
    //     barWidth:13,
    //     // data: [1, -2, -30, 2, 2, 2, 2, 2, 2, 2],
    //     data: [10],
    //     itemStyle: {
    //       color: "#FF4D4D",
    //       barBorderRadius:  [5,5,0,0],
    //     }
    //   },
    // ]
  };
  if (option && typeof option === "object") {
    myChart.setOption(option, true);
  }
}
// 比赛项 charts图生成假数据
function buildChartsData(matchChartsData,chartsData,chartsType) {  
  // 0 获得全场胜利  1 第一滴血   2 第一座防御塔   3 首先获得十杀
  for(var i = 0; i < 100; i++) {
      chartsData = randomNum(-30,30);
      chartsType = randomNum(0,3);
      matchChartsData.push(
          {
              name: getChartsType(chartsType),
              type: 'bar',
              barWidth:13,
              data: [chartsData],
              // label: {
              //     show: true,
              //     formatter:function (param) {  
              //       return Math.abs(param.data)
              //     },
              //     position: getChartsLabelPosition(chartsData)
              // },
              itemStyle: {
                  normal: {
                      color: getChartsColor(chartsType),
                      barBorderRadius:  getChartsRadius(chartsData) == 0 ? [5,5,0,0] : [0,0,5,5],
                  },
              },
          },
      )
  }
}
// 返回 minNum --> maxNum 的随机整数
function randomNum(minNum,maxNum){ 
  switch(arguments.length){ 
      case 1: 
          return parseInt(Math.random()*minNum+1,10); 
      break; 
      case 2: 
          return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
      break; 
      default: 
          return 0; 
      break; 
  } 
} 
// 返回 charts 类型 临时这样 后续类型不定
function getChartsType(type) { 
  switch(type){
      case 0:
          return '获得全场胜利';
          break;
      case 1:
          return '第一滴血';
          break;
      case 2:
          return '第一座防御塔';
          break;
      case 3:
          return '首先获得十杀';
          break;
      default: 
        return ''; 
        break; 

  } 
}
// 返回 charts 颜色 临时这样 后续类型不定
function getChartsColor(type) { 
  switch(type){
      case 0:
          return '#13B9F1';
          // break;
      case 1:
          return "#FFB13D";
          // break;
      case 2:
          return "#70FFA1";
          // break;
      case 3:
          return "#FF4D4D";
          // break;

  } 
}
// 返回 charts 圆角 根据数据正负来判断
function getChartsRadius(data) { 
  if(data >= 0) {
      return 0;
  } else {
      return 1;
  }
}
function getChartsLabelPosition(chartsData) {  
  if(chartsData >=0 ) {
    return 'top';
  } else {
    return 'bottom'
  }
}
