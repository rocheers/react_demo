import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import NewRecipe from './NewRecipe';
import { Button } from '@material-ui/core';

class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: 'Peppered Bacon and Tomato Linguine',
          description: 'Quaerat asperiores enim tempore aliquid provident dolor aut.',
          imageUrl: 'https://images.media-allrecipes.com/userphotos/720x405/678339.jpg',
          ingredients: ['Pepper', 'Bacon', 'Tomato'],
          chips: ['quisquam', 'dolores']
        },
        {
          id: 1,
          title: 'Southwestern Roasted Corn Salad',
          description: 'Ipsam enim necessitatibus nulla illo voluptatem aliquam libero consequatur nemo.',
          imageUrl: 'https://images.media-allrecipes.com/userphotos/720x405/373856.jpg',
          ingredients: [],
          chips: []
        },
        {
          id: 2,
          title: 'Apple Butter Bars',
          description: 'Ipsam enim necessitatibus nulla illo voluptatem aliquam libero consequatur nemo.',
          imageUrl: 'https://images.media-allrecipes.com/userphotos/720x405/482203.jpg',
          ingredients: [
            '1/2 teaspoon baking soda',
            '1/2 teaspoon apple pie spice',
            '1/2 cup butter',
            '1 1/2 cups all-purpose flour'
          ],
          chips: ['Dessert', 'Fruit Dessert']
        },
        {
          id: 3,
          title: 'Southwestern Roasted Corn Salad',
          description: 'Ipsam enim necessitatibus nulla illo voluptatem aliquam libero consequatur nemo.',
          imageUrl: 'https://images.media-allrecipes.com/userphotos/720x405/373856.jpg',
          ingredients: [''],
          chips: ['quisquam', 'dolores']
        }
      ],
      nextId: 4,
      editable: false
    };
  }

  handleNewRecipe = recipe => {
    let newRecipe = { id: this.state.nextId, ...recipe };
    this.setState(prevState => ({ recipes: [...prevState.recipes, newRecipe], nextId: prevState.nextId + 1 }));
  };

  handleEdit = () => {
    this.setState(prevState => ({ editable: !prevState.editable }));
  };

  handleDelete = id => {
    this.setState({ recipes: this.state.recipes.filter(recipe => recipe.id !== id) });
  };

  render() {
    return (
      <div className="recipe-component">
        <NewRecipe newRecipe={this.handleNewRecipe} />
        {this.state.editable ? (
          <Button variant="contained" color="primary" onClick={this.handleEdit} className="edit-btn">
            Done
          </Button>
        ) : (
          <Button onClick={this.handleEdit} className="edit-btn">
            Edit
          </Button>
        )}
        <section className="recipes-container">
          {this.state.recipes.map((recipe, id) => (
            <RecipeCard key={id} recipe={recipe} editable={this.state.editable} handleDelete={this.handleDelete} />
          ))}
        </section>
      </div>
    );
  }
}

export default RecipePage;
