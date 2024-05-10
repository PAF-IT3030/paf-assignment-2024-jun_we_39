package com.example.pafbackend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/workoutStatusUpdates")
public class WorkoutStatusUpdateController {

    private final WorkoutStatusUpdateRepository workoutStatusUpdateRepository;