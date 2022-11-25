package com.codefarm.farmer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_MEMBER_PROGRAM")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class MemberProgram extends Period{
    @Id
    @GeneratedValue
    private Long programApplyId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PROGRAM_ID")
    private Program program;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member memberId;

    @Column(nullable = false)
    private int programApplyCount;
    private int programPayment;
}
