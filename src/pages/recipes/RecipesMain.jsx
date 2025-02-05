import Category from "./recipes-components/Category";
import Search from "./recipes-components/Search";
import { Outlet } from "react-router";

function RecipesMain() {
  return (
    <div className="recipies">
      <Search />
      <Category />
      <Outlet />
    </div>
  );
}

export default RecipesMain;
