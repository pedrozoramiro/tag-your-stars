package com.tag.your.stars.github.model;

import lombok.Data;

@Data
public class Repository {
    String id;
    String name;
    String description;
    String html_url;
    Owner owner;
}


