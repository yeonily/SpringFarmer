package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminPolicy/*")
public class AdminPolicyController {

    @GetMapping("/policy")
    public String adminPolicy() {return "/adminPolicy/policy";
    }

    @GetMapping("/policy-write")
    public String adminPolicyWrite() {return "/adminPolicy/policy-write";
    }

    @GetMapping("/policy-update")
    public String adminPolicyUpdate() {return "/adminPolicy/policy-update";
    }
}
