import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const CreateWorkout = ({ addWorkout, workoutList }) => {
  const navigate = useNavigate();

  const [workout, setWorkout] = useState({
    id: workoutList.length + 1,
    name: "",
    date: "",
    duration: "",
    calories: ""
  });

  function handleChange (e) {
    setWorkout({
      ...workout, [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/workouts/${workout.id}`);
    addWorkout(workout);
    setWorkout({
    name: "",
    date: "",
    duration: "",
    caloriesBurned: ""
    })
  };

  return (
    <div>
      <h2>Create Workout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label><br/>
        <input type="text" id="name" onChange={handleChange} value={workout.name}/><br/>
        <label htmlFor="date">Date</label><br/>
        <input type="date" id="date" onChange={handleChange} value={workout.date}/><br/>
        <label htmlFor="durattion">Duration</label><br/>
        <input type="text" id="duration" onChange={handleChange} value={workout.duration}/><br/>
        <label htmlFor="calories">Calories Burned</label><br/>
        <input type="text" id="calories" onChange={handleChange} value={workout.calories}/><br/>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateWorkout;
