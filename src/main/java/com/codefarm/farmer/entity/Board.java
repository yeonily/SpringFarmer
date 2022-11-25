package com.codefarm.farmer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "TBL_BOARD")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Board extends Period{
    @Id
    @GeneratedValue
    private Long boardId;
    @Column(nullable = false)
    private String boardTitle;
    @Column(nullable = false)
    private String boardContent;
    private LocalDateTime boardRegisterDate;
    @ColumnDefault("0")
    private int boardViewCount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "board")
    private List<BoardFile> boardFiles;
}





















