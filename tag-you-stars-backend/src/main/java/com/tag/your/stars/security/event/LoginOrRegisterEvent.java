package com.tag.your.stars.security.event;

import com.tag.your.stars.user.model.User;
import lombok.Getter;
import org.springframework.context.ApplicationEvent;

@Getter
public class LoginOrRegisterEvent extends ApplicationEvent {
    private static final long serialVersionUID = -8053143381029977953L;
    private final User user;

    public LoginOrRegisterEvent(final Object source, final User user) {
        super(source);
        this.user = user;
    }

}
