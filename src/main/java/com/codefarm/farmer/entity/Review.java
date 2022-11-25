package com.codefarm.farmer.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Table(name = "TBL_REVIEW")
@Getter
@Setter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Review extends Period{
    @Id
    @GeneratedValue
    private Long reviewId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member memberId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MENTOR_BOARD_ID")
    private MentorBoard mentorBoard;

    @Column(nullable = false)
    private String reviewContent;
    @Column(nullable = false)
    @ColumnDefault("5")
    private int reviewStar;
}
