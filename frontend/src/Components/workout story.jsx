import { Form } from "antd";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import UploadFileService from "../../Services/UploadFileService";
import state from "../../Utils/Store";

const uploadService = new UploadFileService();

const WorkoutStory = () => {
  const snap = useSnapshot(state);
  const userId = snap.currentUser?.id;
  const workoutStory = snap.selectedWorkoutStory;
  const [imageUploading, setImageUploading] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState();
  useEffect(() => {
    form.setFieldsValue({
      title: workoutStory?.title,
      description: workoutStory?.description,
    });
  }, [workoutStory]);

  const [updatedStory, setUpdatedStory] = useState({
    title: workoutStory?.title || "",
    image: workoutStory?.image || "",
    description: workoutStory?.description || "",
  });

