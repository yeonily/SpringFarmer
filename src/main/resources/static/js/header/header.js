/*검색 버튼 이벤트*/
$(".search_keyword").on("focus", function(){
    $(".search_form").css("background", "#f3f4f5");
    $(".search_form").css("border-radius", "5px");
    $(".search_keyword").css("outline", "none");
});
$(".search_keyword").on("blur", function(){
    $(".search_form").css("background", "inherit");
});



/*우측 메뉴 마우스 이벤트*/
$("ul.nav_right_after li button").on("mouseover", function() {
    $(this).css("background", "#f3f4f5");
});
$("ul.nav_right_after li button").on("mouseout", function() {
    $(this).css("background", "inherit");
});


/*마이페이지 hover 이벤트*/
$("li.myPageBtn").on("mouseover", function() {
    $("div.sub-menu").css("visibility", "visible");
});

$("li.myPageBtn").on("mouseleave", function() {
    $("div.sub-menu").css("visibility", "hidden");
});


/*마이페이지 서브메뉴 마우스 이벤트*/
$("div.sub-menu li div").on("mouseover", function() {
    $(this).css("background", "#f3f4f5");
});
$("div.sub-menu li div").on("mouseout", function() {
    $(this).css("background", "inherit");
});


/*알림 버튼 클릭 시*/
$(".noti-button-container").on("click", function (){
    $("div.mask").css("visibility", "visible");
    $("div.alarm").css("visibility", "visible");
});

/*다른 영역 클릭 시*/
$(".mask, .main_banner").on("click", function (){
    $("div.mask").css("visibility", "hidden");
    $("div.alarm").css("visibility", "hidden");
});