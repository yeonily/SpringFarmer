package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminReply/*")
public class AdminReplyController {

    @GetMapping("/mentor_reply")
    public void adminMentorReply() {
    }

    @GetMapping("/board_reply")
    public void adminBoardReply() {
    }


}
