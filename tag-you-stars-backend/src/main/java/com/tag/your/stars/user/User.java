package com.tag.your.stars.user;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
@Data
@NoArgsConstructor
@EqualsAndHashCode
public class User {
    @Id
    private String id;
    private String name;
    private String login;
    private String email;
    private String imageUrl;
}
