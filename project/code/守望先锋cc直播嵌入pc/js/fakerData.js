
/**
 * 赛事积分-> 赛程
 * @param nowWeek {Number} 当前应该定位到第几周索引 需要-1
 * @param game_id {Number} 比赛id
 * @param year {String} 年
 * @param date {String} 月日
 * @param time {String} 时间
 * @param status {Number} 比赛状态 0：未开始 1：进行中 2：已结束
 * @param area {String} 比赛所在地区
 * @param team_a_name {String} 队伍名称
 * @param team_a_id {Number} 队伍id
 * @param team_a_score {Number} 队伍比分 未开始不会展示
 * @param team_a_icon {String} 队伍图标
*/
var groupMatchesSchedule = {
    now_week: 2,
    data: [
        {
            title:"第一周",
            match_list: [
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 2,
                    team_a_name: "中国中国中国中国",
                    team_a_score: 0,
                    team_b_name: "丹麦丹麦丹麦丹麦",
                    team_a_id: 562,
                    team_b_id: 567,
                    team_b_score: 1,
                    area: "太平洋",
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
    
                },
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 2,
                    team_a_name: "中国中国中国中国",
                    team_a_score: 0,
                    team_b_name: "丹麦丹麦丹麦丹麦",
                    team_a_id: 562,
                    team_b_id: 567,
                    team_b_score: 1,
                    area: "太平洋",
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 2,
                    team_a_name: "中国中国中国中国",
                    team_a_score: 0,
                    team_b_name: "丹麦丹麦丹麦丹麦",
                    team_a_id: 562,
                    team_b_id: 567,
                    team_b_score: 1,
                    area: "太平洋",
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 2,
                    team_a_name: "中国中国中国中国",
                    team_a_score: 0,
                    team_b_name: "丹麦丹麦丹麦丹麦",
                    team_a_id: 562,
                    team_b_id: 567,
                    team_b_score: 1,
                    area: "太平洋",
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 2,
                    team_a_name: "中国中国中国中国",
                    team_a_score: 0,
                    team_b_name: "丹麦丹麦丹麦丹麦",
                    team_a_id: 562,
                    team_b_id: 567,
                    team_b_score: 1,
                    area: "太平洋",
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
            ],
        },
        {
            title:"第二周",
            match_list: [
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 2,
                    team_a_name: "中国中国中国中国",
                    team_a_score: 0,
                    team_b_name: "丹麦丹麦丹麦丹麦",
                    team_a_id: 562,
                    team_b_id: 567,
                    team_b_score: 1,
                    area: "太平洋",
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
            ],
        },
        {
            title:"第三周",
            match_list: [
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
            ],
        },
        {
            title:"第四周",
            match_list: [
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
            ],
        },
        {
            title:"第五周",
            match_list: [
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
            ],
        },
        {
            title:"第六周",
            match_list: [
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
            ],
        },
        {
            title:"第七周",
            match_list: [
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
            ],
        },
        {
            title:"第八周",
            match_list: [
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
            ],
        },
        {
            title:"第九周",
            match_list: [
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
            ],
        },
        {
            title:"第十周",
            match_list: [
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
            ],
        },
        {
            title:"第十一周",
            match_list: [
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
            ],
        },
        {
            title:"第十二周",
            match_list: [
                {
                    game_id: 0,
                    date: "08-17",
                    year:"2019",
                    time: "11:00",
                    status: 0,
                    area: "大西洋",
                    team_a_id: 562,
                    team_a_name: "中国",
                    team_a_score: 0,
                    team_b_id: 567,
                    team_b_name: "丹麦",
                    team_b_score: 1,
                    team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                    team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                },
            ],
        },
    ]
}

