

// 滚动给电梯导航添加选中效果
$(window).scroll(function(){
    var top = $(document).scrollTop(); 
    var menu = $(".elevator");  
    var items = $(".anchor");  
    var curId = ""; 
    // console.log(top);
    // if(top > 1000 ) {
    //     $(".elevator").css({
    //         "opacity":"1"
    //     })
    // } else {
    //     $(".elevator").css({
    //         "opacity":"0"
    //     })
    // }
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