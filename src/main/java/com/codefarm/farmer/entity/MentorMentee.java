package com.codefarm.farmer.entity;

import com.codefarm.farmer.type.Status;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "TBL_MENTOR_MENTEE")
@Getter
@Setter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MentorMentee extends Period{
    @Id
    @GeneratedValue
    private Long mentorMenteeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MENTOR_ID")
    private Mentor mentor;

//    여기 확인 필요@@
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member mentee;

    @Enumerated(EnumType.STRING)
    private Status menteeStatus;
    @Column(nullable = false)
    private String menteeComment;
}
