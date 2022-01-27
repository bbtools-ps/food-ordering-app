import { Component } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    additional: [{ id: "a1", name: "Soya sauce", price: 0.5 }],
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    additional: [{ id: "a2", name: "Barbecue sauce", price: 0.5 }],
  },
  {
    id: "m4",
    name: "Poke Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const DUMMY_DRINKS = [
  { id: "d1", name: "Coca-Cola Zero 330ml", price: 1 },
  { id: "d2", name: "Mineral water 0.5l", price: 0.9 },
];

// merge meals, drinks and additional into one array
const ALL_MEALS = [...DUMMY_MEALS].map((item) => {
  const commonItemProperties = {
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
  };
  const drinks = DUMMY_DRINKS.map((drink) => {
    const newID = `a_${item.id}_${drink.id}`;
    return {
      id: newID,
      name: drink.name,
      price: drink.price,
    };
  });
  return item.additional
    ? {
        ...commonItemProperties,
        additional: [...item.additional, ...drinks],
      }
    : {
        ...commonItemProperties,
        additional: [...drinks],
      };
});

class AvailableMeals extends Component {
  mealsList() {
    const meals = ALL_MEALS.map((meal) => {
      return (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
          additional={meal.additional}
        />
      );
    });
    return meals;
  }
  render() {
    return (
      <section className={styles.meals}>
        <Card>
          <ul>{this.mealsList()}</ul>
        </Card>
      </section>
    );
  }
}

export default AvailableMeals;
