package com.codefarm.farmer.controller.community;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/community/*")
public class CommunityController {

    @GetMapping("")
    public String noticePage(){
        return "/community/community";
    }

    @GetMapping("/detail")
    public String detailPage(){
        return "/community/detail";
    }

    @GetMapping("/register")
    public String writePage(){
        return "/community/register";
    }
}
