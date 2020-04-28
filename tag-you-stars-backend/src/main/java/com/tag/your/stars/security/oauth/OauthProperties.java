package com.tag.your.stars.security.oauth;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "oauth")
@Data
public class OauthProperties {
    private String tokenSecret;
    private long tokenExpirationMsec;
    private String redirect;
}
