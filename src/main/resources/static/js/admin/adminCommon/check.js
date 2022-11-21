//  확인 = true, 취소 = false값 flag에 담기

// 유저 관리 탈퇴
function outCheck(){
    var msg = "사용자를 탈퇴시키겠습니까?";
    var flag = confirm(msg);

    if(flag) alert('탈퇴 완료');
}

// 글 수정
function reviseCheck() {
    var msg = "글을 수정 하시겠습니까?";
    var flag = confirm(msg);

    if (flag) alert('수정 완료');
}

// 글 삭제
function deleteWriteCheck() {
    var msg = "게시글을 삭제 하시겠습니까?";
    var flag = confirm(msg);

    if (flag) alert('삭제 완료');
}

// 댓글 삭제
function deleteReplyCheck(){
    var msg = "댓글을 삭제 하시겠습니까?";
    var flag = confirm(msg);

    if(flag) alert('삭제 완료');
}

// 배너 삭제
function deleteBannerCheck() {
    var msg = "배너를 삭제 하시겠습니까?";
    var flag = confirm(msg);

    if (flag) alert('삭제 완료');
}

// 공지 삭제
function deleteNoticeCheck() {
    var msg = "공지를 삭제 하시겠습니까?";
    var flag = confirm(msg);

    if (flag) alert('삭제 완료');
}

// 글 등록
function saveCheck() {
    var msg = "글을 등록하시겠습니까?";
    var flag = confirm(msg);

    if (flag) alert('등록 완료');
}

// 답변 등록
function doReplyCheck() {
    var msg = "답변을 등록하시겠습니까?";
    var flag = confirm(msg);

    if (flag) alert('답변 완료');
}







