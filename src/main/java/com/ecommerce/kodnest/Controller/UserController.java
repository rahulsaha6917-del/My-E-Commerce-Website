package com.ecommerce.kodnest.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.kodnest.Entity.User;
import com.example.kodnest.Repository.User.UserRepository;
import com.sun.tools.javac.util.List;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

	private final UserRepository userRepository = null;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userRepository.save(user);
       
    }

    @GetMapping
    public List getAllUsers() {
        return (List) userRepository.findAll();
    }
}
