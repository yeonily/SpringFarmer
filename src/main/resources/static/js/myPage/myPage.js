/*
*   html/myPage/setting.html
* */

// 더보기 메뉴 슬라이드
$("div.more-btn").on("click", function(){
    $('.slide-menu').slideToggle(200);
    $('div.more-btn span').toggleClass('chaged')
})


// 닉네임 중복확인 버튼 클릭 후 저장 버튼 활성화
$(".nick-save").attr("disabled", true);

$("input[name='nickname']").on("focus",function(){
    $(".nick-save").attr("disabled", true);
});


// 휴대폰 번호일 때 자동 하이픈(-) 입력 - 미적용
const autoHyphen = (target) => {
    target.value = target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
}

function mentorForm(){
    $("#mentor-none").hide();
    $(".newMentorForm").show();
}

$("#mentorCancel").on("click", function(){
    $("#mentor-none").show();
    $(".newMentorForm").hide();
});

// 탈퇴 모달창 이벤트
$("button.quit").on("click", function(){
    $("#modal").show();
});
$("div.modal-close").on("click", function(){
    $("#modal").hide();
    $(".quit-reason").hide();
    $("input[name='reason']").prop("checked", false);
    $("input.q-r-input").val("");
});


// 탈퇴 이유 클릭시 이벤트
$("button.quitBtn").attr("disabled", true);

$("input[name='reason']").on("change", function (){
    if($(this).val() == "reason-etc"){
        $(".quit-reason").show();
        $("input.q-r-input").keyup(function (){
            if($(this).val()=="") {
                $("button.quitBtn").attr("disabled", true);
                return;
            } else {
                $("button.quitBtn").attr("disabled", false);
            }
        });
    } else {
        $(".quit-reason").hide();
        $("button.quitBtn").attr("disabled", false);
    }
});


/* 모달 알람 */
function alam() {
    $(".overlay-l").show();
    $(".m-al").show();
    setTimeout(function() { $(".overlay-l").fadeOut();}, 500);
}

/*------------- 닉네임 수정 -------------*/
function nickCheck (){ /* 중복 체크 */
    if(!nickForm.nickname.value) {
        nickForm.nickname.focus();
        return;
    }
    alam();
    $("button.nick-save").attr("disabled", false);
}

function nickSave() { /* 저장 */
    nickForm.submit();
}


/*------------- 개인 정보 수정 -------------*/
function myInfoSave() {
    if(!myInfoForm.phone.value || myInfoForm.phone.value.length != 13) {
        myInfoForm.phone.focus();
        return;
    }
    if(!myInfoForm.address.value) {
        myInfoForm.address.focus();
        return;
    }

    myInfoForm.submit();
}


/*------------- new 멘토 정보 입력 -------------*/
function mentorSave (){ /* 중복 체크 */
    if(!newMentorForm.phone.value) {
        newMentorForm.phone.focus();
        return;
    }

    newMentorForm.submit();
}


/*------------- 회원 탈퇴 -------------*/
function quitBtn (){ /* 중복 체크 */
    myInfoForm.submit();
}
