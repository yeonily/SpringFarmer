package com.codefarm.farmer.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "TBL_CHAT_ROOM")
@Getter
@Setter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChatRoom extends ChatPeriod {
    @Id
    @GeneratedValue
    private Long chatRoomId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MENTOR_ID")
    private Mentor mentor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
}