/**
 * 赛事积分-> 小组积分榜
 * @param title {String} 赛程标题
 * @param rankingList {Array} 排名列表
 * @param ranking {Number} 名次
 * @param team_id {Number} 队伍id
 * @param team_name {String} 队名
 * @param team_icon {String} 队伍图标
 * @param map_win {Number} 地图战绩胜利
 * @param map_lose {Number} 地图战绩失败
 * @param team_win {Number} 比赛战绩胜利
 * @param team_lose {Number} 比赛战绩失败
 * @param score {Number} 净胜分
*/
var groupIntegralRanking = [
    {
        title: "太平洋赛区",
        rankingList: [
            {
                ranking: 1,
                team_id: 562,
                team_name: "中国",
                team_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
                map_win: 11,
                map_lose: 5,
                team_win: 10,
                team_lose: 6,
                score: 19,
            },
            {
                ranking: 2,
                team_id: 562,
                team_name: "中国",
                map_win: 12,
                map_lose: 5,
                team_win: 10,
                team_lose: 6,
                score: 5,
                team_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            },
            {
                ranking: 3,
                team_id: 567,
                team_name: "中国",
                map_win: 13,
                map_lose: 4,
                team_win: 10,
                team_lose: 6,
                score: 0,
                team_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            },
            {
                ranking: 4,
                team_id: 567,
                team_name: "中国",
                map_win: 14,
                map_lose: 3,
                team_win: 10,
                team_lose: 6,
                score: -5,
                team_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            },
            {
                ranking: 5,
                team_id: 567,
                team_name: "中国",
                map_win: 14,
                map_lose: 3,
                team_win: 10,
                team_lose: 6,
                score: -9,
                team_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            },
            {
                ranking: 6,
                team_id: 567,
                team_name: "中国",
                map_win: 14,
                map_lose: 3,
                team_win: 10,
                team_lose: 6,
                score: -9,
                team_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            },
            {
                ranking: 7,
                team_id: 567,
                team_name: "中国",
                map_win: 14,
                map_lose: 3,
                team_win: 10,
                team_lose: 6,
                score: -9,
                team_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            },
            {
                ranking: 8,
                team_id: 567,
                team_name: "中国",
                map_win: 14,
                map_lose: 3,
                team_win: 10,
                team_lose: 6,
                score: -9,
                team_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            },
            {
                ranking: 9,
                team_id: 567,
                team_name: "中国",
                map_win: 14,
                map_lose: 3,
                team_win: 10,
                team_lose: 6,
                score: -9,
                team_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            },
        ]
    },
    {
        title: "大西洋赛区",
        rankingList: [
            {
                ranking: 1,
                team_id: 567,
                team_name: "中国",
                map_win: 11,
                map_lose: 5,
                team_win: 10,
                team_lose: 6,
                score: 19,
                team_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            },
        ]
    }
]

/**
 *战队列表
 * @param area_a {Object} 赛区a
 * @param area_b {Object} 赛区b
 * @param title {String} 赛区名称
 * @param teams {Array} 赛区队伍列表
 * @param team_id {Number} 队伍id
 * @param team_name {String} 队名
 * @param team_icon {String} 队伍图标
*/
var teamData = {
    area_a : {
        title: "太平洋赛区",
        teams: [
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦火",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            
        ]
    },
    area_b : {
        title: "大西洋赛区",
        teams: [
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            {   
                team_id: 567,
                team_name: "伦敦喷火战斗机队战斗机队战斗机队",
                team_icon: "https://www.xxdianjing.com/data/upload/20181001/5bb12849a37a1.png"
            },
            
        ]
    },
}

