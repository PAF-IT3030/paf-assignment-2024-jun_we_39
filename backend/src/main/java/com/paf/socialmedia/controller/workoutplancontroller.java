package com.example.pafbackend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pafbackend.repositories.WorkoutPlanRepository;
@RestController
@RequestMapping("/api/workoutPlans")
public class WorkoutPlanController {

    private final WorkoutPlanRepository workoutPlanRepository;

    @Autowired
    public WorkoutPlanController(WorkoutPlanRepository workoutPlanRepository) {
        this.workoutPlanRepository = workoutPlanRepository;
    }

    