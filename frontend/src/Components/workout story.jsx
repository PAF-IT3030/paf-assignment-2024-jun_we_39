import { Form, message } from "antd";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import UploadFileService from "../../Services/UploadFileService";
import WorkoutStoryService from "../../Services/WorkoutStoryService";
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

  const handleUpdate = async () => {
    try {
      setLoading(true);
      await WorkoutStoryService.updateWorkoutStory(
        snap.selectedWorkoutStory.id,
        updatedStory
      );
      state.storyCards = await WorkoutStoryService.getAllWorkoutStories();
      state.workoutStoryOpen = false;
      message.success("Successfully updated");
      form.resetFields();
    } catch (error) {
      message.success("Error while deleting story");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setDeleteLoading(true);
      await WorkoutStoryService.deleteWorkoutStory(
        snap.selectedWorkoutStory.id
      );
      state.storyCards = await WorkoutStoryService.getAllWorkoutStories();
      state.workoutStoryOpen = false;
      message.success("Workout story deleted successfully");
    } catch (error) {
      message.error("Failed to delete story");
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleCancel = () => {
    form.resetFields(); // Reset form fields to initial values
    setUpdatedStory({
      title: workoutStory?.title || "",
      image: workoutStory?.image || "",
      description: workoutStory?.description || "",
    });
  };

  