/**
 * 当前展示的战队详情
 * @param team_id {Number} 队伍id
 * @param team_name {String} 队名
 * @param team_icon {String} 队伍图标
 * @param win_rate {Number} 胜率 此处为 处理过的*100后的整数
 * @param score_win_num {Number} 比赛胜利场次
 * @param score_lose_num {Number} 比赛失败场次
 * @param map_win_num {Number} 地图胜利场次
 * @param map_lose_num {Number} 地图失败场次
 * @param five_score_win_num {Number} 近五场胜利场次
 * @param five_score_lose_num {Number} 近五场失败场次
 * @param score {Number} 近五张地图得分
 * @param maps {Array} 四张地图比分
 * @param map_item_type {Array} 地图类型 0：占领要点、1：运载作战、2：攻防作战、3：攻防运载
 * @param map_item_win_rate {Array} 每张地图胜率 此处为 处理过的*100后的整数
 * @param map_item_win {Array} 每张地图胜利次数
 * @param map_item_lose {Array} 每张地图失败次数
 * @param player {Array} 队伍选手列表
 * @param nick_name {String} 选手名称
 * @param icon {String} 选手图片
 * @param location {Number} 位置 0：输出 1：坦克 2：辅助
 * @param location_icon {String} 位置图标
 * @param heros {Array} 擅长英雄列表
 * @param enemy {Object} 天敌
 * @param enemy_icon {String} 天敌队伍图标
 * @param enemy_name {String} 天敌队伍名称
 * @param enemy_win_rate {Number} 天敌胜率 此处为 处理过的*100后的整数
 * @param restraint {Object} 克制
 * @param restraint_icon {String} 克制队伍图标
 * @param restraint_name {String} 克制队伍名称
 * @param restraint_win_rate {Number} 克制胜率 此处为 处理过的*100后的整数
 * 
*/
var nowTeamInfo = {
    team_id: 567,
    team_name: "伦敦喷火战斗机队战斗机队战斗机队斗机队战斗机队斗机队战斗机队斗机队战斗机队",
    team_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
    win_rate: 89,
    score_win_num: 11,
    score_lose_num: 8,
    map_win_num: 15,
    map_lose_num: 22,
    five_score_win_num: 6,
    five_score_lose_num: 8,
    score: 59,
    enemy: {
        enemy_icon: "https://www.xxdianjing.com/data/upload/20171221/5a3b3905919e2.png",
        enemy_name: "伦敦喷火及几火及几",
        enemy_win_rate: 80,
    },
    restraint: {
        restraint_icon: "https://www.xxdianjing.com/data/upload/20171221/5a3b3905919e2.png",
        restraint_name: "伦敦喷",
        restraint_win_rate: 100,
    },
    maps: [
        {
            map_item_type: 0,
            map_item_win_rate: 98,
            map_item_win: 8,
            map_item_lose: 16,
        },
        {
            map_item_type: 1,
            map_item_win_rate: 80,
            map_item_win: 8,
            map_item_lose: 9,
        },
        {
            map_item_type: 2,
            map_item_win_rate: 60,
            map_item_win: 8,
            map_item_lose: 10,
        },
        {
            map_item_type: 3,
            map_item_win_rate: 77,
            map_item_win: 18,
            map_item_lose: 16,
        },
    ],
    player: [
        {
            nick_name: "Smlz",
            icon: "https://img.crawler.qq.com/lolwebvideo/20190529190628/dbbc54e61b74baa79c046416cc20d2cd/0",
            location: 0,
            heros: [
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
            ]
        },
        {
            nick_name: "Uzi",
            icon: "https://img.crawler.qq.com/lolwebvideo/20190930095439/6e76b6ad4c268979d0184fdb4f61adee/0",
            location: 0,
            heros: [
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
            ]
        },
        {
            nick_name: "The shy",
            icon: "https://img.crawler.qq.com/lolwebvideo/20190930094456/632ea320bfa4eda9ae4c4c360dac52ca/0",
            location: 0,
            heros: [
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
            ]
        },
        {
            nick_name: "Ming",
            icon: "https://img.crawler.qq.com/lolwebvideo/20190930095514/d7ad436f4c753214b942cfe93565f9a7/0",
            location: 0,
            heros: [
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
            ]
        },
        {
            nick_name: "Doinb",
            icon: "https://img.crawler.qq.com/lolwebvideo/20190930094349/d896bfda4587024c110271fe135318c5/0",
            location: 0,
            heros: [
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
                {
                    icon: "https://www.xxdianjing.com/public/style2/img/xhuan/hero/11.png",
                    name: "DVA"
                },
            ]
        },
    ],
}


