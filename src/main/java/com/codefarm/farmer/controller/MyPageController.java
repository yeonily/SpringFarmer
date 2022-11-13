package com.codefarm.farmer.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/myPage/*")
public class MyPageController {

    @GetMapping("/setting")
    public String mainPage(){
        return "/myPage/setting";
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
}
