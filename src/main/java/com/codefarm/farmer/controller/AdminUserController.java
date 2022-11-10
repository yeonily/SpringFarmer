package com.codefarm.farmer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminUser/*")
public class AdminUserController {

    @GetMapping("/user")
    public void adminUser() {
    }
}
