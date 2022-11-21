package com.codefarm.farmer.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

@Controller
@Slf4j
@RequestMapping("/mypage/*")
public class MyPageController {

    @GetMapping("/setting")
//    tab : 마이페이지 메인 화면에서 탭 이동 때 사용
    public Model mainPage(@RequestParam(value = "nav", required = false)String nav, Model model){
        log.info(nav);
        return model.addAttribute(Optional.ofNullable("/myPage/setting").orElse("/myPage/setting" + ("?nav=" + nav)), nav);
//        return Optional.ofNullable("/myPage/setting").orElse("/myPage/setting?nav" + nav);
    }

    @GetMapping("/setting/quit")
    public String quitPage(){
        return "/myPage/quit";
    }

    @GetMapping("/payment")
    public String paymentPage(){
        return "/myPage/payment";
    }

    @GetMapping("/community")
    public String communityPage(){
        return "/myPage/community";
    }

    @GetMapping("/program")
    public String programPage(){
        return "/myPage/program";
    }

    @GetMapping("/alba")
    public String albaPage(){
        return "/myPage/alba";
    }

    @GetMapping("/inquire")
    public String inquirePage(){
        return "/myPage/inquire";
    }

    @GetMapping("/inquire/qustion")
    public String myInquirePage(){
        return "/myPage/myInquire";
    }

    @GetMapping("/mentoring")
    public String mentoringPage(){
        return "/myPage/mentoring";
    }
}
