package com.codefarm.farmer.entity;

import com.codefarm.farmer.type.UserType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Entity
@Table(name = "TBL_USER")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class User extends Member{
    @Enumerated(EnumType.STRING)
    private UserType userType;
}
