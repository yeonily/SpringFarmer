package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminProgram/*")
public class AdminProgramController {

    @GetMapping("/program-participant")
    public String adminProgramParticipant() {return "/adminProgram/program-participant";}

    @GetMapping("/program-list")
    public String adminProgramList(){ return "/adminProgram/program-list";}

    @GetMapping("/program-pay")
    public String adminPay(){return "/adminProgram/program-pay";}

}