package com.codefarm.farmer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "TBL_NOTICE")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Notice extends Period{
    @Id
    @GeneratedValue
    private Long noticeId;
    @Column(nullable = false)
    private String noticeTitle;
    @Column(nullable = false)
    private String noticeContent;
    @ColumnDefault("0")
    private int noticeViewCount;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "notice")
    private List<NoticeFile> noticeFiles;

}
