/*
* community/register.html
* */

// 글자수 세는 이벤트
$('#r-content').keyup(function () {
    let $content = $(this).val();

    $("#count-txt").html($content.length);

    // 글자수 제한
    if ($content.length > 1000) {
        // 200자 부터는 타이핑 되지 않도록
        $(this).val($(this).val().substring(0, 1000));
        // 200자 넘으면 알림창 뜨도록
        alert('글자수는 200자까지 입력 가능합니다.');
    };
});