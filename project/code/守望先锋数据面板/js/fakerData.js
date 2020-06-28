
/**
 * 赛事积分-> 小组赛赛程
 * @param match_id {Number} 比赛id
 * @param date {String} 日期
 * @param time {String} 时间
 * @param status {Number} 比赛状态 0：未开始 1：进行中 2：已结束
 * @param teamA_name {String} 队伍名称
 * @param teamA_id {Number} 队伍id
 * @param teamA_score {Number} 队伍比分
*/
var groupMatchesSchedule = [
    {
        match_id: 0,
        date: "2018-08-17",
        time: "11:00",
        status: 0,
        teamA_name: "中国",
        teamA_score: 0,
        teamB_name: "丹麦",
        teamA_id: 562,
        teamB_id: 567,
        teamB_score: 1,
    },
    {
        match_id: 0,
        date: "2018-08-17",
        time: "11:00",
        status: 1,
        teamA_name: "中国",
        teamA_score: 0,
        teamB_name: "丹麦",
        teamA_id: 562,
        teamB_id: 567,
        teamB_score: 1,
    },
    {
        match_id: 0,
        date: "2018-08-17",
        time: "11:00",
        status: 2,
        teamA_name: "中国",
        teamA_score: 0,
        teamB_name: "丹麦",
        teamA_id: 562,
        teamB_id: 567,
        teamB_score: 1,
    },
    {
        match_id: 0,
        date: "2018-08-17",
        time: "11:00",
        status: 0,
        teamA_name: "中国",
        teamA_score: 0,
        teamB_name: "丹麦",
        teamA_id: 562,
        teamB_id: 567,
        teamB_score: 1,
    },
]

/**
 * 赛事积分-> 小组积分榜
 * @param title {String} 赛程标题
 * @param rankingList {Array} 排名列表
 * @param ranking {Number} 名次
 * @param team_name {String} 队名
 * @param team_id {Number} 队伍id
 * @param map_win {Number} 地图胜利
 * @param map_lose {Number} 地图失败
 * @param match_win {Number} 比赛胜利
 * @param match_lose {Number} 比赛失败
*/
var groupIntegralRanking = [
    {
        title: "A组",
        rankingList: [
            {
                ranking: 1,
                team_id: 562,
                team_name: "中国",
                map_win: 11,
                map_lose: 5,
                match_win: 10,
                match_lose: 6,
            },
            {
                ranking: 2,
                team_id: 562,
                team_name: "中国",
                map_win: 12,
                map_lose: 5,
                match_win: 10,
                match_lose: 8,
            },
            {
                ranking: 3,
                team_id: 567,
                team_name: "中国",
                map_win: 13,
                map_lose: 4,
                match_win: 10,
                match_lose: 6,
            },
            {
                ranking: 4,
                team_id: 567,
                team_name: "中国",
                map_win: 14,
                map_lose: 3,
                match_win: 15,
                match_lose: 6,
            },
            {
                ranking: 5,
                team_id: 567,
                team_name: "中国",
                map_win: 14,
                map_lose: 3,
                match_win: 15,
                match_lose: 6,
            },
        ]
    },
    {
        title: "B组",
        rankingList: [
            {
                ranking: 1,
                team_id: 567,
                team_name: "中国",
                map_win: 11,
                map_lose: 5,
                match_win: 10,
                match_lose: 6,
            },
        ]
    }
]

