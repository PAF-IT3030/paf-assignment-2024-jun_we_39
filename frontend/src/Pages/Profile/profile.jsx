import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUserById } from "../../app/actions/user.actions";
import { deleteUserById } from "../../app/actions/user.actions";
import storage from "../../util/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Profile(props) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [username, setUsername] = useState(user?.user?.username);
    const [email, setEmail] = useState(user?.user?.email);
    const [contactNumber, setContactNumber] = useState(user?.user?.contactNumber);
    const [country, setCountry] = useState(user?.user?.country);
    const [profileImage, setProfileImage] = useState(user?.user?.profileImage ? user.user.profileImage : null);

    useEffect(() => {
        dispatch(getUser(user.userId));
      }, [dispatch]);
      const handleSubmit = () => {
        const userUpdate = {
          id: user.user.id,
          username,
          email,
          contactNumber,
          country,
          profileImage
        };


        dispatch(updateUserById(userUpdate));

        props.closeModal();
      };
      const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete your account?")) {
          dispatch(deleteUserById(user.userId));
          
          props.closeModal();
        }
      };
      const uploadImage = (e) => {
        const file = e.target.files[0];
    
        if (!file) {
          alert("Please upload an image first!");
        }
        
    const storageRef = ref(storage, `/users/${file.name}`);
    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setProfileImage(url);
          });