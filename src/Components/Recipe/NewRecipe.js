import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

class NewRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      chipsInput: '',
      description: '',
      imageUrl: '',
      ingredients: ['', ''],
      chips: []
    };
  }
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleIngChange = id => e => {
    let ing = e.target.value;
    let ings = [...this.state.ingredients];
    ings[id] = ing;
    this.setState({ ingredients: ings });
  };

  handleAddIng = () => {
    this.setState(prevState => ({ ingredients: [...prevState.ingredients, ''] }));
  };

  handleAddChip = e => {
    if (e.keyCode === 13 && this.state.chipsInput !== '') {
      this.setState({ chips: [...this.state.chips, this.state.chipsInput], chipsInput: '' });
    }
  };

  handleClickChip = id => {
    this.setState({ chips: this.state.chips.filter((chip, idx) => idx !== id) });
  };

  handleRemoveIng = () => {
    if (this.state.ingredients.length > 1) {
      this.setState(prevState => ({ ingredients: prevState.ingredients.slice(0, prevState.ingredients.length - 1) }));
    }
  };

  handleSubmit = () => {
    this.props.newRecipe({ ...this.state });
    this.setState({
      title: '',
      chipsInput: '',
      description: '',
      imageUrl: '',
      ingredients: ['', ''],
      chips: []
    });
  };

  render() {
    return (
      <div className="new-recipe-container">
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography align="center" variant="title">
              Create New Recipe
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="panel-details">
            <div>
              <TextField id="title" label="Title" value={this.state.title} onChange={this.handleChange} />
            </div>
            <div>
              <TextField
                id="chipsInput"
                label="Related Tags"
                value={this.state.chipsInput}
                onChange={this.handleChange}
                onKeyDown={this.handleAddChip}
              />
              <div className="chips-container">
                {this.state.chips.map((chip, id) => (
                  <Chip key={id} label={chip} className="chips" onClick={() => this.handleClickChip(id)} />
                ))}
              </div>
            </div>
            <div>
              <TextField id="imageUrl" label="Image URL" value={this.state.imageUrl} onChange={this.handleChange} />
            </div>
            <div>
              <TextField
                multiline
                id="description"
                label="Description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className="ing-container">
              <Typography variant="subheading" component="p">
                Ingredients:
              </Typography>
              <ol className="ing-list">
                {this.state.ingredients.map((ing, id) => (
                  <div key={id}>
                    <span>{id + 1}.</span>
                    <li>
                      <TextField id={`ingredient-${id}`} onChange={this.handleIngChange(id)} value={ing} />
                    </li>
                  </div>
                ))}
              </ol>
              <div className="btn-group">
                <Button variant="flat" color="primary" onClick={this.handleRemoveIng}>
                  Remove
                </Button>
                <Button variant="contained" color="primary" onClick={this.handleAddIng}>
                  Add
                </Button>
              </div>
            </div>

            <div className="submit-btn">
              <Button variant="outlined" color="secondary" onClick={this.handleSubmit}>
                Submit
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default NewRecipe;
