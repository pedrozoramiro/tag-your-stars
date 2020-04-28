package com.tag.your.stars.controller.dto;

import lombok.Data;

import java.util.List;

@Data
public class ProjectDTO {
    private String id;
    private String name;
    private String description;
    private String url;
    private String ownerLogin;
    private String ownerAvatarUrl;
    private List<String> tags;
}
