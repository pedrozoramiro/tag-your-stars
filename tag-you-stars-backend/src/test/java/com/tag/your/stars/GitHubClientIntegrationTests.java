package com.tag.your.stars;

import com.tag.your.stars.github.GitHubClient;
import com.tag.your.stars.github.model.Repository;
import com.tag.your.stars.integration.IntegrationTest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.springframework.test.util.AssertionErrors.assertTrue;

@SpringBootTest
public class GitHubClientIntegrationTests extends IntegrationTest {

    @Autowired
    private GitHubClient github;

    @Test
    void shouldBeFindAllStarredRepositories() {
        final List<Repository> repositories = this.github.findStarredRepositories("pedrozoramiro");
        assertTrue("find all starred repositories ", repositories.size() > 10);
    }
}
