import { Route } from "react-router";
import Home from "./components/Home";
import RecipeDetail from "./components/RecipeDetail";
import CreateRecipe from "./components/CreateRecipe";


function App() {
  return (
    <div className="App">
      <h1>Henry Food</h1>
      <Route path="/" exact component={Home}/>
      <Route path="/recipes/:id" exact component={RecipeDetail}/>
      <Route path="/recipe" exact component={CreateRecipe}/>
    </div>
  );
}
export default App;
