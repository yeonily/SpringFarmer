package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminAsk/*")
public class AdminAskController {

    @GetMapping("/ask")
    public void adminAsk() {
    }

    @GetMapping("/ask_write")
    public void adminAskWrite() {
    }
}
