import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../app/actions/user.actions";
import LoginImage from "../../assets/loginpic.png";



function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");