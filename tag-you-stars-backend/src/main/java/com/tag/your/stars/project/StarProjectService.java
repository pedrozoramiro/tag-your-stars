package com.tag.your.stars.project;

import com.tag.your.stars.exception.StarProjectNotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StarProjectService {

    @Autowired
    private StarProjectRepository starProjectRepository;

    public void removeTag(final String id, final String tag) {
        final StarProject starProject = this.starProjectRepository.findById(id).orElseThrow(() -> new StarProjectNotFound("project not found for is " + id));
        starProject.removeTag(tag);
        this.starProjectRepository.save(starProject);
    }

    public void addTag(final String id, final String tag) {
        final StarProject starProject = this.starProjectRepository.findById(id).orElseThrow(() -> new StarProjectNotFound("project not found for is " + id));
        starProject.addTag(tag);
        this.starProjectRepository.save(starProject);
    }

    public void synchronizeProjectsAndKeepTags(final String userName, final List<StarProject> projects) {
        final List<StarProject> persistentStarProject = this.starProjectRepository.findAllByUserNameStarred(userName);

        final List<StarProject> saveList = projects.stream()
                .peek(repo -> repo.setUserNameStarred(userName))
                .peek(repo -> this.updateTagAndId(persistentStarProject, repo))
                .collect(Collectors.toList());

        final List<StarProject> removeList = persistentStarProject.stream()
                .filter(repo -> projects.stream().noneMatch(repotrs -> repotrs.getGithubId().equals(repo.getGithubId())))
                .collect(Collectors.toList());

        this.starProjectRepository.saveAll(saveList);
        this.starProjectRepository.deleteAll(removeList);
    }

    private void updateTagAndId(final List<StarProject> projects, final StarProject transientStarProject) {
        final Optional<StarProject> optPersistentStarProject = projects.stream().filter(r -> r.getGithubId().equals(transientStarProject.getGithubId()))
                .findAny();
        if (optPersistentStarProject.isPresent()) {
            final StarProject persistentProject = optPersistentStarProject.get();
            transientStarProject.setId(persistentProject.getId());
            transientStarProject.setTags(persistentProject.getTags());
        }
    }

    public List<StarProject> findAllStarProjectsBy(final String userName, final String tagFilter) {
        if (tagFilter == null || tagFilter.isEmpty()) {
            return this.starProjectRepository.findAllByUserNameStarred(userName);
        }
        return this.starProjectRepository.findAllByUserNameStarredAndTagsRegex(userName, tagFilter);
    }
}
