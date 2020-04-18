package com.tag.your.stars.github;

import com.tag.your.stars.github.model.Contributor;
import com.tag.your.stars.github.model.Repository;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@FeignClient(name = "GITHUB-SERVICE",url ="${URL_GITHUB}")
public interface GitHubClient {

    String AUTH_TOKEN = "Authorization";

    @RequestMapping(method = RequestMethod.GET, value = "/user")
    Contributor getUserLoggedDetail(@RequestHeader(GitHubClient.AUTH_TOKEN) String bearerToken);

    @RequestMapping(method = RequestMethod.GET, value = "/users/{username}/starred")
    List<Repository> findStarredRepositories(@PathVariable("username") String userName);

}

