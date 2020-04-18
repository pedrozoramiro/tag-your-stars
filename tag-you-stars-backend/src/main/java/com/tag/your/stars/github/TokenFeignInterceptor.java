package com.tag.your.stars.github;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.springframework.stereotype.Component;

@Component
public class TokenFeignInterceptor implements RequestInterceptor {

    private static final String AUTHORIZATION_HEADER="Authorization";
    private static final String TOKEN_TYPE = "Bearer";

    @Override
    public void apply(RequestTemplate requestTemplate) {
       requestTemplate.header(AUTHORIZATION_HEADER, String.format("%s %s", TOKEN_TYPE, "d4419fe6abfb4394fe22aad92ac0df11e88e557b"));
    }
}
