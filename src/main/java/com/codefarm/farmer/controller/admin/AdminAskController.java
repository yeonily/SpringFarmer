package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminAsk/*")
public class AdminAskController {

    @GetMapping("/ask")
    public String adminAsk() {return "/adminAsk/ask";}

    @GetMapping("/ask-detail")
    public String adminAskDetail() {return "/adminAsk/ask-detail";}
}
