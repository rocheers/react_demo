import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CardActions, Collapse, IconButton } from '@material-ui/core';

class RecipeCard extends React.Component {
  state = {
    expanded: false
  };
  handleClick = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };
  render() {
    const { id, title, description, imageUrl, chips, ingredients } = this.props.recipe;
    const { editable, handleDelete } = this.props;
    let btnClassName = editable ? 'del-btn btn-show' : 'del-btn btn-hide';
    let expandClassName = this.state.expanded ? 'expand-btn expanded' : 'expand-btn unexpanded';
    return (
      <div className="recipe-container">
        <a className={btnClassName} onClick={() => handleDelete(id)}>
          <i className="fa fa-times-circle fa-2x" />
        </a>
        <Card className="card">
          <CardHeader title={title} subheader={chips.join(' -- ')} />
          <CardMedia className="media" image={imageUrl} />
          <CardContent>
            <Typography component="p">{description}</Typography>
          </CardContent>
          <CardActions>
            <IconButton
              onClick={this.handleClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
              className={expandClassName}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <h4>Ingredients:</h4>
              <p>{ingredients.join(', ')}</p>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default RecipeCard;
