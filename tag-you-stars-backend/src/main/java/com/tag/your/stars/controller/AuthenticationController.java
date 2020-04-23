package com.tag.your.stars.controller;

import com.tag.your.stars.controller.dto.UserDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class AuthenticationController {

    @RequestMapping("/")
    public String showIndex(final Principal p) {
        //This re-routes the user to the /loggedin route, because the callback url
        //from GitHub was looping eternally. Create a pull request if you find out how to fix it!
        //p should never return null, but just in case...
        if (p == null)
            return "index";
        else return "redirect:/loggedin";
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public UserDTO user(final Principal p) {
        return new UserDTO(p.getName());
    }

}
