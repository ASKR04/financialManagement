package com.lims.userauthservice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import com.lims.userauthservice.dtos.MessageDto;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class MessagesController {

    @GetMapping("/messages")
    @PreAuthorize("hasAnyAuthority('USER', 'ADMIN')")
    public ResponseEntity<MessageDto> message() {
        return ResponseEntity.ok(new MessageDto("user's message"));
    }

    @GetMapping("/protected/messages")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<MessageDto> protectedMessage() {
        return ResponseEntity.ok(new MessageDto("protected user's message"));
    }

}
