package com.tag.your.stars.security.oauth;

import lombok.Getter;

import java.util.Map;

@Getter
public class GitHubUser {

    private String email;
    private String name;
    private String imageUrl;
    private String login;

    public static GitHubUser create(final Map<String, Object> attributes) {
        final GitHubUser gitHubUser = new GitHubUser();
        gitHubUser.email = attributes.get("email").toString();
        gitHubUser.name = attributes.get("name").toString();
        gitHubUser.imageUrl = attributes.get("avatar_url").toString();
        gitHubUser.login = attributes.get("login").toString();
        return gitHubUser;

    }

}
