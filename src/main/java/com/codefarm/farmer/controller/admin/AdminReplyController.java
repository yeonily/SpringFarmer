package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminReply/*")
public class AdminReplyController {

    @GetMapping("/mentor-reply")
    public String adminMentorReply() {return "/adminReply/mentor-reply";
    }

    @GetMapping("/board-reply")
    public String adminBoardReply() {return "/adminReply/board-reply";
    }


}
