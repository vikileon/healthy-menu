import RecipesPages from './recipes-pages/RecipesPages';
import Category from './recipes-components/Category';
import Search from './recipes-components/Search';

function RecipesMain() {
  return (
    <div className="recipies">
        <Search />
        <Category />
        <RecipesPages />
    </div>
  );
}

export default RecipesMain;