/**
 * 赛事数据 比赛列表
 * @param game_id {Number} 比赛id
 * @param status {Number} 比赛状态 0：未开始 1：进行中 2：已结束
 * @param time {String} 比赛开始时间
 * @param team_a_id {Number} 队伍id
 * @param team_a_name {String} 队伍名称
 * @param team_a_icon {String} 队伍图标
*/
var matchData = {
    now_game_id: 3,
    now_match_index: 2,
    match_list: [
        {
            game_id: 0,
            time: '10-21 10:00',
            team_a_name: "中国中国中国中国中国中国",
            team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            team_b_name: "丹麦",
            team_a_id: 567,
            team_b_id: 567,
        },
        {
            game_id: 1,
            status: 2,
            time: '10-21 11:00',
            team_a_name: "中国",
            team_b_name: "丹麦",
            team_a_id: 567,
            team_b_id: 567,
            team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
        },
        {
            game_id: 2,
            status: 1,
            time: '10-21 12:00',
            team_a_name: "中国",
            team_b_name: "丹麦",
            team_a_id: 567,
            team_b_id: 567,
            team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
        },
        {
            game_id: 3,
            status: 1,
            time: '10-21 13:00',
            team_a_name: "中国",
            team_b_name: "丹麦",
            team_a_id: 567,
            team_b_id: 567,
            team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
        },
        {
            game_id: 4,
            status: 0,
            time: '10-21 14:00',
            team_a_name: "中国",
            team_b_name: "丹麦",
            team_a_id: 567,
            team_b_id: 567,
            team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
        },
        {
            game_id: 5,
            status: 0,
            time: '10-21 14:00',
            team_a_name: "中国",
            team_b_name: "丹麦",
            team_a_id: 567,
            team_b_id: 567,
            team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
        },
        {
            game_id: 6,
            status: 0,
            time: '10-21 14:00',
            team_a_name: "中国",
            team_b_name: "丹麦",
            team_a_id: 567,
            team_b_id: 567,
            team_a_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
            team_b_icon: "https://www.xxdianjing.com/data/upload/20190704/5d1d9b9d28931.png",
        }
    ]
}

