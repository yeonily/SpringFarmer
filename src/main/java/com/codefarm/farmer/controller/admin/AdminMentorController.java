package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminMentor/*")
public class AdminMentorController {

    @GetMapping("/mentor")
    public void adminMentorMentor() {
    }

    @GetMapping("/promotion")
    public void adminMentorPromotion(){

    }

}