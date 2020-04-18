package com.tag.your.stars.github.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

class TokenTest {

    private static final String RESPONSE_WITH_ERROR =
        "error=bad_verification_code&error_description=The+code+passed+is+incorrect+or+expired.&error_uri=https%3A%2F%2Fdeveloper.github.com%2Fapps%2Fmanaging-oauth-apps%2Ftroubleshooting-oauth-app-access-token-request-errors%2F%23bad-verification-code";
    private static final String RESPONSE_WITH_SUCCESS =
        "access_token=bbe9a474d95fd3f896d1dddf44c793b72a9b5e56&scope=user%3Aemail&token_type=bearer";

    @Test void shouldParseWithError() {
        Token token = Token.parse(TokenTest.RESPONSE_WITH_ERROR);
        assertNull(token.getAccessToken());
        assertEquals("bad_verification_code", token.getError());
        assertEquals("The code passed is incorrect or expired.", token.getErrorDescription());
        assertEquals(        "https://developer.github.com/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code",
            token.getErrorURL());
    }

    @Test void shouldParseWithTokenSuccess() {
        Token token = Token.parse(TokenTest.RESPONSE_WITH_SUCCESS);
        assertEquals("bbe9a474d95fd3f896d1dddf44c793b72a9b5e56", token.getAccessToken());
        assertEquals("user:email", token.getScope());
        assertEquals("bearer", token.getType());
        assertNull(token.getError());
        assertNull(token.getErrorDescription());
        assertNull(token.getErrorURL());
    }

}
