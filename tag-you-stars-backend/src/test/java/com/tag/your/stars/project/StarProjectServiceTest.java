package com.tag.your.stars.project;

import com.tag.your.stars.github.GitHubClient;
import com.tag.your.stars.github.model.Repository;
import com.tag.your.stars.integration.IntegrationTest;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;

class StarProjectServiceTest extends IntegrationTest {

    @Autowired
    private StarProjectService starProjectService;

    @Autowired
    private StarProjectRepository starProjectRepository;

    @Autowired
    private GitHubClient gitHubClient;

    @Autowired
    private ModelMapper modelMapper;

    @Test
    public void shouldSyncProjectWithGitHub() {
        final List<StarProject> projects = this.newStarProjects();
        this.starProjectService.synchronizeProjectsAndKeepTags(this.currentUserName, projects);
        assertThat(this.starProjectRepository.findAllByUserNameStarred(this.currentUserName)).hasSize(projects.size());
    }

    @Test
    public void shouldRemoveProjectWhenUnstarInGitHub() {
        final StarProject starProjectRemoved = this.starProjectRepository.save(new StarProject(this.currentUserName, "remove", "remove", "remove", "remove"));
        this.starProjectService.synchronizeProjectsAndKeepTags(this.currentUserName, this.newStarProjects());
        assertThat(this.starProjectRepository.findById(starProjectRemoved.getId())).isEqualTo(Optional.empty());
    }

    @Test
    public void shouldAddTag() {
        final StarProject starProject = this.starProjectRepository.save(new StarProject(this.currentUserName, "remove", "remove", "remove", "remove"));
        this.starProjectService.addTag(starProject.getId(), "docker");
        assertThat(this.starProjectRepository.findById(starProject.getId()).get().getTags()).contains("DOCKER");
    }

    @Test
    public void shouldRemoveTag() {
        final StarProject starProject = this.starProjectRepository.save(new StarProject(this.currentUserName, "remove", "remove", "remove", "remove"));
        this.starProjectService.addTag(starProject.getId(), "docker");
        assertThat(this.starProjectRepository.findById(starProject.getId()).get().getTags()).contains("DOCKER");
        this.starProjectService.removeTag(starProject.getId(), "docker");
        assertThat(this.starProjectRepository.findById(starProject.getId()).get().getTags()).hasSize(0);

    }

    List<StarProject> newStarProjects() {
        final List<Repository> repositories = this.gitHubClient.findStarredRepositories(this.currentUserName);
        return repositories.stream()
                .map(repo -> this.modelMapper.map(repo, StarProject.class))
                .collect(Collectors.toList());
    }
}
