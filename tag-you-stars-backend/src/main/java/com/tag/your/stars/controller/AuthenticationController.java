package com.tag.your.stars.controller;

import com.tag.your.stars.controller.dto.UserDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class AuthenticationController {

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public UserDTO user(final Principal p) {
        return new UserDTO(p.getName());
    }

}
