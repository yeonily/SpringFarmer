package com.codefarm.farmer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_CROP")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Crop extends Period{
    @Id
    @GeneratedValue
    private Long cropId;
    @Column(nullable = false)
    private String cropKeyword;
    @Column(nullable = false)
    private String cropTitle;
    @Column(nullable = false)
    private String cropImage;
    @Column(nullable = false)
    private String cropContent;
}
