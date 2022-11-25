package com.codefarm.farmer.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "TBL_MENTOR")
@Getter
@Setter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Mentor extends Period{
    @Id
    @GeneratedValue
    private Long mentorId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member memberId;

    @Column(nullable = false)
    private String mentorCrop;
    @Column(nullable = false)
    private String mentorYear;
}