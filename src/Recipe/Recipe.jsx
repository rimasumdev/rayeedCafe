import PropTypes from "prop-types";
import RecipeImage from "../assets/recipes_image.png";
import { LuClock3 } from "react-icons/lu";
import { FaFire } from "react-icons/fa";
const Recipe = ({ recipe, handleOrder }) => {
  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <>
      <div className="flex flex-col md:h-[570px] lg:h-[550px] bg-base-100 shadow border border-gray-100 rounded-lg justify-between">
        <img
          src={RecipeImage}
          alt="Shoes"
          className="rounded-lg px-4 pt-4 object-cover"
        />
        <div className="px-4 py-4">
          <h2 className="text-2xl font-bold mb-2">{recipe_name}</h2>
          <p className="w-[270px] mb-2">{short_description}</p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">
              Ingredients: {ingredients.length}
            </h2>
            <ul className="list-disc list-inside">
              {ingredients.map((ingredient) => (
                <li key={ingredient} className="text-md pl-4">
                  {ingredient}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 text-[13px]">
              <p className="flex items-center gap-2">
                <LuClock3 />
                {preparing_time} <span>Minutes</span>
              </p>
              <p className="flex items-center gap-2">
                <FaFire />
                {calories} <span>Calories</span>
              </p>
            </div>
            <button
              onClick={() => handleOrder(recipe)}
              className="btn btn-primary w-32 rounded-3xl bg-mr-button-success text-black hover:bg-mr-button-success-hover border-none"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleOrder: PropTypes.func.isRequired,
};
