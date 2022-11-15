package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminProgram/*")
public class AdminProgramController {

    @GetMapping("/program_participant")
    public void adminProgramParticipant() {
    }

    @GetMapping("/program_list")
    public void adminProgramList(){

    }

    @GetMapping("/program_pay")
    public void adminPay(){

    }

}