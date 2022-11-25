package com.codefarm.farmer.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "TBL_MENTOR_BOARD")
@Getter
@Setter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MentorBoard extends Period{
    @Id
    @GeneratedValue
    private Long mentorBoardId;
    @Column(nullable = false)
    private String mentorCareer;
    @Column(nullable = false)
    private String mentorExCareer;
    @Column(nullable = false)
    private String mentorStrongTitle1;
    @Column(nullable = false)
    private String mentorStrongContent1;
    @Column(nullable = false)
    private String mentorStrongTitle2;
    @Column(nullable = false)
    private String mentorStrongContent2;
    @Column(nullable = false)
    private String mentorStrongTitle3;
    @Column(nullable = false)
    private String mentorStrongContent3;
    @Column(nullable = false)
    private String mentorTitle;
    @Column(nullable = false)
    private String mentorTitleSub;
    @Column(nullable = false)
    private String mentorTextTitle;
    @Column(nullable = false)
    private String mentorTextContent;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member memberId;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "mentorBoard")
    private List<MentorFile> mentorFiles;
}



















