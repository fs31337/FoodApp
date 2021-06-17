import { Route } from "react-router";
import Home from "./components/Home/Home";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import CreateRecipe from "./components/Create-Recipe/CreateRecipe";
import Nav from "./components/Nav/Nav";
import './App.css';


function App() {
  return (
    <div className="App">
      <Route path="/"  component={Nav}/>
      <Route path="/" exact component={Home}/>
      <Route path="/recipes/:id" exact component={RecipeDetail}/>
      <Route path="/recipe" exact component={CreateRecipe}/>
    </div>
  );
}
export default App;
