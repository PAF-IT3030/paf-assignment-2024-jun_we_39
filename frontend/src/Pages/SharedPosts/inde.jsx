import React, { useEffect } from "react";
import Posts from "../../Components/Posts";
import { useDispatch, useSelector } from "react-redux";
import { getPostShareByUserId } from "../../app/actions/postshare.actions";
import SharedPostsList from "../../Components/SharedPostsList";
