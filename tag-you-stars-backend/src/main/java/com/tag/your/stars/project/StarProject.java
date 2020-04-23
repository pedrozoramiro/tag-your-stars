package com.tag.your.stars.project;

import com.tag.your.stars.exception.DuplicateTagException;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "star-project")
@Data
@NoArgsConstructor
@EqualsAndHashCode
public class StarProject {

    @Id
    private String id;
    private String userNameStarred;
    private String githubId;
    private String name;
    private String description;
    private String url;
    private List<String> tags;

    public StarProject(final String userNameStarred, final String githubId, final String name, final String description, final String url) {
        this.userNameStarred = userNameStarred;
        this.githubId = githubId;
        this.name = name;
        this.description = description;
        this.url = url;
    }

    public void removeTag(final String tag) {
        if (this.tags != null) {
            this.tags.remove(tag.toUpperCase());
        }
    }

    public void addTag(final String... tags) {
        for (final String tag : tags) {
            this.addTag(tag);
        }
    }

    public void addTag(final String tag) {
        if (this.tags == null) {
            this.tags = new ArrayList<>();
        }

        if (this.tags.stream().anyMatch(tag::equals)) {
            throw new DuplicateTagException(this.id, tag);
        }

        this.tags.add(tag.toUpperCase());
    }
}
