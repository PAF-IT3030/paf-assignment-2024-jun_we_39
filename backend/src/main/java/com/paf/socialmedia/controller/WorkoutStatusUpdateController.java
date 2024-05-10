package com.example.pafbackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pafbackend.models.WorkoutStatusUpdate;
import com.example.pafbackend.repositories.WorkoutStatusUpdateRepository;

@RestController
@RequestMapping("/api/workoutStatusUpdates")
public class WorkoutStatusUpdateController {

    private final WorkoutStatusUpdateRepository workoutStatusUpdateRepository;

    @Autowired
    public WorkoutStatusUpdateController(WorkoutStatusUpdateRepository workoutStatusUpdateRepository) {
        this.workoutStatusUpdateRepository = workoutStatusUpdateRepository;
    }

    @GetMapping
    public ResponseEntity<List<WorkoutStatusUpdate>> getUpdatesByUserId() {
        List<WorkoutStatusUpdate> updates = workoutStatusUpdateRepository.findAll();
        return new ResponseEntity<>(updates, HttpStatus.OK);
    }

   