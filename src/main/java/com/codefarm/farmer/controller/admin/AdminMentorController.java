package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminMentor/*")
public class AdminMentorController {

    @GetMapping("/mentor")
    public String adminMentorMentor() {return "/adminMentor/mentor";}

    @GetMapping("/promotion")
    public String adminMentorPromotion(){return "/adminMentor/promotion";}

}