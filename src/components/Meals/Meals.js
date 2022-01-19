import { Component } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

class Meals extends Component {
  render() {
    return (
      <>
        <MealsSummary />
        <AvailableMeals />
      </>
    );
  }
}

export default Meals;
