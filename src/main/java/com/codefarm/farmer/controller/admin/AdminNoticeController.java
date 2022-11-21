package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminNotice/*")
public class AdminNoticeController {

    @GetMapping("/notice")
    public void adminNotice() {
    }

    @GetMapping("/notice-write")
    public void adminNoticeWrite() {
    }

    @GetMapping("/notice-update")
    public void adminNoticeDetail() {
    }


}
