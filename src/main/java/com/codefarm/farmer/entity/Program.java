package com.codefarm.farmer.entity;

import com.codefarm.farmer.type.ProgramLevel;
import com.codefarm.farmer.type.ProgramType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "TBL_PROGRAM")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Program extends Period{
    @Id
    @GeneratedValue
    private Long programId;
    @Column(nullable = false)
    private String programCrop;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ProgramType programType;
    @Column(nullable = false)
    private String programTarget1;
    @Column(nullable = false)
    private String programTarget2;
    @Column(nullable = false)
    private String programTarget3;
    @Column(nullable = false)
    private String programTarget4;
    @Column(nullable = false)
    private String programTitle;
    @Column(nullable = false)
    private String programTitleSub;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ProgramLevel programLevel;
    @Column(nullable = false)
    private String programResult1;
    @Column(nullable = false)
    private String programResult2;
    @Column(nullable = false)
    private String programResult3;
    @Column(nullable = false)
    private String programResult4;
    @Column(nullable = false)
    private String programFarmerInfo;
    @Column(nullable = false)
    private String programInfoTitle1;
    @Column(nullable = false)
    private String programInfoContent1;
    @Column(nullable = false)
    private String programInfoTitle2;
    @Column(nullable = false)
    private String programInfoContent2;
    @Column(nullable = false)
    private String programInfoTitle3;
    @Column(nullable = false)
    private String programInfoContent3;
    @Column(nullable = false)
    private String programInfoTitle4;
    @Column(nullable = false)
    private String programInfoContent4;
    private LocalDateTime programWorkDate;
    private LocalDateTime programWorkStartTime;
    private LocalDateTime programWorkEndTime;
    private LocalDateTime programApplyStartDate;
    private LocalDateTime programApplyEndDate;
    @Column(nullable = false)
    @ColumnDefault("0")
    private int programApplyCount;
    @Column(nullable = false)
    private int programApplyTotalCount;
    @Column(nullable = false)
    private int programPrice;
    @Column(nullable = false)
    private String programLocation;
    @Column(nullable = false)
    private String programInquire;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "program")
    private List<ProgramFile> programFiles;
}






















