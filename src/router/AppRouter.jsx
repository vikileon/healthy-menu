import AppLayout from "../components/AppLayout";
import Homepage from "../pages/homepage/Homepage";
import RecipesMain from "../pages/recipes/RecipesMain";
import Menu from "../pages/menu/Menu";
import ShoppingList from "../pages/shopping-list/ShoppingList";
import About from "../pages/about/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index path="/" element={<Homepage />} />
              <Route path="/recipes/*" element={<RecipesMain />} />
              <Route path="/menu/*" element={<Menu />} />
              <Route path="/shopping-list" element={<ShoppingList />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
  )
};

export default AppRouter;