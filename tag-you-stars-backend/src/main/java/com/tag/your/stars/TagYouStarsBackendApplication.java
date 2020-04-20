package com.tag.your.stars;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
@EnableOAuth2Sso
public class TagYouStarsBackendApplication {

    public static void main(final String[] args) {
        SpringApplication.run(TagYouStarsBackendApplication.class, args);
    }

}
