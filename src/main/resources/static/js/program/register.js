/*
* program/register.html
* */

$(window).on("load", function () {
    $(this).addClass("pick");
    $("#pg1").show();
    $("#pg2").hide();
    $("#pg3").hide();
    $("#pg4").hide();
    $("#guide1").show();
    $("#guide2").hide();
    $("#guide3").hide();
    $("#guide4").hide();
})

$("#pg-1").on("click", function() {
    $(".side-box-title").removeClass("pick");
    $(this).addClass("pick");
    $("#pg1").show();
    $("#pg2").hide();
    $("#pg3").hide();
    $("#pg4").hide();
    $("#guide1").show();
    $("#guide2").hide();
    $("#guide3").hide();
    $("#guide4").hide();
});

$("#pg-2").on("click", function() {
    $(".side-box-title").removeClass("pick");
    $(this).addClass("pick");
    $("#pg1").hide();
    $("#pg2").show();
    $("#pg3").hide();
    $("#pg4").hide();
    $("#guide1").hide();
    $("#guide2").show();
    $("#guide3").hide();
    $("#guide4").hide();
});

$("#pg-3").on("click", function() {
    $(".side-box-title").removeClass("pick");
    $(this).addClass("pick");
    $("#pg1").hide();
    $("#pg2").hide();
    $("#pg3").show();
    $("#pg4").hide();
    $("#guide1").hide();
    $("#guide2").hide();
    $("#guide3").show();
    $("#guide4").hide();
});

$("#pg-4").on("click", function() {
    $(".side-box-title").removeClass("pick");
    $(this).addClass("pick");
    $("#pg1").hide();
    $("#pg2").hide();
    $("#pg3").hide();
    $("#pg4").show();
    $("#guide1").hide();
    $("#guide2").hide();
    $("#guide3").hide();
    $("#guide4").show();
});

//예시 선택하기
$(".first").click(function () {
    $(".first").addClass("active");
    $(".second").removeClass("active");
    $(".example1").attr("src", "https://cdn.comento.kr/images/class/pt/open/class-opening-guide-class-target-example-marketing-1.png")
})

$(".second").click(function () {
    $(".first").removeClass("active");
    $(".second").addClass("active");
    $(".example1").attr("src", "https://cdn.comento.kr/images/class/pt/open/class-opening-guide-class-target-example-programming-1.png")
})

//예시 보여주기
$(".guide-title-container").on("click",function () {
    if($(this).parent().siblings(".guide-content").css("display")=="none"){
        $(this).parent().siblings(".guide-content").show();
        $(".arrow-icon").css({'transform':'rotate('+180+'deg)'});
    }else{
        $(this).parent().siblings(".guide-content").hide();
        $(".arrow-icon").css({'transform':'rotate('+0+'deg)'});
    }
})

//'예시보기' 클릭시 예시 보여주기
$(".e-chip1").on("click", function () {
    if($(".g-content1").css("display")=="none"){
        $(".g-content1").show();
        $(".a-icon1").css({'transform':'rotate('+180+'deg)'});
    }else{
        $(".op-o-g1").css("background-color", "#47c88040");
        setTimeout(fadeout, 200);
    }
})

$(".e-chip2").on("click", function () {
    if($(".g-content2").css("display")=="none"){
        $(".g-content2").show();
        $(".a-icon2").css({'transform':'rotate('+180+'deg)'});
    }else{
        $(".op-o-g2").css("background-color", "#47c88040");
        setTimeout(fadeout, 200);
    }
})

$(".e-chip3").on("click", function () {
    if($(".g-content3").css("display")=="none"){
        $(".g-content3").show();
        $(".a-icon3").css({'transform':'rotate('+180+'deg)'});
    }else{
        $(".op-o-g3").css("background-color", "#47c88040");
        setTimeout(fadeout, 200);
    }
})

function fadeout(){
    $(".pg-opening-guide").css("background-color", "#fff");
}