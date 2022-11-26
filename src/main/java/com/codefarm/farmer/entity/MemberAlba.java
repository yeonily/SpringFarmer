package com.codefarm.farmer.entity;

import com.codefarm.farmer.type.Status;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "TBL_MEMBER_ALBA")
@Getter
@Setter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MemberAlba extends Period{
    @Id
    @GeneratedValue
    private Long albaApplyId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ALBA_ID")
    private Alba alba;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member memberId;

    @Enumerated(EnumType.STRING)
    private Status memberStatus;
}
