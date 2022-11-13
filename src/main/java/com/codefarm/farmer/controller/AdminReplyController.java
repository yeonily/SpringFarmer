package com.codefarm.farmer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminReply/*")
public class AdminReplyController {

    @GetMapping("/reply")
    public void adminReply() {
    }
}
