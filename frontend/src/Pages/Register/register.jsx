import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../app/actions/user.actions";
import "./Register.css"; // Import CSS file for styling
function Register() {
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password || !confirmPassword) {
            setError("All fields are required");
            return;
          }
      