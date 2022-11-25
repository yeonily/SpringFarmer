package com.codefarm.farmer.entity;

import com.codefarm.farmer.type.Oauth;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_MEMBER")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Member extends Period{
    @Id
    @GeneratedValue
    private Long memberId;
    @Column(nullable = false)
    private String memberName;
    @Column(nullable = false)
    private String memberNickname;
    @Column(nullable = false)
    private String memberPhone;
    @Column(nullable = false)
    private String memberLocation;
    @Column(nullable = false)
    private String memberBirth;
    @Column(nullable = false)
    private String memberEmail;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Oauth memberOauth;
}
