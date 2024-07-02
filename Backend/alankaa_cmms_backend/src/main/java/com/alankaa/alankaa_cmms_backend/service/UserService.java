package com.alankaa.alankaa_cmms_backend.service;

import com.alankaa.alankaa_cmms_backend.dto.UserDto;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface UserService {
    UserDto getUserById(Long userId);
    List<UserDto> getAllUsers();
    UserDto createUser(UserDto userDto);
    UserDto updateUser(Long userId, UserDto userDto);
    void deleteUser(Long userId);



}
