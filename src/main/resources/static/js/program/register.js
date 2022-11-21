/*
* program/register.html
* */

vimg = $('<img>', {
    'src':'/image/program/next_register.gif',
    "class":"footer-img-next"})

function page1(){
    $("#pg1").show();
    $("#pg2").hide();
    $("#pg3").hide();
    $("#pg4").hide();
    $("#guide1").show();
    $("#guide2").hide();
    $("#guide3").hide();
    $("#guide4").hide();
    $(".before").attr("disabled", true);
    $(".next").html("다음").append(vimg);
}

function page2(){
    $("#pg1").hide();
    $("#pg2").show();
    $("#pg3").hide();
    $("#pg4").hide();
    $("#guide1").hide();
    $("#guide2").show();
    $("#guide3").hide();
    $("#guide4").hide();
    $(".before").attr("disabled", false);
    $(".next").html("다음").append(vimg);
}

function page3(){
    $("#pg1").hide();
    $("#pg2").hide();
    $("#pg3").show();
    $("#pg4").hide();
    $("#guide1").hide();
    $("#guide2").hide();
    $("#guide3").show();
    $("#guide4").hide();
    $(".before").attr("disabled", false);
    $(".next").html("다음").append(vimg);
}

function page4(){
    $("#pg1").hide();
    $("#pg2").hide();
    $("#pg3").hide();
    $("#pg4").show();
    $("#guide1").hide();
    $("#guide2").hide();
    $("#guide3").hide();
    $("#guide4").show();
    $(".before").attr("disabled", false);
    $(".next").html("제출하기");
}


//로딩 시 첫 페이지 먼저 보여주기
$(window).on("load", function () {
    $(this).addClass("pick");
    page1();
})

//왼쪽 탭 클릭하면 해당 부분 보여주기
$("#pg-1").on("click", function() {
    $(".side-box-title").removeClass("pick");
    $(this).addClass("pick");
    page1();
});

$("#pg-2").on("click", function() {
    $(".side-box-title").removeClass("pick");
    $(this).addClass("pick");
    page2();
});

$("#pg-3").on("click", function() {
    $(".side-box-title").removeClass("pick");
    $(this).addClass("pick");
    page3();
});

$("#pg-4").on("click", function() {
    $(".side-box-title").removeClass("pick");
    $(this).addClass("pick");
    page4();
});

//예시 선택하기
$(".ex-1").click(function () {
    $(".ex-1").addClass("active");
    $(".ex-2").removeClass("active");
    $(".example1").attr("src", "/image/program/ex1.gif")
})

$(".ex-2").click(function () {
    $(".ex-1").removeClass("active");
    $(".ex-2").addClass("active");
    $(".example1").attr("src", "/image/program/ex2.gif")
})

$(".ex-3").click(function () {
    $(".ex-3").addClass("active");
    $(".ex-4").removeClass("active");
    $(".example2").attr("src", "/image/program/ex3.gif")
})

$(".ex-4").click(function () {
    $(".ex-3").removeClass("active");
    $(".ex-4").addClass("active");
    $(".example2").attr("src", "/image/program/ex4.gif")
})

$(".ex-5").click(function () {
    $(".ex-5").addClass("active");
    $(".ex-6").removeClass("active");
    $(".example3").attr("src", "/image/program/ex5.gif")
})

$(".ex-6").click(function () {
    $(".ex-5").removeClass("active");
    $(".ex-6").addClass("active");
    $(".example3").attr("src", "/image/program/ex6.gif")
})

$(".ex-7").click(function () {
    $(".ex-7").addClass("active");
    $(".ex-8").removeClass("active");
    $(".example4").attr("src", "/image/program/ex7.gif")
})

$(".ex-8").click(function () {
    $(".ex-7").removeClass("active");
    $(".ex-8").addClass("active");
    $(".example4").attr("src", "/image/program/ex8.gif")
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

$(".e-chip4").on("click", function () {
    if($(".g-content4").css("display")=="none"){
        $(".g-content4").show();
        $(".a-icon4").css({'transform':'rotate('+180+'deg)'});
    }else{
        $(".op-o-g4").css("background-color", "#47c88040");
        setTimeout(fadeout, 200);
    }
})

function fadeout(){
    $(".pg-opening-guide").css("background-color", "#fff");
}

//모달창
const btnModal = document.getElementById("btn-modal");
const modal = document.getElementById("c-overlay");
const closeModal = modal.querySelector(".button-2");

btnModal.addEventListener("click", ev => {
    modal.style.display = "flex"
})

closeModal.addEventListener("click", evt => {
    modal.style.display = "none"
})

/*다음 버튼*/
$("button.next").on("click", function() {
    if($("#pg-1").hasClass('pick')){
        $("#pg-1").removeClass("pick");
        $("#pg-2").addClass("pick");
        page2();
    }else if($("#pg-2").hasClass('pick')){
        $("#pg-2").removeClass("pick");
        $("#pg-3").addClass("pick");
        page3();
    }else if($("#pg-3").hasClass('pick')) {
        $("#pg-3").removeClass("pick");
        $("#pg-4").addClass("pick");
        page4();
    }
});

/*이전 버튼*/
$("button.before").on("click", function() {
     if($("#pg-2").hasClass('pick')){
        $("#pg-1").addClass("pick");
        $("#pg-2").removeClass("pick");
        page1();
    }else if($("#pg-3").hasClass('pick')) {
        $("#pg-2").addClass("pick");
        $("#pg-3").removeClass("pick");
        page2();
    }else if($("#pg-4").hasClass('pick')) {
        $("#pg-3").addClass("pick");
        $("#pg-4").removeClass("pick");
        page3();
    }
});