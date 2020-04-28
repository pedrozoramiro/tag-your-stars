package com.tag.your.stars.project;

import com.tag.your.stars.github.GitHubClient;
import com.tag.your.stars.github.model.Repository;
import com.tag.your.stars.security.event.LoginOrRegisterEvent;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
class ProjectEventListener {

    @Autowired
    private StarProjectService projectService;

    @Autowired
    private GitHubClient gitHubClient;

    @Autowired
    private ModelMapper modelMapper;

    @EventListener
    public void loginOrNewRegister(final LoginOrRegisterEvent userMsg) {
        final String login = userMsg.getUser().getLogin();
        final List<Repository> starredRepositories = this.gitHubClient.findStarredRepositories(login);
        final List<StarProject> starProjects = starredRepositories.stream().map(repo -> this.modelMapper.map(repo, StarProject.class)).collect(Collectors.toList());
        this.projectService.synchronizeProjectsAndKeepTags(login, starProjects);
    }
}
