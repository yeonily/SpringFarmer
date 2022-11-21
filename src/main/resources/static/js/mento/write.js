
    // $("#first_page").show();
    // $("#second_page").hide();


    // 다음 버튼 누를시 이동, 버튼 색 변경
    function nextButton(){
        $("#first_page").hide();
        $("#second_page").show();
        $("#footer_button_prev").css("cursor","pointer");
        $("#footer_button_prev").css("background-color","#47c880");
        $("#footer_button_prev").css("color","#fff");
        $(".list_sub").css("color","#202325");
        $(".list_sub").css("font-weight",500);
        $(".list_main").css("color" , "#adb3b8");
        $(".list_main").css("font-weight",400);

    }

//  이전 버튼 누를 시 이동, 버튼 색 변경
    function prevButton(){
        $("#second_page").hide();
        $("#first_page").show();
        $("#footer_button_prev").css("cursor","not-allowed");
        $("#footer_button_prev").css("background-color","#fcfcfc");
        $("#footer_button_prev").css("color","#eaecee");
        $(".list_main").css("color","#202325");
        $(".list_main").css("font-weight",500);
        $(".list_sub").css("color" , "#adb3b8");
        $(".list_sub").css("font-weight",400);

    }

    //왼쪽 사이드 바 클릭 시 변경
    function listMainClick(){
        $("#first_page").show();
        $("#second_page").hide();
        $("#footer_button_prev").css("cursor","not-allowed");
        $("#footer_button_prev").css("background-color","#fcfcfc");
        $("#footer_button_prev").css("color","#eaecee");
        $(".list_main").css("color","#202325");
        $(".list_main").css("font-weight",500);
        $(".list_sub").css("color" , "#adb3b8");
        $(".list_sub").css("font-weight",400);
    }

    function listSubClick(){
        $("#first_page").hide();
        $("#second_page").show();
        $("#footer_button_prev").css("cursor","pointer");
        $("#footer_button_prev").css("background-color","#47c880");
        $("#footer_button_prev").css("color","#fff");
        $(".list_sub").css("color","#202325");
        $(".list_sub").css("font-weight",500);
        $(".list_main").css("color" , "#adb3b8");
        $(".list_main").css("font-weight",400);
    }
