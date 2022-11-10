package com.codefarm.farmer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminMain/*")
public class AdminMainController {

    @GetMapping("/main")
    public void adminMain() {
    }
}
