package com.tag.your.stars.user;

import com.tag.your.stars.security.event.LoginOrRegisterEvent;
import com.tag.your.stars.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
class UserEventListener {

    @Autowired
    private UserRepository userRepository;

    @EventListener
    public void loginOrNewRegister(final LoginOrRegisterEvent userMsg) {
        final User userLogin = userMsg.getUser();
        final Optional<User> userOptSave = this.userRepository.findByEmail(userLogin.getEmail());
        userOptSave.ifPresent(user -> userLogin.setId(user.getId()));
        final User userSaved = this.userRepository.save(userLogin);
        userMsg.getUser().setId(userSaved.getId());
    }
}
