import "./App.css";
import Homepage from './pages/homepage/Homepage.jsx';
import Footer from './components/footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/app-header/Navbar.jsx";
import RecipesMain from "./pages/recipes/RecipesMain.jsx";
import Menu from "./pages/menu/Menu.jsx";
import ShoppingList from "./pages/shopping-list/ShoppingList.jsx";
import About from "./pages/about/About.jsx";
import Cuisine from "./pages/recipes/recipes-pages/Cuisine.jsx";
import Recipe from "./pages/recipes/recipes-pages/Recipe.jsx";
import Default from "./pages/recipes/recipes-pages/Default.jsx";
import Searched from "./pages/recipes/recipes-pages/Searched.jsx";
import Popular from "./pages/recipes/recipes-components/Popular.jsx";
import Veggie from "./pages/recipes/recipes-components/Veggie.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/recipes' element={<RecipesMain />}>
            <Route index element={<Default />}/>
            <Route path='/recipes/:name' element={<Cuisine />} />
            <Route path='/recipes/recipe/:id' element={<Recipe />} />
            <Route path='/recipes/recipe/:id' element={<Popular />} />
            <Route path='/recipes/recipe/:id' element={<Veggie />} />
            <Route path='/recipes/searched/:name' element={<Searched />}/>
          </Route>
          <Route path='/menu' element={<Menu />} />
          <Route path='/shopping-list' element={<ShoppingList />} />
          <Route path='/about' element={<About />} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
