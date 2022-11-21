package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminProgram/*")
public class AdminProgramController {

    @GetMapping("/program-participant")
    public void adminProgramParticipant() {
    }

    @GetMapping("/program-list")
    public void adminProgramList(){

    }

    @GetMapping("/program-pay")
    public void adminPay(){

    }

}