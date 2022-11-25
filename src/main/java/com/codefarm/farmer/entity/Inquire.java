package com.codefarm.farmer.entity;

import com.codefarm.farmer.type.Status;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_INQUIRE")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Inquire extends Period{
    @Id
    @GeneratedValue
    private Long inquireId;
    @Column(nullable = false)
    private String inquireQTitle;
    @Column(nullable = false)
    private String inquireQContent;
    private String inquireAnswer;
    @Enumerated(EnumType.STRING)
    private Status inquireStatus;
}