/**
 * 赛事积分-> 复赛
 * @param firstRound {Array} 第一轮比赛
 * @param secondRound {Array} 第二轮比赛
 * @param thirdlyRound {Object} 决赛轮比赛
 * @param fourthly {Object} 季军战
 * @param third {Object} 季军
 * @param champion {Object} 冠军
 * @param match_id {Number} 比赛ID
 * @param time {String} 比赛时间
 * @param teamA_name {String} 队伍名称
 * @param teamA_id {Number} 队伍id
 * @param teamA_score {Number} 队伍比分
 * @param team_name {String} 队伍名称
 * @param team_score {Number} 队伍比分
*/
var repetitionData = {
    firstRound: [
        {
            match_id: 123,
            time: "10月22日 12:00",
            teamA_name: "中国队",
            teamA_score: 3,
            teamB_name: "丹麦队",
            teamB_score: 1,
            teamA_id: 567,
            teamB_id: 567,
        },
        {
            match_id: 321,
            time: "10月22日 10:00",
            teamA_name: "哈哈哈",
            teamA_score: 0,
            teamB_name: "嘻嘻嘻",
            teamB_score: 3,
            teamA_id: 567,
            teamB_id: 567,
        },
    ],
    secondRound: [
        {
            match_id: 456,
            time: "10月26日 10:00",
            teamA_name: "第二轮A",
            teamA_score: 3,
            teamB_name: "丹麦队",
            teamB_score: 1,
            teamA_id: 567,
            teamB_id: 567,
        },
        {
            match_id: 654,
            time: "10月28日 10:00",
            teamA_name: "第二轮B",
            teamA_score: 3,
            teamB_name: "丹麦队",
            teamB_score: 1,
            teamA_id: 567,
            teamB_id: 567,
        },
    ],
    thirdlyRound: {
        match_id: 789,
        time: "10月30日 16:00",
        teamA_name: "决赛A",
        teamA_score: 6,
        teamB_name: "决赛B",
        teamB_score: 1,
        teamA_id: 567,
        teamB_id: 567,
    },
    fourthly: {
        match_id: 987,
        time: "11月22日 10:00",
        teamA_name: "半决赛A",
        teamA_score: 4,
        teamB_name: "半决赛B",
        teamB_score: 0,
        teamA_id: 567,
        teamB_id: 567,
    },
    third: {
        team_name: "我是季军",
        team_id: 567,
    },
    champion: {
        team_name: "我是冠军",
        team_id: 562,
    }

}

