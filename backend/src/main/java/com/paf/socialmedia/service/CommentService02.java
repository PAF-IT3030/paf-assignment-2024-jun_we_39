package com.paf.socialmedia.service;

import com.paf.socialmedia.document.Notification;
import com.paf.socialmedia.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CommentService02 {
    @Autowired
    private NotificationRepository notificationRepository;


    public ResponseEntity<?> getNotificationById(String id){
        Optional<Notification> notification =  notificationRepository.findById(id);
        if(notification.isPresent()){
            return new ResponseEntity<>(notification.get(), HttpStatus.OK);
        }else{
            return new ResponseEntity<>("No Notification Found",HttpStatus.NOT_FOUND);
        }
    }
    public ResponseEntity<?> getNotifications(){
        List<Notification> notifications = notificationRepository.findAll();
        return new ResponseEntity<List<Notification>>(notifications, HttpStatus.OK);
    }
    public ResponseEntity<?> getUnreadNotificationsByUserId(String userId) {
        List<Notification> notifications = notificationRepository.findByUserIdAndIsReadFalse(userId);
        return new ResponseEntity<List<Notification>>(notifications, HttpStatus.OK);
    }



}
