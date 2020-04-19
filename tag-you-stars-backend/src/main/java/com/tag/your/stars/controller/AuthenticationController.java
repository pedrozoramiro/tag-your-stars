package com.tag.your.stars.controller;

import com.tag.your.stars.controller.dto.LoginDTO;
import com.tag.your.stars.github.GitHubClient;
import com.tag.your.stars.github.GitHubOauthClient;
import com.tag.your.stars.github.model.Contributor;
import com.tag.your.stars.github.model.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {

    @Autowired
    private GitHubOauthClient gitHubOauthClient;

    @Autowired
    private GitHubClient gitHubClient;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Contributor create(@RequestBody final LoginDTO login) {
        //TODO: criar o meu próprio token a partir do code e anexar informacoes como nomes do usuario
        final String tokenText = this.gitHubOauthClient.login(login.getCode());
        final Token token = Token.parse(tokenText);
        final Contributor contributor = this.gitHubClient.getUserLoggedDetail(token.getBearerToken());
        return contributor;
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public LoginDTO get() {

        return new LoginDTO();
    }

}
