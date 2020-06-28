$(function () {
    var DONT_ENUM = "propertyIsEnumerable,isPrototypeOf,hasOwnProperty,toLocaleString,toString,valueOf,constructor".split(","),
        hasOwn = ({}).hasOwnProperty;
    for (var i in {
            toString: 1
        }) {
        DONT_ENUM = false;
    }
    Object.keys = Object.keys || function (obj) {
        var result = [];
        for (var key in obj)
            if (hasOwn.call(obj, key)) {
                result.push(key);
            }
        if (DONT_ENUM && obj) {
            for (var i = 0; key = DONT_ENUM[i++];) {
                if (hasOwn.call(obj, key)) {
                    result.push(key);
                }
            }
        }
        return result;
    };
    var height = $("#super_citys>div").height();

    function auto_height() {
        $("#super_citys>div>ul>li").height(height).css("line-height", height + "px");
    }
    // $("#super_citys>.selected_item>.selection").height(height).css("line-height", height + "px");
    // $("#super_citys>.selected_item>.selection").height(height).css("line-height", + "100%");
    // $("#super_citys>div>ul").css("top", height + "px");
    var html1;
    var obj_index = Object.keys(condition1);
    for (var i = 0, obj_len = obj_index.length; i < obj_len; i++) {
        html1 = '<li><input type="hidden" value="' + obj_index[i] + '"><span>' + condition1[obj_index[i]] + '</span></li>';
        $("#super_citys>.provinces>ul").append(html1);
    }
    auto_height();
    var sheng, diqu;
    $("#super_citys>.provinces>ul>li").click(function () {
        $("#super_citys>.provinces>.input1").val($(this).children("input").val());
        $("#super_citys>.provinces>.input2").val($(this).children("span").html());
        $("#super_citys>.provinces>div").html($(this).children("span").html());
        var html2 = '<li><input type="hidden" value="0"><span>请选择赛事流程</span></li>';
        var html2 = '';
        var index_s = $(this).children("input").val();
        if (sheng !== index_s) {
            $("#super_citys>.city>div").html("请选择赛事流程");
            $("#super_citys>.city>.input1").val(0);
            $("#super_citys>.city>.input2").val(0);
            $("#super_citys>.area>div").html("请选择地区");
            $("#super_citys>.area>.input1").val(0);
            $("#super_citys>.area>.input2").val(0);
            $("#super_citys>.area>ul").html('<li><input type="hidden" value="0"><span>请选择地区</span></li>');
        }
        sheng = index_s;
        if (index_s == 0) {
            $("#super_citys>.provinces>.input2").val(0);
            $("#super_citys>.city>ul").html('<li><input type="hidden" value="0"><span>请选择赛事流程</span></li>');
            $("#super_citys>.city>.input1").val(0);
            $("#super_citys>.city>.input2").val(0);
            $("#super_citys>.area>ul").html('<li><input type="hidden" value="0"><span>请选择地区</span></li>');
            $("#super_citys>.area>.input1").val(0);
            $("#super_citys>.area>.input2").val(0);
        } else {
            var obj_index = Object.keys(condition2[index_s]);
            for (var i = 0, len = obj_index.length; i < len; i++) {
                html2 += '<li><input type="hidden" value="' + obj_index[i] + '"><span>' + condition2[index_s][obj_index[i]] + '</span></li>';
            }
            $("#super_citys>.city>ul").html(html2);
        }
        auto_height();
    });
    $("#super_citys>.city>ul").on("click", "li", function () {
        $("#super_citys>.city>.input1").val($(this).children("input").val());
        $("#super_citys>.city>.input2").val($(this).children("span").html());
        $("#super_citys>.city>div").html($(this).children("span").html());
        var html3 = '<li><input type="hidden" value="0"><span>请选择地区</span></li>';
        var html3 = '';
        var index_r = $(this).children("input").val();
        if (diqu !== index_r) {
            $("#super_citys>.area>div").html("请选择地区");
            $("#super_citys>.area>.input1").val(0);
            $("#super_citys>.area>.input2").val(0);
        }
        diqu = index_r;
        if (index_r == 0) {
            $("#super_citys>.area>ul").html('<li><input type="hidden" value="0"><span>请选择地区</span></li>');
            $("#super_citys>.city>.input2").val(0);
            $("#super_citys>.area>.input2").val(0);
        } else {
            var obj_index = Object.keys(condition3[index_r]);
            for (var i = 0, len = obj_index.length; i < len; i++) {
                // console.log(condition3[index_r][obj_index[i]]);
                html3 += '<li><input type="hidden" value="' + obj_index[i] + '"><span>' + condition3[index_r][obj_index[i]] + '</span></li>';
            }
            $("#super_citys>.area>ul").html(html3);
        }
        auto_height()
    });
    $("#super_citys>.area>ul").on("click", "li", function () {
        var x_index = $(this).children("input").val();
        if (x_index == 0) {
            $("#super_citys>.area>.input2").val(0);
        } else {
            $("#super_citys>.area>.input2").val($(this).children("span").html());
        }
        $("#super_citys>.area>.input1").val($(this).children("input").val());
        $("#super_citys>.area>div").html($(this).children("span").html());
    });
    var height_shjiu, height_zong, height_li20;

    function guyuan(element) {
        auto_height();
        height_zong = (element.children("ul").children("li").length) * height;
        height_li20 = 10 * height;
        if (height_zong > height_li20) {
            height_shjiu = height_li20;
        } else {
            height_shjiu = height_zong;
        }
        element.children("ul").css({
            "display": "block",
            // "height": height_shjiu + "px"
        });
        // element.siblings().children("ul").css({
        //     "display": "none",
        //     "height": "0px"
        // });
    }
    $(document).click(function () {
        $("#super_citys>div>ul").css("display", "none");
        // $("#super_citys>div").removeClass("shadow");
        sheng_is = true;
        shi_is = true;
        qu_is = true;
    });
    $("#super_citys>div>ul").on("click", "li", function (e) {
        e.stopPropagation();
        // $(this).parent().parent().addClass("shadow").siblings().removeClass("shadow");
        $("#super_citys>div>ul").css("display", "none");
        sheng_is = true;
        shi_is = true;
        qu_is = true;
    });
    var sheng_is = true;
    $("#super_citys>.provinces").click(function (e) {
        if (sheng_is) {
            e.stopPropagation();
        }
        // $(this).addClass("shadow").siblings().removeClass("shadow");
        sheng_is = !sheng_is;
        guyuan($(this));
        shi_is = true;
        qu_is = true;
    });
    var shi_is = true;
    $("#super_citys>.city").click(function (e) {
        if (shi_is) {
            e.stopPropagation();
        }
        // $(this).addClass("shadow").siblings().removeClass("shadow");
        shi_is = !shi_is;
        guyuan($(this));
        sheng_is = true;
        qu_is = true;
    });
    var qu_is = true;
    $("#super_citys>.area").click(function (e) {
        if (qu_is) {
            e.stopPropagation();
        }
        // $(this).addClass("shadow").siblings().removeClass("shadow");
        qu_is = !qu_is;
        guyuan($(this));
        sheng_is = true;
        shi_is = true;
    });
    $("#super_citys>.provinces ul li:first-child").trigger('click');
    $("#super_citys>.city ul li:nth-child(1)").trigger('click');
    $("#super_citys>.area ul li:nth-child(1)").trigger('click');
    $(".inquirNow").click(function () {
        var sheng = $(".provinces>.input1").val();
        var shi = $(".city>.input1").val();
        var qu = $(".area>.input1").val();
        // var sheng_n = $(".provinces>.input2").val();
        // var shi_n = $(".city>.input2").val();
        // var qu_n = $(".area>.input2").val();
        if (sheng == 0) {
            alert("赛事类型不能为空！");
            return false
        }
        if (shi == 0) {
            alert("赛事流程不能为空！");
            return false
        }
        if (qu == 0) {
            alert("赛事地区不能为空！");
            return false
        } else if (qu == 'wu'){
            qu = '';
        }
        if(sheng == '2') {
            isKing = false;
        } else if(sheng == '1'){
            isKing = true;
        }
        var parameter = {
            type:sheng,
            phase:shi,
            area:qu
        };
        $('.data_details .tab_title .tabs:nth-child(1)').trigger('click');
        getFight(parameter);
        // console.log("您输入的赛事代码为：" + sheng + "-" + shi + "-" + qu);
        // alert("您输入的赛事名为：" + sheng_n + "-" + shi_n + "-" + qu_n);
    });
});