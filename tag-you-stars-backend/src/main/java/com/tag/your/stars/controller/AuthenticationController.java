package com.tag.your.stars.controller;

import com.tag.your.stars.controller.dto.UserDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

@RestController
@CrossOrigin("http://localhost:3000/")
public class AuthenticationController {

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public UserDTO user(final HttpServletRequest request, final Principal p) {
        return new UserDTO(p.getName());
    }

}
