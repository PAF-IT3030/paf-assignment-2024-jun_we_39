package com.example.pafbackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pafbackend.models.WorkoutPlan;
import com.example.pafbackend.repositories.WorkoutPlanRepository;
@RestController
@RequestMapping("/api/workoutPlans")
public class WorkoutPlanController {

    private final WorkoutPlanRepository workoutPlanRepository;

    @Autowired
    public WorkoutPlanController(WorkoutPlanRepository workoutPlanRepository) {
        this.workoutPlanRepository = workoutPlanRepository;
    }

    @GetMapping
    public ResponseEntity<List<WorkoutPlan>> getWorkoutPlans() {
        List<WorkoutPlan> workoutPlans = workoutPlanRepository.findAll();
        return new ResponseEntity<>(workoutPlans, HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<WorkoutPlan>> getWorkoutPlansByUserId(@PathVariable String userId) {
        List<WorkoutPlan> workoutPlans = workoutPlanRepository.findByUserId(userId);
        return new ResponseEntity<>(workoutPlans, HttpStatus.OK);
    }

   