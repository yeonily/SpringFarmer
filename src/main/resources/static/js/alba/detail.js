
/*-----------------------------------------------------------*/
                        /*모집마감일 경우*/
/*-----------------------------------------------------------*/
var $status = $("#main_fixed_category"); // 모집 상태를 저장

if($("#main_fixed_category").text() == "모집마감" || $(".left-div span").text() == "모집마감") {
    $("#main_fixed_category").text("모집마감");
    $(".left-div span").text("모집마감");
    $("#main_fixed_button").attr("disabled", "false");
    $("#main_fixed_button").html("모집마감");
    $("#main_fixed_button").css({background : "#357e55", cursor : "default"});
}


/*-----------------------------------------------------------*/
                    /*지원하기 버튼 클릭 시 모달*/
/*-----------------------------------------------------------*/
$("button#main_fixed_button").on("click", function(){
    $("#modal").show();
});
$("button.cancel").on("click", function(){
    $("#modal").hide();
});

/*메일전송 완료 버튼 클릭 시*/
$("button.applyBtn").on("click", function(){
    $("#modal").hide();
    $("#modalSuccess").show();
});



/*-----------------------------------------------------------*/
                    /*삭제하기 버튼 클릭 시 모달*/
/*-----------------------------------------------------------*/
$("button#remove_button").on("click", function() {
   if(confirm("삭제하기를 선택하셨습니다. 확인(삭제) 또는 취소 버튼을 클릭해주세요.")) {
       alert("글 삭제가 정상적으로 처리되었습니다.");
       location.href = "/alba/list";
   } else {
       alert("글 삭제가 취소되었습니다.");
   }
});



/*-----------------------------------------------------------*/
                            /*지도 api*/
/*-----------------------------------------------------------*/
mapSearch();

function mapSearch() {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch("충청남도 논산시 부적면 신교리 677-2 아침애딸기", function(result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
            $("div#map").show();

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });
            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: '<div style="width:150px;text-align:center;padding:6px 0;">아르바이트 장소</div>'
            });
            infowindow.open(map, marker);
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        } else {
            alert("주소를 정확하게 다시 입력해주세요!");
            $("div#map").css("display", "none");
        }
    });
}