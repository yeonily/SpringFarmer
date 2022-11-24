/*
* mento/write.html
* */

    // $("#first_page").show();
    // $("#second_page").hide();


    /*
    * 예시 클릭 시 바뀌는 부분
    * */

    //경력 소개 예시 눌렀을 때
    $("#carrer_intro_example").on("click" , function () {
        $("#carrer_intro").show();
        $("#mento_result").hide();
        $("#mento_intro_title").hide();
        $("#mento_intro_content").hide();
    })
    //멘토 추천 이유 예시 눌렀을 때
    $("#mento_result_example").on("click" , function () {
        $("#carrer_intro").hide();
        $("#mento_result").show();
        $("#mento_intro_title").hide();
        $("#mento_intro_content").hide();
    })
    //멘토 홍보글 제목 작성 예시 눌렀을 때
    $("#mento_intro_title_example").on("click" , function () {
        $("#carrer_intro").hide();
        $("#mento_result").hide();
        $("#mento_intro_title").show();
        $("#mento_intro_content").hide();
    })
    //멘토 홍보글 내용 작성 예시 눌렀을 때
    $("#mento_intro_content_example").on("click" , function () {
        $("#carrer_intro").hide();
        $("#mento_result").hide();
        $("#mento_intro_title").hide();
        $("#mento_intro_content").show();
    })






    // 다음 버튼 누를시 이동, 버튼 색 변경
    function nextButton(){
        $("#first_page").hide();
        $("#second_page").show();
        $("#footer_button_prev").css("cursor","pointer");
        $("#footer_button_prev").css("background-color","#f3f4f5");
        $("#footer_button_prev").css("color","#767d82");
        $(".list_sub").css("color","#202325");
        $(".list_sub").css("font-weight",500);
        $(".list_main").css("color" , "#adb3b8");
        $(".list_main").css("font-weight",400);
        $("#footer_button_next").hide();
        $(".submitBtn").show();

    }

//  이전 버튼 누를 시 이동, 버튼 색 변경
    function prevButton(){
        $("#second_page").hide();
        $("#first_page").show();
        $("#footer_button_prev").css("cursor","not-allowed");
        $("#footer_button_prev").css("background-color","#f3f4f5");
        $("#footer_button_prev").css("color","#767d82");
        $(".list_main").css("color","#202325");
        $(".list_main").css("font-weight",500);
        $(".list_sub").css("color" , "#adb3b8");
        $(".list_sub").css("font-weight",400);
        $("#footer_button_next").text("다음");
        $("#footer_button_next").append("<img src=\"/image/program/next_register.gif\" class=\"footer_next_image\">");
        $("#footer_button_next").show();
        $(".submitBtn").hide();
    }

    //왼쪽 사이드 바 클릭 시 변경
    function listMainClick(){
        $("#first_page").show();
        $("#second_page").hide();
        $("#footer_button_prev").css("cursor","not-allowed");
        $("#footer_button_prev").css("background-color","#f3f4f5");
        $("#footer_button_prev").css("color","#767d82");
        $(".list_main").css("color","#202325");
        $(".list_main").css("font-weight",500);
        $(".list_sub").css("color" , "#adb3b8");
        $(".list_sub").css("font-weight",400);
        $("#footer_button_next").text("다음");
        $("#footer_button_next").append("<img src=\"/image/program/next_register.gif\" class=\"footer_next_image\">")
        $("#footer_button_next").show();
        $(".submitBtn").hide();
}

    function listSubClick(){
        $("#first_page").hide();
        $("#second_page").show();
        $("#footer_button_prev").css("cursor","pointer");
        $("#footer_button_prev").css("background-color","#f3f4f5");
        $("#footer_button_prev").css("color","#767d82");
        $(".list_sub").css("color","#202325");
        $(".list_sub").css("font-weight",500);
        $(".list_main").css("color" , "#adb3b8");
        $(".list_main").css("font-weight",400);
        $("#footer_button_next").hide();
        $(".submitBtn").show();
    }


    /*제출하기 버튼 클릭 시 유효성 검사*/
    $(".submitBtn").on("click" , function () {
        var inputList = new Array();
        var textareaList = new Array();
        let check = true;

        $("input:not(.note-editor input , #attach)").each(function(index, item){
            inputList.push($(item));
        });

        $("textarea").each(function(index, item) {
            textareaList.push($(item));
        });

        console.log(textareaList.length);
        for(let i = 0; i < inputList.length; i++) {
            if(inputList[i].val() == '') {
                inputList[i].css("border", "1px solid red");
                check = false;
            }
        }
        for(let i = 0; i < textareaList.length; i++) {
            console.log(textareaList[i].val());
            if(textareaList[i].val() == '') {
                textareaList[i].css("border", "1px solid red");
                check = false;
            }
        }

        /*/!*textarea 비어있을 때 표시*!/
        if($(".textarea_content").text() == ''){
            $(".textarea_content").css("border", "1px solid red");
            check = false;
        }*/

        if(!check) {
            alert("입력하지 않은 값이 있습니다.");
            return;
        }

        alert("글이 정상적으로 등록되었습니다.");
        location.href='/mento/list';
    })



    /*/!*파일 첨부*!/
    const file = document.querySelector($("#attach"));
    const thumbnail = document.querySelector($(".thumbnail"));
    file.addEventListener("change",function(e){
        // console.log(e.target.files[0]);
        var reader = new FileReader();

        // readAsDataUrl은 byte단위로 읽어오고 다 읽었을 때 load로 reader에 저장
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function(e){
            console.log(e.target.result);
            let url = e.target.result;
            // 이미지 파일인지 아닌지 검사하여 이미지 파일이 아닐 경우 원래 attach.png 이미지로 변경
            if(!(url.includes("image"))){
                thumbnail.style.backgroundImage = "url('"+url+"')";
            }else{
                thumbnail.style.backgroundImage = "url(img/attach.png)";
            }

            // console.log(url.indexOf("image"));


        }
    });


    /!*-----------------------------------------------------------*!/
    /!*첨부파일 이미지 미리보기*!/
    /!*-----------------------------------------------------------*!/
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
            $(".input-file-button").text("수정");
        }
    }

    // input file에 change 이벤트 부여
    const inputImage = document.getElementById("input-image")
    inputImage.addEventListener("change", e => {
        readImage(e.target)
    })

    /!*버튼이 삭제일 때*!/
    if($(".input-file-button").text() == "삭제") {
        $(".input-file-button").on("click", function() {
            $("#input-image").val('');
        });
    }*/



    /*나가기 모달창*/
    $("#header_right_button2").on("click", function () {
        console.log("들어옴");
        $("#c-overlay").show();
    })

    $(".button-1").on("click",function () {
        location.href = '/mento/list';
    })

    $(".button-2").on("click",function () {
        $("#c-overlay").hide();
    })

