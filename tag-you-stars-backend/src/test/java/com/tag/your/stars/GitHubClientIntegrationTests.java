package com.tag.your.stars;

import com.tag.your.stars.github.GitHubClient;
import com.tag.your.stars.github.GitHubOauthClient;
import com.tag.your.stars.github.model.Contributor;
import com.tag.your.stars.github.model.Repository;
import com.tag.your.stars.github.model.Token;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.springframework.test.util.AssertionErrors.assertEquals;
import static org.springframework.test.util.AssertionErrors.assertTrue;


@SpringBootTest

public class GitHubClientIntegrationTests {


	@Autowired private GitHubClient github;
	@Autowired private GitHubOauthClient  gitHubOauthClient;

	@Test
	void shouldBeFindDetailOfUserLogged() {
		String tokenText = gitHubOauthClient.login("8bebd83c9e091482e241");//TODO: get code and remove hard code
		Contributor contributor = github.getUserLoggedDetail(Token.parse(tokenText).getBearerToken());
		assertEquals("busca por detalhes do usuario deu erro:","pedrozoramiro", contributor.getLogin());
	}

	@Test
	void shouldReturnLoginErrorResponse() {
		Token token = Token.parse(gitHubOauthClient.login("de585099c348052b9ac7"));
		assertEquals("error when pass expired code","bad_verification_code", token.getError());
	}

	@Test
	void shouldBeFindAllStarredRepositories() {
		List<Repository> repositories = github.findStarredRepositories("pedrozoramiro");
		assertTrue("find all starred repositories ", repositories.size() > 10);
	}
}
