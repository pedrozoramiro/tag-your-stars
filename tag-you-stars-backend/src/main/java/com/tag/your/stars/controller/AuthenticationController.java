package com.tag.your.stars.controller;

import com.tag.your.stars.controller.dto.UserDTO;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

@RestController
@CrossOrigin("http://localhost:3000")
@EnableOAuth2Sso
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
    @CrossOrigin("http://localhost:3000")
    public UserDTO user(final HttpServletRequest request, final Principal p) {
        return new UserDTO(p.getName());
    }

    @RequestMapping("/loggedin")
    public @ResponseBody
    String showLoggedIn(final HttpServletRequest request, final Principal p) {
        //Prints a message in the console so it can be read
        System.out.println("It actually does come back");
        //Can be edited to show the user's name when the index page is shown.
        return "index for <h2>" + p.getName() + "</h2>";
    }
}
