package com.tag.your.stars.project;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StarProjectRepository extends MongoRepository<StarProject, String> {

    StarProject findOneByName(String name);

    List<StarProject> findAllByUserNameStarredAndTagsRegex(String userName, String tag);

    List<StarProject> findAllByUserNameStarred(String userName);
}
