package com.paf.socialmedia.controller;

import com.paf.socialmedia.document.Comment;
import com.paf.socialmedia.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getCommentById(@PathVariable String id){
        return commentService.getCommentById(id);
    }