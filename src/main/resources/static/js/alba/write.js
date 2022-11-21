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




/*-----------------------------------------------------------*/
                    /*첨부파일 이미지 미리보기*/
/*-----------------------------------------------------------*/
function readImage(input) {
    // 인풋 태그에 파일이 있는 경우
    if(input.files && input.files[0]) {
        // 이미지 파일인지 검사 (생략)
        // FileReader 인스턴스 생성
        const reader = new FileReader()
        // 이미지가 로드가 된 경우
        reader.onload = e => {
            const previewImage = document.getElementById("preview-image")
            previewImage.src = e.target.result
        }
        // reader가 이미지 읽도록 하기
        reader.readAsDataURL(input.files[0])
        $(".input-file-button").text("삭제");
    }
}
// input file에 change 이벤트 부여
const inputImage = document.getElementById("input-image")
inputImage.addEventListener("change", e => {
    readImage(e.target)
})

/*버튼이 삭제일 때*/
if($(".input-file-button").text() == "삭제") {
    $(".input-file-button").on("click", function() {
        $("#input-image").val('');
    });
}


/*-----------------------------------------------------------*/
                        /*모집 날짜 조정*/
/*-----------------------------------------------------------*/
var today = new Date();
today = today.getFullYear() + "-" + ("0"+(today.getMonth()+1)).slice(-2) + "-" + ("0"+today.getDate()).slice(-2);

$("#endDate").on("change", function() {
    if($("#startDate").val() > $("#endDate").val() || today > $("#endDate").val()) {
        alert("날짜를 다시 확인해주세요!");
        $("#endDate").val(null);
    }
});

$("#workDay").on("change", function() {
    if($("#workDay").val() < today) {
        alert("날짜를 다시 확인해주세요!");
        $("#workDay").val(null);
    }
});


/*-----------------------------------------------------------*/
                        /*제출버튼 클릭 시*/
/*-----------------------------------------------------------*/
$("button.submitBtn").on("click", function (){
    var inputList = new Array();
    var textareaList = new Array();
    let check = true;

    $("input").each(function(index, item) {
       inputList.push($(item));
    });
    $("textarea").each(function(index, item) {
        textareaList.push($(item));
    });

    for(let i = 0; i < inputList.length; i++) {
        if(inputList[i].val() == '') {
            console.log(inputList[i]);
            inputList[i].css("border", "1px solid red");
            check = false;
        }
    }

    for(let i = 0; i < textareaList.length; i++) {
        if(textareaList[i].val() == '') {
            textareaList[i].css("border", "1px solid red");
            check = false;
        }
    }
    if(!check) {
        alert("입력하지 않은 값이 있습니다.");
        return;
    }

    location.href='/alba/list';
});

$("input").on("change", function() {
    $(this).css("border", "1px solid #e1e4e6");
})

/*-----------------------------------------------------------*/
                        /*지도 api*/
/*-----------------------------------------------------------*/
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
    geocoder.addressSearch($("#locationInput").val(), function(result, status) {
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






