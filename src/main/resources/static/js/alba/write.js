/*-----------------------------------------------------------*/
            /*첫 로딩에는 아르바이트 메인소개 페이지 기준*/
/*-----------------------------------------------------------*/
$("div.example:nth-child(1)").show();
$("div.example:not(div.example:nth-child(1))").hide();
$("#left-menu ul li:first-child").css("color", "rgb(32, 35, 37)");


/*-----------------------------------------------------------*/
                /*왼쪽 메뉴 위치에 따른 버튼 클릭 표시*/
/*-----------------------------------------------------------*/
function changeBtn() {
    /*첫 번째 메뉴(아르바이트 메인소개)에서는 이전 버튼 비활성화*/
    if($("#left-menu ul li:first-child").css("color") == "rgb(32, 35, 37)") {
        document.getElementsByClassName("prev").disabled = false;
        $("button.prev").css({color:"#eaecee", background: "#fcfcfc", cursor: "not-allowed"});
    } else {
        document.getElementsByClassName("prev").disabled = true;
        $("button.prev").css({color:"#767d82", background: "#f3f4f5", cursor: "pointer"});
    }

    if($("#left-menu ul li:last-child").css("color") == "rgb(32, 35, 37)") {
        $("button.submitBtn").show();
        $("button.next").hide();
    } else {
        $("button.submitBtn").hide();
        $("button.next").show();
    }
    $("div.example div.example-content").css("display", "none");
}

changeBtn();

/*-----------------------------------------------------------*/
                /*왼쪽 메뉴 선택 시 검정글자로 표시*/
/*-----------------------------------------------------------*/
$("#left-menu ul li").on("click", function() {
    $(this).css("color", "rgb(32, 35, 37)");
    $("#left-menu ul li").not(this).css({color: 'rgb(173, 179, 184)'});
    changeBtn();
});



function menu1() {
    $("#content").children('div:nth-child(1)').show();
    $("#content").children('div:not(div:nth-child(1))').hide();
    $("div.example:nth-child(1)").show();
    $("div.example:not(div.example:nth-child(1))").hide();
}
function menu2() {
    $("#content").children('div:nth-child(2)').show();
    $("#content").children('div:not(div:nth-child(2))').hide();
    $("div.example:nth-child(2)").show();
    $("div.example:not(div.example:nth-child(2))").hide();
}
function menu3() {
    $("#content").children('div:nth-child(3)').show();
    $("#content").children('div:not(div:nth-child(3))').hide();
    $("div.example:nth-child(3)").show();
    $("div.example:not(div.example:nth-child(3))").hide();
}
function menu4() {
    $("#content").children('div:nth-child(4)').show();
    $("#content").children('div:not(div:nth-child(4))').hide();
    $("div.example:nth-child(4)").show();
    $("div.example:not(div.example:nth-child(4))").hide();
}
function menu5() {
    $("#content").children('div:nth-child(5)').show();
    $("#content").children('div:not(div:nth-child(5))').hide();
    $("div.example:nth-child(5)").show();
    $("div.example:not(div.example:nth-child(5))").hide();
}



/*-----------------------------------------------------------*/
                    /*다음 혹은 이전 버튼 클릭*/
/*-----------------------------------------------------------*/
/*다음 버튼*/
$("button.next").on("click", function() {
    if($("#left-menu ul li:nth-child(1)").css("color") == "rgb(32, 35, 37)") {
        $("#left-menu ul li:nth-child(2)").css("color", "rgb(32, 35, 37)");
        $("#left-menu ul li").not($("#left-menu ul li:nth-child(2)")).css({color: 'rgb(173, 179, 184)'});
        menu2();
        changeBtn();

    } else if($("#left-menu ul li:nth-child(2)").css("color") == "rgb(32, 35, 37)") {
        $("#left-menu ul li:nth-child(3)").css("color", "rgb(32, 35, 37)");
        $("#left-menu ul li").not($("#left-menu ul li:nth-child(3)")).css({color: 'rgb(173, 179, 184)'});
        menu3();
        changeBtn();

    } else if($("#left-menu ul li:nth-child(3)").css("color") == "rgb(32, 35, 37)") {

        $("#left-menu ul li:nth-child(4)").css("color", "rgb(32, 35, 37)");
        $("#left-menu ul li").not($("#left-menu ul li:nth-child(4)")).css({color: 'rgb(173, 179, 184)'});
        menu4();
        changeBtn();

    } else if($("#left-menu ul li:nth-child(4)").css("color") == "rgb(32, 35, 37)") {

        $("#left-menu ul li:nth-child(5)").css("color", "rgb(32, 35, 37)");
        $("#left-menu ul li").not($("#left-menu ul li:nth-child(5)")).css({color: 'rgb(173, 179, 184)'});
        menu5();
        changeBtn();
    }
});

/*이전 버튼*/
$("button.prev").on("click", function() {
    if($("#left-menu ul li:nth-child(2)").css("color") == "rgb(32, 35, 37)") {
        $("#left-menu ul li:nth-child(1)").css("color", "rgb(32, 35, 37)");
        $("#left-menu ul li").not($("#left-menu ul li:nth-child(1)")).css({color: 'rgb(173, 179, 184)'});
        menu1();
        changeBtn();

    } else if($("#left-menu ul li:nth-child(3)").css("color") == "rgb(32, 35, 37)") {
        $("#left-menu ul li:nth-child(2)").css("color", "rgb(32, 35, 37)");
        $("#left-menu ul li").not($("#left-menu ul li:nth-child(2)")).css({color: 'rgb(173, 179, 184)'});
        menu2();
        changeBtn();

    } else if($("#left-menu ul li:nth-child(4)").css("color") == "rgb(32, 35, 37)") {
        $("#left-menu ul li:nth-child(3)").css("color", "rgb(32, 35, 37)");
        $("#left-menu ul li").not($("#left-menu ul li:nth-child(3)")).css({color: 'rgb(173, 179, 184)'});
        menu3();
        changeBtn();

    } else if($("#left-menu ul li:nth-child(5)").css("color") == "rgb(32, 35, 37)") {
        $("#left-menu ul li:nth-child(4)").css("color", "rgb(32, 35, 37)");
        $("#left-menu ul li").not($("#left-menu ul li:nth-child(4)")).css({color: 'rgb(173, 179, 184)'});
        menu4();
        changeBtn();
    }
});


/*-----------------------------------------------------------*/
                /*만약 우측 메뉴 클릭을 했을 때*/
/*-----------------------------------------------------------*/
$("#right-menu").on("click", function() {
    $("div.example div.example-content").toggle();
});

/*-----------------------------------------------------------*/
                        /*좌측 메뉴 선택*/
/*-----------------------------------------------------------*/
/*첫 번째 메뉴(서브메뉴) 선택했을 때*/
$("#left-menu ul li:nth-child(1)").on("click",function(){
    menu1();
});

/*두 번째 메뉴(서브메뉴) 선택했을 때*/
$("#left-menu ul li:nth-child(2)").on("click",function(){
    menu2();
});

/*세 번째 메뉴(상세내용1) 선택했을 때*/
$("#left-menu ul li:nth-child(3)").on("click",function(){
    menu3();
});

/*네 번째 메뉴(상세내용2) 선택했을 때*/
$("#left-menu ul li:nth-child(4)").on("click",function(){
    menu4();
});

/*다섯 번째 메뉴(프로필) 선택했을 때*/
$("#left-menu ul li:nth-child(5)").on("click",function(){
    menu5();
});