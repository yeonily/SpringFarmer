package com.codefarm.farmer.entity;


import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "TBL_ALBA")
@Getter
@Setter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Alba extends Period{
    @Id
    @GeneratedValue
    private Long albaId;
    @Column(nullable = false)
    private String albaTitle;
    @Column(nullable = false)
    private String albaImage;
    @Column(nullable = false)
    private String albaTitleOne;
    private LocalDateTime albaApplyStartDate;
    private LocalDateTime albaApplyEndDate;
    private LocalDateTime albaWorkDate;
    @ColumnDefault("0")
    private int albaApplyCount;
    private int albaApplyTotalCount;
    @Column(nullable = false)
    private String albaAddress;
    @Column(nullable = false)
    private int albaPrice;
    @Column(nullable = false)
    private String albaMainTitle;
    @Column(nullable = false)
    private String albaMainContent;
    @Column(nullable = false)
    private String albaStrongTitle1;
    @Column(nullable = false)
    private String albaStrongContent1;
    @Column(nullable = false)
    private String albaStrongTitle2;
    @Column(nullable = false)
    private String albaStrongContent2;
    @Column(nullable = false)
    private String albaStrongTitle3;
    @Column(nullable = false)
    private String albaStrongContent3;
    @Column(nullable = false)
    private String albaBannerTitle;
    @Column(nullable = false)
    private String albaBannerOne;
    @Column(nullable = false)
    private String albaTextTitle;
    @Column(nullable = false)
    private String albaText;
    @Column(nullable = false)
    private String albaProfileTitle1;
    @Column(nullable = false)
    private String albaProfileContent1;
    @Column(nullable = false)
    private String albaProfileTitle2;
    @Column(nullable = false)
    private String albaProfileContent2;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
}
