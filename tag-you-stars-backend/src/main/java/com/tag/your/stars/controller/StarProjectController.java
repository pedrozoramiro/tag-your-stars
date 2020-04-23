package com.tag.your.stars.controller;

import com.tag.your.stars.controller.dto.ProjectDTO;
import com.tag.your.stars.project.StarProject;
import com.tag.your.stars.project.StarProjectService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("http://localhost:3000")
public class StarProjectController {

    @Autowired
    private StarProjectService starProjectService;

    @Autowired
    private ModelMapper modelMapper;

    @RequestMapping(value = "/projects", method = RequestMethod.GET)
    public List<ProjectDTO> findAllProjects(final Principal p) {
        final List<StarProject> projects = this.starProjectService.findAllStarProjectsBy(p.getName());
        return projects.stream().map(project -> this.modelMapper.map(project, ProjectDTO.class)).collect(Collectors.toList());
    }

    @RequestMapping(value = "/projects/{id}/tag", method = RequestMethod.POST)
    public void addTag(@PathVariable("id") final String projectId, @RequestBody final String tag) {
        this.starProjectService.addTag(projectId, tag);
    }

    @RequestMapping(value = "/projects/{id}/tag", method = RequestMethod.DELETE)
    public void removeTag(@PathVariable("id") final String projectId, @RequestBody final String tag) {
        this.starProjectService.removeTag(projectId, tag);
    }
}
