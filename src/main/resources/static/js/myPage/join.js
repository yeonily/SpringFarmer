/*
* myPage/joinForm.js
* */

// input에 이름 입력 시 실시간으로 출력
$("input[name='name']").keyup(function(){
    $("span#name").html($(this).val());
});


// 휴대폰 번호일 때 자동 하이픈(-) 입력 - 미적용
const autoHyphen = (target) => {
    target.value = target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
}


/*------------- 닉네임 수정 -------------*/
function joinNickCheck (){ /* 중복 체크 */
    if(!joinForm.nickname.value) {
        joinForm.nickname.focus();
        return;
    }
    alam();
    $("button.nick-save").attr("disabled", false);
}