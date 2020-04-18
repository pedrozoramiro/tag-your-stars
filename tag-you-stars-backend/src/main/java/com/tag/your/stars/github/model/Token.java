package com.tag.your.stars.github.model;

import com.google.common.base.Splitter;
import com.tag.your.stars.github.exception.GitHubAccessTokenError;
import lombok.Getter;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Map;

@Getter
public class Token {
    private String error;
    private String errorURL;
    private String errorDescription;
    private String accessToken;
    private String scope;
    private String type;

    public String getBearerToken(){
        return "Bearer " + accessToken;
    }

    public static Token parse(String queryText) {
        Map<String, String> map = Splitter.on('&').trimResults().withKeyValueSeparator('=').split(queryText);
        Token token = new Token();
        token.accessToken = Token.getParam(map,"access_token");
        token.scope = Token.getParam(map,"scope");
        token.type = Token.getParam(map,"token_type");
        token.error = Token.getParam(map,"error");
        token.errorURL = Token.getParam(map,"error_uri");
        token.errorDescription = Token.getParam(map,"error_description");
        return token;
    }

    private static String getParam(Map<String,String> map, String key){
        try {
            String value = map.get(key);
            if(value == null){
                return null;
            }
            return URLDecoder.decode(value, java.nio.charset.StandardCharsets.UTF_8.toString());
        } catch (UnsupportedEncodingException e) {
            throw  new GitHubAccessTokenError("Error in converter key:"+ key);
        }
    }
}
