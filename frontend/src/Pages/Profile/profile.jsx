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