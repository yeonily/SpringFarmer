package com.codefarm.farmer.entity;

import com.codefarm.farmer.type.ChatStatus;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "TBL_CHAT")
@Getter
@Setter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Chat extends ChatPeriod{
    @Id
    @GeneratedValue
    private Long chatId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CHAT_ROOM_ID")
    private ChatRoom chatRoom;

    @Column(nullable = false)
    private String chatMessage;
    @Enumerated(EnumType.STRING)
    private ChatStatus chatStatus;
}
