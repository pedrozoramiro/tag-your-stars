package com.tag.your.stars.controller;

import com.tag.your.stars.controller.dto.ProjectDTO;
import com.tag.your.stars.project.StarProject;
import com.tag.your.stars.project.StarProjectService;
import com.tag.your.stars.security.principal.UserPrincipal;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class StarProjectController {

    @Autowired
    private StarProjectService starProjectService;

    @Autowired
    private ModelMapper modelMapper;

    @RequestMapping(value = "/projects", method = RequestMethod.GET)
    public List<ProjectDTO> findAllProjects(@AuthenticationPrincipal final UserPrincipal userPrincipal, @RequestParam(defaultValue = "") final String filter) {
        final List<StarProject> projects = this.starProjectService.findAllStarProjectsBy(userPrincipal.getGitHubLogin(), filter);
        return projects.stream().map(project -> this.modelMapper.map(project, ProjectDTO.class)).collect(Collectors.toList());
    }

    @RequestMapping(value = "/projects/{id}/tag/{tag}", method = RequestMethod.POST)
    public void addTag(@PathVariable("id") final String projectId, @PathVariable("tag") final String tag) {
        this.starProjectService.addTag(projectId, tag);
    }

    @RequestMapping(value = "/projects/{id}/tag/{tag}", method = RequestMethod.DELETE)
    public void removeTag(@PathVariable("id") final String projectId, @PathVariable("tag") final String tag) {
        this.starProjectService.removeTag(projectId, tag);
    }
}
