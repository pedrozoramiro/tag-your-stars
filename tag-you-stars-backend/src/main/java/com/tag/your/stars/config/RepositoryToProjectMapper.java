package com.tag.your.stars.config;

import com.github.jmnarloch.spring.boot.modelmapper.PropertyMapConfigurerSupport;
import com.tag.your.stars.github.model.Repository;
import com.tag.your.stars.project.StarProject;
import org.modelmapper.PropertyMap;
import org.springframework.stereotype.Component;

@Component
public class RepositoryToProjectMapper extends PropertyMapConfigurerSupport<Repository, StarProject> {

    @Override
    public PropertyMap<Repository, StarProject> mapping() {

        return new PropertyMap<Repository, StarProject>() {
            @Override
            protected void configure() {
                this.map().setId(null);
                this.map().setGithubId(this.source.getId());
                this.map().setUrl(this.source.getHtml_url());
            }
        };
    }
}
