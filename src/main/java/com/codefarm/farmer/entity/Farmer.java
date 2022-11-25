package com.codefarm.farmer.entity;

import com.codefarm.farmer.type.FarmerType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Entity
@Table(name = "TBL_FARMER")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Farmer extends Member{
    @Enumerated(EnumType.STRING)
    private FarmerType farmerType;
}
