package com.tag.your.stars.github;

import com.tag.your.stars.github.model.Repository;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@FeignClient(name = "GITHUB-SERVICE", url = "${URL_GITHUB}")
public interface GitHubClient {

    @RequestMapping(method = RequestMethod.GET, value = "/users/{username}/starred")
    List<Repository> findStarredRepositories(@PathVariable("username") String userName);

}

