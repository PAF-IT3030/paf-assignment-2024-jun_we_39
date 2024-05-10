package com.paf.socialmedia.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "mealPlans")
@Getter
@Setter
public class MealPlan {
    
}
