/*
* mento/detail.html
* */



/*헤더 멘토 표시*/
$(document).ready(function () {
    $("ul.nav_ul li:nth-child(1)").children("a").addClass("selected-header");
})

//sidebox fixed
const content = document.querySelector('.main_intro');
const sidebox = document.querySelector('.main_fixed');


// 컨텐츠 영역부터 브라우저 최상단까지의 길이 구하기
const contentTop = content.getBoundingClientRect().top + window.scrollY;

window.addEventListener('scroll', function(){

    if(window.scrollY >= contentTop) {
        sidebox.classList.add('fixed');
    }else{
        sidebox.classList.remove('fixed');
    }

});

//멘토 후기 별 체크
$(".star_check").on("click" , function () {
    console.log($(this));
    if($(this).hasClass("star_check") === true){
        $(this).nextAll().attr('class','star_uncheck');
    }else{
        $(this).prevAll().attr('class','star_check');
        $(this).attr('class','star_check');
    }
})


/*
* 별 개수 확인
* */

let counts = $(".star_count");
let starScore = "";
let starText = "";
// console.log(counts);

counts.each(function (i, item) {
    starScore = $(item).children('.star_check').length;
    switch (starScore) {
            case 5 :
                starText = "매우 추천해요!";
            break
            case 4 :
                starText = "추천해요!";
            break
            case 3 :
                starText = "보통이에요!";
            break
            case 2 :
                starText = "비추천해요!";
            break
            case 1 :
                starText = "매우 비추천해요!";
            break
    }
    console.log(starText);
    $(item).children('.main_reply_gray').text(starText);
})

// for(let i = 0 ; i< counts.length ; i++){
//     console.log(counts[i]);
// }

//보낼 시 별 점수?
// console.log($(".star_count").children(".star_check").length);
/*$("#main_reply_button").on("click", function () {

})*/

/*-----------------------------------------------------------*/
/*멘토 신청 버튼 클릭 시 모달*/
/*-----------------------------------------------------------*/
$("button#mento_submit").on("click", function(){
    $("#modal").show();
});
$("button.cancel").on("click", function(){
    $("#modal").hide();
});

/*한줄평 작성 후 멘토 신청 완료 버튼 클릭 시*/
$("button.applyBtn").on("click", function(){
    /*한줄평 작성 안했을 시*/
    if($(".modal_input").val() == ''){
        $(".modal_input").css("border", "1px solid red");
        $(".modal_input").attr("placeholder", "인사말을 입력해주세요");
        return;
    }
    $("#modal").hide();
    $("#modalSuccess").show();
});

