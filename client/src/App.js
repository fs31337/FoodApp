import { Route } from "react-router";
import Home from "./components/Home/Home";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import CreateRecipe from "./components/Create-Recipe/CreateRecipe";
import Nav from "./components/Nav/Nav";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={LandingPage} />
        <Route path="/" component={Nav} />
        <Route path="/recipes" exact component={Home} />
        <Route path="/recipes/:id" exact component={RecipeDetail} />
        <Route path="/recipe" exact component={CreateRecipe} />
      </div>
    </BrowserRouter>
  );
}
export default App;
