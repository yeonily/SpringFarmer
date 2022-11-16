package com.codefarm.farmer.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/mentor/*")
public class MentorController {

    @GetMapping("/mentorIntro")
    public void intro(){

    }

    @GetMapping("/mentorList")
    public void list(){

    }
    @GetMapping("/mentorDetail")
    public void detail(){

    }
    @GetMapping("/mentorWrite")
    public void write(){

    }
}