/**
 *战队数据
 * @param team_id {Number} 队伍id
 * @param team_name {String} 队名
 * @param team_icon {String} 队伍图标
 * @param win_rate {Number} 胜率 此处为 处理过的*100后的整数
 * @param win_num {Number} 近五场胜利场次
 * @param win_num {Number} 近五场失败场次
 * @param score {Number} 近五张地图得分
 * @param player {Array} 队伍选手列表
 * @param nick_name {String} 选手名称
 * @param icon {String} 选手图片
 * @param location {Number} 位置 0：输出 1：坦克 2：辅助
 * @param location_icon {String} 位置图标
 * @param heros {Array > Number} 擅长英雄，英雄对应id列表
*/
var teamData = [
    {   
        team_id: 567,
        team_name: "LPL",
        win_rate: 70,
        win_num: 5,
        lose_num: 1,
        score: 58,
        player: [
            {
                nick_name: "Smlz",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190529190628/dbbc54e61b74baa79c046416cc20d2cd/0",
                location: 0,
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
                heros: [
                    2,
                    3,
                    10,
                ]
            },
            {
                nick_name: "Uzi",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190930095439/6e76b6ad4c268979d0184fdb4f61adee/0",
                location: 1,
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
                heros: [
                    1,
                    3,
                    6,
                ]
            },
            {
                nick_name: "Doinb",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190930094349/d896bfda4587024c110271fe135318c5/0",
                location: 2,
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
                heros: [
                    8,
                    9,
                    11,
                ]
            },
            {
                nick_name: "Ming",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190930095514/d7ad436f4c753214b942cfe93565f9a7/0",
                location: 2,
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
                heros: [
                    12,
                    12,
                    14,
                ]
            },
            {
                nick_name: "Clearlove",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190529185130/8c25f8e7ba76c21877d5d6239d916f56/0",
                location: 1,
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
                heros: [
                    15,
                    16,
                    17,
                ]
            },
            {
                nick_name: "The shy",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190930094456/632ea320bfa4eda9ae4c4c360dac52ca/0",
                location: 0,
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
                heros: [
                    18,
                    19,
                    20,
                ]
            },
        ]
    },
    {
        team_id: 567,
        team_name: "DGL",
        win_rate: 50,
        win_num: 6,
        lose_num: 3,
        score: 40,
        player: [
            {
                nick_name: "Pyl",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190528165113/2b9045daa4f8653e0a89558c8dd66dde/0",
                location: 0,
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
                heros: [
                    2,
                    3,
                    10,
                ]
            },
            {
                nick_name: "Condi",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190528164644/b44862166a1eb26b0aabff92d344d5a4/0",
                location: 0,
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
                heros: [
                    1,
                    3,
                    6,
                ]
            },
            {
                nick_name: "Eimy",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190625112105/1a9f9b6cdcdb21e5c98d5bb2960c4643/0",
                location: 0,
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
                heros: [
                    1,
                    20,
                    6,
                ]
            },
        ]
    },
    {
        team_id: 567,
        team_name: "哈哈哈",
        win_rate: 48,
        win_num: 2,
        lose_num: 0,
        score: 80,
        player: [
            {
                nick_name: "嘻嘻嘻",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190528165113/2b9045daa4f8653e0a89558c8dd66dde/0",
                location: 0,
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
                heros: [
                    2,
                    3,
                    10,
                ]
            },
            {
                nick_name: "啦啦啦",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190528164644/b44862166a1eb26b0aabff92d344d5a4/0",
                location: 0,
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
                heros: [
                    1,
                    3,
                    6,
                ]
            },
            {
                nick_name: "呵呵呵",
                icon: "https://img.crawler.qq.com/lolwebvideo/20190625112105/1a9f9b6cdcdb21e5c98d5bb2960c4643/0",
                location: 0,
                location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
                heros: [
                    1,
                    20,
                    6,
                ]
            },
        ]
    },
    {
        team_id: 567,
        team_name: "DGL",
        win_rate: 50,
        win_num: 6,
        lose_num: 3,
        score: 40,
        player: []
    },
    {
        team_id: 567,
        team_name: "AAA",
        win_rate: 10,
        win_num: 6,
        lose_num: 3,
        score: 40,
        player: []
    },
    {
        team_id: 567,
        team_name: "BBB",
        win_rate: 20,
        win_num: 6,
        lose_num: 3,
        score: 40,
        player: []
    },
    {
        team_id: 567,
        team_name: "CCC",
        win_rate: 30,
        win_num: 6,
        lose_num: 3,
        score: 40,
        player: []
    },
]

/**
 * 赛事数据 比赛列表
 * @param match_id {Number} 比赛id
 * @param status {Number} 比赛状态 0：未开始 1：进行中 2：已结束
 * @param time {String} 比赛开始时间
 * @param teamA_id {Number} 队伍id
 * @param teamA_name {String} 队伍名称
 * @param teamA_icon {String} 队伍图标
 * @param teamA_score {String} 队伍大场比分
*/
var matchData = [
    {
        match_id: 0,
        status: 0,
        time: '10-21 10:00',
        teamA_name: "中国",
        teamA_score: '-',
        teamB_name: "丹麦",
        teamB_score: '-',
        teamA_id: 567,
        teamB_id: 567,
    },
    {
        match_id: 1,
        status: 2,
        time: '10-21 11:00',
        teamA_name: "中国",
        teamA_score: '0',
        teamB_name: "丹麦",
        teamB_score: '1',
        teamA_id: 567,
        teamB_id: 567,
    },
    {
        match_id: 2,
        status: 1,
        time: '10-21 12:00',
        teamA_name: "中国",
        teamA_score: '0',
        teamB_name: "丹麦",
        teamB_score: '1',
        teamA_id: 567,
        teamB_id: 567,
    },
    {
        match_id: 3,
        status: 1,
        time: '10-21 13:00',
        teamA_name: "中国",
        teamA_score: '0',
        teamB_name: "丹麦",
        teamB_score: '1',
        teamA_id: 567,
        teamB_id: 567,
    },
    {
        match_id: 4,
        status: 0,
        time: '10-21 14:00',
        teamA_name: "中国",
        teamA_score: '-',
        teamB_name: "丹麦",
        teamB_score: '-',
        teamA_id: 567,
        teamB_id: 567,
    },
    {
        match_id: 5,
        status: 0,
        time: '10-21 14:00',
        teamA_name: "中国",
        teamA_score: '-',
        teamB_name: "丹麦",
        teamB_score: '-',
        teamA_id: 567,
        teamB_id: 567,
    },
    {
        match_id: 6,
        status: 0,
        time: '10-21 14:00',
        teamA_name: "中国",
        teamA_score: '-',
        teamB_name: "丹麦",
        teamB_score: '-',
        teamA_id: 567,
        teamB_id: 567,
    }
]

