package com.tag.your.stars.github;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "GITHUB-SERVICE",url ="${URL_GITHUB_LOGIN}")
public interface GitHubOauthClient {
    @RequestMapping(method = RequestMethod.POST, value = "/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}")
    String login(@RequestParam("code") String code);
}
