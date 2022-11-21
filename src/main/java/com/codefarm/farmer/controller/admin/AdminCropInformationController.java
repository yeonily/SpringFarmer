package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminCropInformation/*")
public class AdminCropInformationController {

    @GetMapping("/cropInformation")
    public String adminCropInformation() {return "/adminCropInformation/cropInformation";
    }

    @GetMapping("/cropInformation-write")
    public String adminCropInformationWrite() {return "/adminCropInformation/cropInformation-write";
    }

    @GetMapping("/cropInformation-update")
    public String adminCropInformationUpdate() {return "/adminCropInformation/cropInformation-update";
    }
}
