import { Route } from "react-router";
import Home from "./components/Home/Home";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import CreateRecipe from "./components/Create-Recipe/CreateRecipe";
import Nav from "./components/Nav/Nav";
import LandingPage from "./components/LandingPage/LandingPage";
import './App.css';


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage}/>
      <Route path="/principal" component={Nav}/>
      <Route path="/principal" exact component={Home}/>
      <Route path="/principal/recipes/:id" exact component={RecipeDetail}/>
      <Route path="/principal/recipe" exact component={CreateRecipe}/>
    </div>
  );
}
export default App;
