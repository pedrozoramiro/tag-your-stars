package com.tag.your.stars.project;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.Arrays;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class StarProjectRepositoryTest {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private StarProjectRepository starProjectRepository;

    @BeforeEach
    public void before() {
        //TODO: remover quando configurar banco csomente para o teste
        this.mongoTemplate.getCollectionNames().forEach(this.mongoTemplate::dropCollection);
    }

    @Test
    public void shouldCreateOneProject() {
        this.starProjectRepository.save(
                new StarProject("pedrozoramiro", "t", "name", "description", "url"));
        final StarProject project = this.starProjectRepository.findOneByName("name");
        assertThat(project).isNotNull();
    }

    @Test
    public void shouldFilterByTags() {
        this.starProjectRepository.saveAll(Arrays.asList(
                this.newStarProject("pedrozoramiro", "JPA", "CI"),
                this.newStarProject("pedrozoramiro", "docker", "CI"),
                this.newStarProject("pedrozoramiro", "docker", "CD"),
                this.newStarProject("joao", "docker", "CD")
        ));

        assertThat(this.starProjectRepository.findAllByUserNameStarredAndTagsRegex("pedrozoramiro", "^DO")).hasSize(2);
        assertThat(this.starProjectRepository.findAllByUserNameStarredAndTagsRegex("pedrozoramiro", "^JP")).hasSize(1);
        assertThat(this.starProjectRepository.findAllByUserNameStarredAndTagsRegex("joao", "^DO")).hasSize(1);
        assertThat(this.starProjectRepository.findAllByUserNameStarredAndTagsRegex("pedrozoramiro", "^PA")).hasSize(0);
        assertThat(this.starProjectRepository.findAllByUserNameStarredAndTagsRegex("pedrozoramiro", "^cker")).hasSize(0);
    }

    private StarProject newStarProject(final String userName, final String... tags) {
        final StarProject starProject = new StarProject("pedrozoramiro", "t", "name0", "description", "url");
        starProject.addTag(tags);
        return starProject;
    }
}
