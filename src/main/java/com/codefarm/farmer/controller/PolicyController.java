package com.codefarm.farmer.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/information/*")
public class PolicyController {

    @GetMapping("/policy")
    public void policy(){

    }
}
