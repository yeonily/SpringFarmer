package com.codefarm.farmer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class FarmerApplication {

    public static void main(String[] args) {
        SpringApplication.run(FarmerApplication.class, args);
    }

}
