package com.tag.your.stars.integration;

import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;

@SpringBootTest
public abstract class IntegrationTest {

    @Autowired
    private MongoTemplate mongoTemplate;
    protected final String currentUserName = "pedrozoramiro";

    @BeforeEach
    public void before() {
        //TODO: remover quando configurar banco csomente para o teste
        this.mongoTemplate.getCollectionNames().forEach(this.mongoTemplate::dropCollection);
    }
}
