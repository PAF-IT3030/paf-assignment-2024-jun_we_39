import React, { useEffect } from "react";
import Posts from "../../Components/Posts";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../app/actions/post.actions";
import NewUsersSuggest from "../../Components/NewUsersSuggest";


function Home() {
    const dispatch = useDispatch();
    const post = useSelector((state) => state.post);
    useEffect(() => {
        dispatch(getPosts());
      }, [dispatch]);