/**
 * 赛事数据 当前的比赛详细信息
 * 左侧列表切换时请求到对应比赛数据后 替换此对象即可
 * @param match_id {Number} 比赛id
 * @param status {Number} 比赛状态 0：未开始 1：进行中 2：已结束
 * @param time {String} 比赛开始时间
 * @param teamA_name {String} 队伍名称
 * @param teamA_id {Number} 队伍id
 * @param teamA_score {Number} 队伍大场比分
 * @param teamA_player {Array} 选手列表
 * @param nick_name {String} 选手昵称
 * @param icon {String} 选手图片
 * @param location_icon {String} 选手位置图片
 * @param small_score {Array} 小场比分列表
 * @param teamA_score {String} 小场队伍比分
*/
var nowMatchInfo = {
    teamA_id: 567,
    teamB_id: 567,
    match_id: 0,
    status: 1,
    time: '10-15 10:00',
    teamA_name: "中国中国中国",
    teamA_score: 0,
    teamA_player: [
        {
            nick_name: "Pyl",
            icon: "https://img.crawler.qq.com/lolwebvideo/20190528165113/2b9045daa4f8653e0a89558c8dd66dde/0",
            location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
        },
        {
            nick_name: "Condi",
            icon: "https://img.crawler.qq.com/lolwebvideo/20190528164644/b44862166a1eb26b0aabff92d344d5a4/0",
            location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
        },
        {
            nick_name: "Eimy",
            icon: "https://img.crawler.qq.com/lolwebvideo/20190625112105/1a9f9b6cdcdb21e5c98d5bb2960c4643/0",
            location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
        },
        {
            nick_name: "Eimy",
            icon: "https://img.crawler.qq.com/lolwebvideo/20190625112105/1a9f9b6cdcdb21e5c98d5bb2960c4643/0",
            location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
        },
    ],
    teamB_name: "丹麦",
    teamB_score: 1,
    teamB_player: [
        {
            nick_name: "AAA",
            icon: "https://img.crawler.qq.com/lolwebvideo/20190528165113/2b9045daa4f8653e0a89558c8dd66dde/0",
            location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
        },
        {
            nick_name: "BBB",
            icon: "https://img.crawler.qq.com/lolwebvideo/20190528164644/b44862166a1eb26b0aabff92d344d5a4/0",
            location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
        },
        {
            nick_name: "CCC",
            icon: "https://img.crawler.qq.com/lolwebvideo/20190625112105/1a9f9b6cdcdb21e5c98d5bb2960c4643/0",
            location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
        },
        {
            nick_name: "CCC",
            icon: "https://img.crawler.qq.com/lolwebvideo/20190625112105/1a9f9b6cdcdb21e5c98d5bb2960c4643/0",
            location_icon: "https://www.xxdianjing.com/data/upload/20160803/57a1a8ff93af6.png",
        },
    ],
    small_score: [
        {
            teamA_score: '3',
            teamB_score: '1',
        },
        {
            teamA_score: '0',
            teamB_score: '1',
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
}
