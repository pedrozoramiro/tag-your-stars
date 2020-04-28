package com.tag.your.stars.security.token;

import com.tag.your.stars.security.oauth.OauthProperties;
import com.tag.your.stars.security.user.UserPrincipal;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TokenProvider {

    private static final Logger logger = LoggerFactory.getLogger(TokenProvider.class);

    @Autowired
    private final OauthProperties oauthProperties;

    public TokenProvider(final OauthProperties appProperties) {
        this.oauthProperties = appProperties;
    }

    public String createToken(final Authentication authentication) {
        final UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        final Date now = new Date();
        final Date expiryDate = new Date(now.getTime() + this.oauthProperties.getTokenExpirationMsec());

        return Jwts.builder()
                .setSubject(userPrincipal.getId())
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, this.oauthProperties.getTokenSecret())
                .compact();
    }

    public String getUserIdFromToken(final String token) {
        final Claims claims = Jwts.parser()
                .setSigningKey(this.oauthProperties.getTokenSecret())
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    public boolean validateToken(final String authToken) {
        try {
            Jwts.parser().setSigningKey(this.oauthProperties.getTokenSecret()).parseClaimsJws(authToken);
            return true;
        } catch (final SignatureException ex) {
            logger.error("Invalid JWT signature");
        } catch (final MalformedJwtException ex) {
            logger.error("Invalid JWT token");
        } catch (final ExpiredJwtException ex) {
            logger.error("Expired JWT token");
        } catch (final UnsupportedJwtException ex) {
            logger.error("Unsupported JWT token");
        } catch (final IllegalArgumentException ex) {
            logger.error("JWT claims string is empty.");
        }
        return false;
    }

}
