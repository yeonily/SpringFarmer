/*
* program/register.html
* */

$(window).on("load", function () {
    $(this).addClass("pick");
    $("#pg1").show();
    $("#pg2").hide();
    $("#pg3").hide();
    $("#pg4").hide();
})

$("#pg-1").on("click", function() {
    $(".side-box-title").removeClass("pick");
    $(this).addClass("pick");
    $("#pg1").show();
    $("#pg2").hide();
    $("#pg3").hide();
    $("#pg4").hide();
});

$("#pg-2").on("click", function() {
    $(".side-box-title").removeClass("pick");
    $(this).addClass("pick");
    $("#pg1").hide();
    $("#pg2").show();
    $("#pg3").hide();
    $("#pg4").hide();
});

$("#pg-3").on("click", function() {
    $(".side-box-title").removeClass("pick");
    $(this).addClass("pick");
    $("#pg1").hide();
    $("#pg2").hide();
    $("#pg3").show();
    $("#pg4").hide();
});

$("#pg-4").on("click", function() {
    $(".side-box-title").removeClass("pick");
    $(this).addClass("pick");
    $("#pg1").hide();
    $("#pg2").hide();
    $("#pg3").hide();
    $("#pg4").show();
});
