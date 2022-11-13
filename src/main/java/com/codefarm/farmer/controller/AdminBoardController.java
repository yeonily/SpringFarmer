package com.codefarm.farmer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminBoard/*")
public class AdminBoardController {

    @GetMapping("/board")
    public void adminBoard() {
    }
}
