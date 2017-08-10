import React from 'react';
import List from './List.jsx';

const ListItem = (props) => (
  <div>
    <p>{props.movie.title}<button type="input" onClick={() => props.handleWatched(!props.movie.watched, props.movie.title)}>Toggle</button></p>
  </div>
)

export default ListItem;