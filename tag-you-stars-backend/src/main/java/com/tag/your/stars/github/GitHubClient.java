package com.tag.your.stars.github;

import feign.Param;
import feign.RequestLine;

interface GitHubApi {

    @RequestLine("POST /login/oauth/access_token")
    String login(@Param("client_id") String clientId, @Param("client_secret") String clientSecret,@Param("code") String code);

    @RequestLine("GET /user")
    Contributor getUserDetail();
//
//    https://github.com/login/oauth/access_token?
//    // client_id=dce7e3025651dbf7d995&
//    // client_secret=97d201be7a1b0c9022f39c157b15087dc4dfc9e9
//    // &code=6103351b71f0dddfdc7a




    class Contributor {
        String login;
        String name;
        String starred_url;
    }

}
