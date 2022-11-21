package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminBanner/*")
public class AdminBannerController {

    @GetMapping("/banner")
    public String adminBanner() {
        return "/adminBanner/banner";
    }

    @GetMapping("/banner-write")
    public String adminBannerWrite() {
        return "/adminBanner/banner-write";
    }
}