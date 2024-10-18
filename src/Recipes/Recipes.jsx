import Recipe from "../Recipe/Recipe";
import { useState, useEffect } from "react";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  useEffect(() => {}, [orders]);

  const handleOrder = (recipe) => {
    const isDuplicate = orders.some(
      (item) => item.recipe_id === recipe.recipe_id
    );
    if (!isDuplicate) {
      setOrders([...orders, recipe]);
      setToastMessage(
        <>
          <span className="font-bold text-2xl">{recipe.recipe_name}</span> added
          to your order!
        </>
      );
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
    } else {
      setToastMessage(
        <>
          <span className="font-bold text-2xl">{recipe.recipe_name}</span> is
          already in your order!
        </>
      );
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };
  const handlePreparing = (order) => {
    const isDuplicate = cooking.some(
      (item) => item.recipe_id === order.recipe_id
    );
    if (!isDuplicate) {
      setCooking([...cooking, order]);
    }
    const newOrders = orders.filter(
      (item) => item.recipe_id !== order.recipe_id
    );
    setOrders(newOrders);
  };
  const handleFinish = (order) => {
    const newCooking = cooking.filter(
      (item) => item.recipe_id !== order.recipe_id
    );
    setCooking(newCooking);
  };
  console.log("Orders :", orders);
  return (
    <>
      <div className="container mx-auto my-24 px-4">
        {/*  Title */}
        <div className="text-center space-y-4 px-4">
          <h1 className="text-4xl font-bold">Our Recipes</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget <br /> urna volutpat
            curabitur elementum mauris aenean neque.{" "}
          </p>
        </div>

        {/*  Recipes */}
        <div className="my-12 flex flex-col-reverse lg:flex-row justify-center items-center gap-5">
          {/*  Recipes Items */}
          <div className="w-full lg:w-4/6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
              {recipes.map((recipe) => (
                <Recipe
                  key={recipe.recipe_id}
                  recipe={recipe}
                  handleOrder={handleOrder}
                />
              ))}
            </div>
          </div>

          {/*  Order Info */}
          <div className="w-full lg:w-2/6 min-h-80 self-start lg:sticky lg:top-4 border shadow border-gray-100 rounded-lg p-4 overflow-hidden">
            <div className="w-full flex flex-col items-center pb-4">
              <h2 className=" text-xl font-bold">
                Want to cook: {orders.length}
              </h2>
              <div className="w-10/12 border-b-2 border-gray-100 pt-4"></div>
              <div className="overflow-x-auto">
                <table className="table table-sm ">
                  <thead className="text-[12px] text-black">
                    <tr>
                      <th></th>
                      <td>Name</td>
                      <td>Time</td>
                      <td>Calories</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center">
                          No items in the order list
                        </td>
                      </tr>
                    ) : (
                      orders.map((recipe) => (
                        <tr
                          key={recipe.recipe_id}
                          className="!text-[12px] font-bold"
                        >
                          <th>{recipe.recipe_id}</th>
                          <td>{recipe.recipe_name}</td>
                          <td>{recipe.preparing_time}</td>
                          <td>{recipe.calories}</td>
                          <td>
                            <button
                              onClick={() => handlePreparing(recipe)}
                              className="btn btn-sm bg-mr-button-success"
                            >
                              Preparing
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full flex flex-col items-center">
              <h2 className=" text-xl font-bold">
                Currently cooking: {cooking.length}
              </h2>
              <div className="w-10/12 border-b-2 border-gray-100 pt-4 px-1"></div>
              <div>
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead className="text-[12px] text-black">
                      <tr>
                        <th></th>
                        <td>Name</td>
                        <td>Time</td>
                        <td>Calories</td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      {cooking.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="text-center">
                            No items in the cooking list
                          </td>
                        </tr>
                      ) : (
                        cooking.map((recipe) => (
                          <tr
                            key={recipe.recipe_id}
                            className="!text-[12px] font-bold"
                          >
                            <th>{recipe.recipe_id}</th>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time}</td>
                            <td>{recipe.calories}</td>
                            <td>
                              <button
                                onClick={() => handleFinish(recipe)}
                                className="btn btn-sm bg-mr-button-success"
                              >
                                Finish
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex items-center justify-between w-full px-4 pt-6 text-sm">
                <h2>
                  <span className="font-bold">Total Time</span> ={" "}
                  {cooking.reduce(
                    (acc, recipe) => acc + recipe.preparing_time,
                    0
                  )}{" "}
                  minutes
                </h2>
                <h2>
                  <span className="font-bold">Total Calories</span> ={" "}
                  {cooking.reduce((acc, recipe) => acc + recipe.calories, 0)}{" "}
                  calories
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert bg-warning text-black">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Recipes;
