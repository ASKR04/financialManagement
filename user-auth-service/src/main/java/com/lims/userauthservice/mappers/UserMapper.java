package com.lims.userauthservice.mappers;

import com.lims.userauthservice.dtos.SignUpDto;
import com.lims.userauthservice.dtos.UserDto;
import com.lims.userauthservice.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);
    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto userDto);
}
