package com.example.pafbackend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Document(collection = "workoutStatusUpdates")
@Getter
@Setter
public class WorkoutStatusUpdate {
    @Id
    private String id;
    private String userId;
    private Date timestamp;
    

}