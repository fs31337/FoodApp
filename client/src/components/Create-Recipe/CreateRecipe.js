import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe } from "../../actions/actions.js";

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
  const initialState = {
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
  }
  let [diets, setDiets] = useState(initialState);

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
    if(mostrarDietas.length<1){
      alert("Debes seleccionar al menos una Dieta")
    }
    if(mostrarDietas.length>=1){
      setState((state.diet = mostrarDietas));
      dispatch(createRecipe(state));
      e.preventDefault();
      clearState();
      setDiets(initialState);
      }
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
    return (
      <div className="form-container">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <p>Ingresa un nombre para tu receta</p>
        <input
          name="name"
          key="name"
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
          key="resume"
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
          key="puntuation"
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
          key="healthyLevel"
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
          key="stepbystep"
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
        {Object.keys(diets).map((key, index) => (
              <label key={index} htmlFor={key}>
                <input
                  type="checkbox"
                  key={key}
                  name={key}
                  id={key}
                  checked={diets[key]}
                  onChange={checkboxClick}
                />
              <span>{key}</span>
              </label>
            ))}
        </div>
        <button type="submit">Submit</button>
      {response === "200" ? <div>Creado Correctamente</div>: response=== "400" ? <div>Error</div>:<div>Creando</div>}
      </form>
    </div>
  );
}

export default CreateRecipe;