/**
 * 赛事数据 当前的比赛详细信息
 * 左侧列表切换时请求到对应比赛数据后 替换此对象即可
 * @param game_id {Number} 比赛id
 * @param status {Number} 比赛状态 0：未开始 1：进行中 2：已结束
 * @param time {String} 比赛开始时间
 * @param num {Number} bo数量
 * 
 * @param team_a {Object} team_a数据
 * @param team_b {Object} team_b数据
 * @param team_id {Number} 队伍id
 * @param team_name {String} 队伍名称
 * @param team_icon {String} 队伍图标
 * @param win_rate {Number} 队伍胜率 此处为 处理过的*100后的整数
 * @param team_win {Number} 比赛胜利场次
 * @param team_lose {Number} 比赛失败场次
 * @param score {Number} 当前比分
 * @param description {String} 描述 （如：常规赛第九名）
 * @param enemy {Object} 天敌
 * @param enemy_icon {String} 天敌队伍图标
 * @param enemy_name {String} 天敌队伍名称
 * @param enemy_win_rate {Number} 天敌胜率 此处为 处理过的*100后的整数
 * @param restraint {Object} 克制
 * @param restraint_icon {String} 克制队伍图标
 * @param restraint_name {String} 克制队伍名称
 * @param restraint_win_rate {Number} 克制胜率 此处为 处理过的*100后的整数
 * @param maps {Array} 四张地图比分
 * @param map_item_type {Array} 地图类型 0：占领要点、1：运载作战、2：攻防作战、3：攻防运载
 * @param map_item_win_rate {Array} 每张地图胜率 此处为 处理过的*100后的整数
 * 
 * @param small_score {Array} 小场比分列表 跟num数量要一致
 * @param type {Number} 游戏类型  0：占领要点、1：运载作战、2：攻防作战、3：攻防运载
 * @param team_a_score {String} 小场比分 因防止数据部忘加故改成字符串 如没有比分返回 '-' 即可
 * @param team_b_score {String} 小场比分 因防止数据部忘加故改成字符串 如没有比分返回 '-' 即可
 * @param team_a_win {Bool} 队伍a是否胜利
 * @param team_b_win {Bool} 队伍b是否胜利
 * @param map_id {Number} 所选地图id 对应表找产品要
 * @param map_name {String} 所选地图名称
 * 
 * @param occupied {Object} 占领要点 type为0的时候展示
 * @param first_round {Object} 占领要点 第一轮
 * @param second_round {Object} 占领要点 第二轮
 * @param third_round {Object} 占领要点 第三轮
 * @param team_a {Number} 占领要点 百分比 此处为 处理过的*100后的整数
 * @param team_b {Number} 占领要点 百分比 此处为 处理过的*100后的整数
 * 
 * @param carry {Object} 运载作战、攻防运载数据格式 这两种一样 type为1、3的时候展示
 * @param checking {Object} 检查点
 * @param team_a {Number} team_a检查点数量
 * @param team_b {Number} team_b检查点数量
 * @param schedule {Object} 推进进度
 * @param team_a_percentage {Number} team_a推进进度百分比 此处为 处理过的*100后的整数
 * @param team_a_distance {String} team_a推进距离
 * @param team_b_percentage {Number} team_b推进进度百分比 此处为 处理过的*100后的整数
 * @param team_b_distance {String} team_b推进距离
 * @param remaining {Object} 剩余时间
 * @param team_a_time {String} team_a剩余时间
 * @param team_b_time {String} team_b剩余时间
 * 
 * @param combat {Object} 攻防作战数据格式 这两种一样 type为2的时候展示
 * @param checking {Object} 检查点
 * @param team_a {Number} 检查点数量
 * @param team_b {Number} 检查点数量
 * @param schedule {Object} 占领进度
 * @param team_a {Number} 占领进度 百分比 此处为 处理过的*100后的整数
 * @param team_b {Number} 占领进度 百分比 此处为 处理过的*100后的整数
 * @param remaining {Object} 剩余时间
 * @param team_a_time {String} team_a剩余时间
 * @param team_b_time {String} team_b剩余时间
 * 
*/
var nowMatchInfo = {
    game_id: 0,
    status: 0,
    time: '10-15 10:00',
    num: 7,
    team_a: {
        team_id: 567,
        team_name: "中国中国中国",
        team_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
        win_rate: 80,
        team_win: 14,
        team_lose: 5,
        score: 3,
        description: "常规赛第九名",
        enemy: {
            enemy_icon: "https://www.xxdianjing.com/data/upload/20171221/5a3b3905919e2.png",
            enemy_name: "伦敦喷火及几火及几",
            enemy_win_rate: 80,
        },
        restraint: {
            restraint_icon: "https://www.xxdianjing.com/data/upload/20171221/5a3b3905919e2.png",
            restraint_name: "伦敦喷",
            restraint_win_rate: 100,
        },
        maps: [
            {
                map_item_type: 0,
                map_item_win_rate: 98,
            },
            {
                map_item_type: 1,
                map_item_win_rate: 80,
            },
            {
                map_item_type: 2,
                map_item_win_rate: 60,
            },
            {
                map_item_type: 3,
                map_item_win_rate: 77,
            },
        ],
    },
    team_b: {
        team_id: 567,
        team_name: "丹麦丹麦丹麦",
        team_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
        win_rate: 90,
        team_win: 14,
        team_lose: 1,
        score: 1,
        description: "常规赛第一名",
        enemy: {
            enemy_icon: "https://www.xxdianjing.com/data/upload/20171221/5a3b3905919e2.png",
            enemy_name: "伦敦喷火及几火及几",
            enemy_win_rate: 80,
        },
        restraint: {
            restraint_icon: "https://www.xxdianjing.com/data/upload/20171221/5a3b3905919e2.png",
            restraint_name: "伦敦喷",
            restraint_win_rate: 100,
        },
        maps: [
            {
                map_item_type: 0,
                map_item_win_rate: 98,
            },
            {
                map_item_type: 1,
                map_item_win_rate: 80,
            },
            {
                map_item_type: 2,
                map_item_win_rate: 60,
            },
            {
                map_item_type: 3,
                map_item_win_rate: 77,
            },
        ],
    },
    small_score: [
        {
            type: 0,
            team_a_score: '3',
            team_b_score: '1',
            team_a_win: true,
            team_b_win: false,
            map_id: 1,
            map_name: "多拉多",
            occupied: {
                first_round: {
                    team_a: 60,
                    team_b: 30,
                },
                second_round: {
                    team_a: 30,
                    team_b: 80,
                },
                third_round: {
                    team_a: 10,
                    team_b: 9,
                },
            },
            carry: {
                checking: {
                    team_a: 6,
                    team_b: 3,
                },
                schedule: {
                    team_a_percentage: 76,
                    team_a_distance: '76.40',
                    team_b_percentage: 30,
                    team_b_distance: '45.40',
                },
                remaining: {
                    team_a_time: '120',
                    team_b_time: '30',
                }
            }

        },
        {
            type: 1,
            team_a_score: '3',
            team_b_score: '1',
            team_a_win: false,
            team_b_win: true,
            map_id: 2,
            map_name: "多拉多112",
            occupied: {
                first_round: {
                    team_a: 8,
                    team_b: 30,
                },
                second_round: {
                    team_a: 90,
                    team_b: 80,
                },
                third_round: {
                    team_a: 10,
                    team_b: 9,
                },
            },
            carry: {
                checking: {
                    team_a: 6,
                    team_b: 3,
                },
                schedule: {
                    team_a_percentage: 76,
                    team_a_distance: '76.40',
                    team_b_percentage: 30,
                    team_b_distance: '45.40',
                },
                remaining: {
                    team_a_time: '120',
                    team_b_time: '30',
                }
            },
            combat: {
                checking: {
                    team_a: 8,
                    team_b: 8,
                },
                schedule: {
                    team_a: 60,
                    team_b: 55,
                },
                remaining: {
                    team_a_time: '120',
                    team_b_time: '30',
                }

            }
        },
        {
            type: 2,
            team_a_score: '3',
            team_b_score: '1',
            team_a_win: true,
            team_b_win: false,
            map_id: 5,
            map_name: "多拉多442",
            occupied: {
                first_round: {
                    team_a: 80,
                    team_b: 30,
                },
                second_round: {
                    team_a: 9,
                    team_b: 80,
                },
                third_round: {
                    team_a: 10,
                    team_b: 9,
                },
            },
            combat: {
                checking: {
                    team_a: 6,
                    team_b: 3,
                },
                schedule: {
                    team_a: 60,
                    team_b: 55,
                },
                remaining: {
                    team_a_time: '120',
                    team_b_time: '30',
                }

            }
        },
        {
            type: 3,
            team_a_score: '3',
            team_b_score: '1',
            team_a_win: true,
            team_b_win: false,
            map_id: 7,
            map_name: "多拉多",
            occupied: {
                first_round: {
                    team_a: 60,
                    team_b: 30,
                },
                second_round: {
                    team_a: 30,
                    team_b: 80,
                },
                third_round: {
                    team_a: 10,
                    team_b: 9,
                },
            },
            carry: {
                checking: {
                    team_a: 6,
                    team_b: 3,
                },
                schedule: {
                    team_a_percentage: 76,
                    team_a_distance: '76.40',
                    team_b_percentage: 30,
                    team_b_distance: '45.40',
                },
                remaining: {
                    team_a_time: '120',
                    team_b_time: '30',
                }
            },
        },
        {
            type: 0,
            team_a_score: '3',
            team_b_score: '1',
            team_a_win: true,
            team_b_win: false,
            map_id: 3,
            map_name: "多拉多",
            occupied: {
                first_round: {
                    team_a: 70,
                    team_b: 30,
                },
                second_round: {
                    team_a: 30,
                    team_b: 80,
                },
                third_round: {
                    team_a: 10,
                    team_b: 9,
                },
            }
        },
        {
            type: 0,
            team_a_score: '3',
            team_b_score: '1',
            team_a_win: true,
            team_b_win: false,
            map_id: 1,
            map_name: "多拉多",
            occupied: {
                first_round: {
                    team_a: 80,
                    team_b: 30,
                },
                second_round: {
                    team_a: 30,
                    team_b: 80,
                },
                third_round: {
                    team_a: 10,
                    team_b: 9,
                },
            }
        },
        {
            type: 0,
            team_a_score: '3',
            team_b_score: '1',
            team_a_win: true,
            team_b_win: false,
            map_id: 8,
            map_name: "多拉多",
            occupied: {
                first_round: {
                    team_a: 90,
                    team_b: 30,
                },
                second_round: {
                    team_a: 30,
                    team_b: 80,
                },
                third_round: {
                    team_a: 10,
                    team_b: 9,
                },
            }
        },
    ]
}
