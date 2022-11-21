package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminUser/*")
public class AdminUserController {

    @GetMapping("/user")
    public String adminUser() {
        return "/adminUser/user";
    }
}
