package com.tag.your.stars;

import com.tag.your.stars.security.oauth.OauthProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
@EnableConfigurationProperties(OauthProperties.class)
public class TagYouStarsBackendApplication {
    public static void main(final String[] args) {
        SpringApplication.run(TagYouStarsBackendApplication.class, args);
    }
}
