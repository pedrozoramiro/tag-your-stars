package com.tag.your.stars.project;

import com.tag.your.stars.exception.DuplicateTagException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class StarProjectTest {

    @Test
    void shouldRemoveTag() {
        final StarProject starProject = new StarProject();
        starProject.addTag("DOCKER", "CI");
        starProject.removeTag("DOCKER");
        assertThat(starProject.getTags()).doesNotContain("DOCKER");
    }

    @Test
    void shouldAddTag() {
        final StarProject starProject = new StarProject();
        starProject.addTag("DOCKER", "CI");
        assertThat(starProject.getTags()).contains("DOCKER");
        assertThat(starProject.getTags()).contains("CI");
    }

    @Test
    void expectErrorWhenAddTwoTag() {
        Assertions.assertThrows(DuplicateTagException.class, () -> {
            final StarProject starProject = new StarProject();
            starProject.addTag("DOCKER", "CI");
            starProject.addTag("DOCKER");
        });
    }
}
