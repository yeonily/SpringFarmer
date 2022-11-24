package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminNotice/*")
public class AdminNoticeController {

    @GetMapping("/notice")
    public String adminNotice() {return "/adminNotice/notice";
    }

    @GetMapping("/notice-write")
    public String adminNoticeWrite() {return "/adminNotice/notice-write";
    }

    @GetMapping("/notice-update")
    public String adminNoticeDetail() {return "/adminNotice/notice-update";
    }
}
