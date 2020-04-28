package com.tag.your.stars.user;

import com.tag.your.stars.user.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

interface UserRepository extends CrudRepository<User, String> {
    Optional<User> findByEmail(String email);
}
