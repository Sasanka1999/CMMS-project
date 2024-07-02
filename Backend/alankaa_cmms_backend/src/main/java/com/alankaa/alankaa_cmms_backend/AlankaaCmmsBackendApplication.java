package com.alankaa.alankaa_cmms_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = "com.alankaa.alankaa_cmms_backend")
public class AlankaaCmmsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlankaaCmmsBackendApplication.class, args);
	}

}
