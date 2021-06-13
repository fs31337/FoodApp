import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearRecipeResponse, createRecipe } from "../actions/actions.js";

function CreateRecipe() {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.createRecipeResponse);

  const [state, setState] = useState({
    name: "",
    resume: "",
    puntuation: "",
    healthyLevel: "",
    stepbystep: "",
    diet: [],
  });

  let [diets, setDiets] = useState({
    Vegetarian: false,
    Vegan: false,
    Ketogenic: false,
  });

  let checkboxClick = (e) => {
    let { name, checked } = e.target;
    setDiets({
      ...diets,
      [name]: checked,
    });
  };

  let mostrarDietas = Object.keys(diets).filter((x) => diets[x]);

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    setState((state.diet = mostrarDietas));
    dispatch(createRecipe(state));
    e.preventDefault();
    clearState();
  }

  function clearState() {
    setState({
      name: "",
      resume: "",
      puntuation: "",
      healthyLevel: "",
      stepbystep: "",
      diet: [],
    });
    //desmarcar los checkbox
  }

  //   if(response!==undefined){
  //       alert(response)
  //   }

  return (
    <div className="form-container">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <p>Ingresa un nombre para tu receta</p>
        <input
          name="name"
          className="input-nombre"
          placeholder="Nombre..."
          type="text"
          autoComplete="off"
          onChange={(e) => handleInputChange(e)}
          value={state.name}
        ></input>
        <p>Ingresa un resumen de tu receta</p>
        <input
          name="resume"
          className="input-resume"
          placeholder="Resumen..."
          type="text"
          autoComplete="off"
          value={state.resume}
          onChange={(e) => handleInputChange(e)}
        ></input>
        <p>Ingresa un puntaje de tu receta</p>
        <input
          name="puntuation"
          className="input-puntuation"
          placeholder="Puntuacion..."
          type="text"
          autoComplete="off"
          value={state.puntuation}
          onChange={(e) => handleInputChange(e)}
        ></input>
        <p>Ingresa el nivel de salubridad tu receta</p>
        <input
          name="healthyLevel"
          className="input-healthy"
          placeholder="Healthy..."
          type="text"
          id="healthy"
          autoComplete="off"
          value={state.healthyLevel}
          onChange={(e) => handleInputChange(e)}
        ></input>
        <p>Ingresa el paso a paso tu receta</p>
        <input
          name="stepbystep"
          className="input-stepbystep"
          placeholder="Paso a paso..."
          type="text"
          id="stepbystep"
          autoComplete="off"
          value={state.stepbystep}
          onChange={(e) => handleInputChange(e)}
        ></input>
        <p>Selecciona tipos de dietas</p>
        <input
          name="Vegetarian"
          className="input-diet"
          type="checkbox"
          autoComplete="off"
          value="Vegetarian"
          onChange={checkboxClick}
        ></input>
        <span>Vegetarian</span>
        <input
          name="Vegan"
          className="input-diet"
          type="checkbox"
          autoComplete="off"
          value="Vegan"
          onChange={checkboxClick}
        ></input>
        <span>Vegan</span>
        <input
          name="Ketogenic"
          className="input-diet"
          type="checkbox"
          autoComplete="off"
          value="Ketogenic"
          onChange={checkboxClick}
        ></input>
        <span>Ketogenic</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateRecipe;
