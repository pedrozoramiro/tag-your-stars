package com.tag.your.stars;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class TagYouStarsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TagYouStarsBackendApplication.class, args);
	}

}
