package com.codefarm.farmer.entity;

import com.codefarm.farmer.type.BannerStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "TBL_BANNER")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Banner extends Period{
    @Id
    @GeneratedValue
    private Long bannerId;
    @Column(nullable = false)
    private String bannerTitle;
    @Column(nullable = false)
    private String bannerInfo;
    @Enumerated(EnumType.STRING)
    private BannerStatus bannerStatus;
    @Column(nullable = false)
    private String bannerRealname;
    private LocalDateTime bannerStartDate;
    private LocalDateTime bannerEndDate;
}
