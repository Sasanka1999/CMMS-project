package com.alankaa.alankaa_cmms_backend.service.impl;

import com.alankaa.alankaa_cmms_backend.dto.UserDto;
import com.alankaa.alankaa_cmms_backend.entity.User;
import com.alankaa.alankaa_cmms_backend.mapper.UserMapper;
import com.alankaa.alankaa_cmms_backend.repository.UserRepository;
import com.alankaa.alankaa_cmms_backend.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    
    @Override
    public UserDto getUserById(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        return userOptional.map(UserMapper::mapToUserDto).orElse(null);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(UserMapper::mapToUserDto).collect(Collectors.toList());
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto updateUser(Long userId, UserDto userDto) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setUsername(userDto.getUsername());
            user.setPassword(userDto.getPassword());
            user.setRole(userDto.getRole());
            user.setDeleted(userDto.getDeleted());
            User updatedUser = userRepository.save(user);
            return UserMapper.mapToUserDto(updatedUser);
        } else {
            return null; // User not found
        }
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

   


}
