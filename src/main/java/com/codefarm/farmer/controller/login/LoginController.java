package com.codefarm.farmer.controller.login;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
//@RequestMapping("/login")
public class LoginController {

    @GetMapping("/login")
    public String loginPage(){
            return "/login/login";
        }
}
