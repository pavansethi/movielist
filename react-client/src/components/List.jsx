import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
      {props.movies.map((movie, index) => (
        <ListItem handleWatched={props.handleWatched} movie={movie} key={index}/>
      )
    )}
  </div>
)

export default List;

