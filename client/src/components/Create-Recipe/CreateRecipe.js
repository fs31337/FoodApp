import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearRecipeResponse, createRecipe } from "../../actions/actions.js";

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
    "Vegetarian": false,
    "Vegan": false,
    "Ketogenic": false,
    "Lacto-Vegetarian":false,
    "Ovo-Vegetarian":false,
    "Pescetarian":false,
    "Paleo":false,
    "Primal":false,
    "Whole":false,
    "Gluten Free":false,
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
    //controlar que al menos un check este seleccionado
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
  }
  // if (response !== undefined) {
    //   alert(response);
  // }

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
          required
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
          required
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
          required
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
          required
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
          required
        ></input>
        <p>
          Selecciona al menos un tipo de dieta, puedes seleccionar mas de uno
        </p>
        <div className="checkBox">
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
          <input
            name="Gluten Free"
            className="input-diet"
            type="checkbox"
            autoComplete="off"
            value="Gluten Free"
            onChange={checkboxClick}
          ></input>
          <span>Gluten Free</span>
          <input
            name="Lacto-Vegetarian"
            className="input-diet"
            type="checkbox"
            autoComplete="off"
            value="Lacto-Vegetarian"
            onChange={checkboxClick}
          ></input>
          <span>Lacto-Vegetarian</span><br/>
          <input
            name="Ovo-Vegetarian"
            className="input-diet"
            type="checkbox"
            autoComplete="off"
            value="Ovo-Vegetarian"
            onChange={checkboxClick}
          ></input>
          <span>Ovo-Vegetarian</span>
          <input
            name="Pescetarian"
            className="input-diet"
            type="checkbox"
            autoComplete="off"
            value="Pescetarian"
            onChange={checkboxClick}
          ></input>
          <span>Pescetarian</span>
          <input
            name="Paleo"
            className="input-diet"
            type="checkbox"
            autoComplete="off"
            value="Paleo"
            onChange={checkboxClick}
          ></input>
          <span>Paleo</span>
          <input
            name="Primal"
            className="input-diet"
            type="checkbox"
            autoComplete="off"
            value="Primal"
            onChange={checkboxClick}
          ></input>
          <span>Primal</span>
          <input
            name="Whole30"
            className="input-diet"
            type="checkbox"
            autoComplete="off"
            value="Whole30"
            onChange={checkboxClick}
          ></input>
          <span>Whole30</span><br/>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateRecipe;
