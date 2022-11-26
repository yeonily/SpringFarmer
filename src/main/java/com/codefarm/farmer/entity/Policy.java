package com.codefarm.farmer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_POLICY")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Policy extends Period{
    @Id
    @GeneratedValue
    private Long policyId;
    @Column(nullable = false)
    private String policyKeyword;
    @Column(nullable = false)
    private String policyTitle;
    @Column(nullable = false)
    private String policyContent;
}
