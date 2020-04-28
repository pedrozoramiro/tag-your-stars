package com.tag.your.stars.security.oauth;

import com.tag.your.stars.security.user.UserPrincipal;
import com.tag.your.stars.user.User;
import com.tag.your.stars.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Component;

@Component
public class OAuthUserService extends DefaultOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public OAuth2User loadUser(final OAuth2UserRequest oAuth2UserRequest) throws OAuth2AuthenticationException {
        final OAuth2User oAuth2User = super.loadUser(oAuth2UserRequest);

        try {
            return this.processOAuth2User(oAuth2User);
        } catch (final AuthenticationException ex) {
            throw ex;
        } catch (final Exception ex) {
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private OAuth2User processOAuth2User(final OAuth2User oAuth2User) {
        final GitHubUser gitHubUser = GitHubUser.create(oAuth2User.getAttributes());
        final User user = this.userRepository.findByEmail(gitHubUser.getEmail()).orElse(new User());
        user.setName(gitHubUser.getName());
        user.setEmail(gitHubUser.getEmail());
        user.setImageUrl(gitHubUser.getImageUrl());
        user.setLogin(gitHubUser.getLogin());
        final User userSaved = this.userRepository.save(user);
        return UserPrincipal.create(userSaved, oAuth2User.getAttributes());
    }
}
