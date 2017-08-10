import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
        movies: [],
        currentMovie: null,
        field: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
  }

  handleWatched(newState, item) = {
    // set watched property on item to true
    // setState to show just unwatched items


    this.state.movies.filter(movie => movie.title === item)[0]

    this.setState({
      movies: //modify the item and setstate
    })
  };

  handleChange(event) {
    this.setState({
      field: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var searchedMovie = this.state.movies.filter((movie) => movie.title === this.state.field);

    this.setState({
      currentMovie: this.state.field,
      movies: searchedMovie
    });

  }

  handleAdd(event) {
    event.preventDefault();

    this.setState({
      movies: this.state.movies.concat({title: this.state.field, watched: false})
    });

  }

  searchForm() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" value='Submit' />
      </form>
    )
  }

  render () {
    return (
      <div>
        <h1>Movie Lists</h1>
            {this.searchForm()}
              <form onSubmit={this.handleAdd}>
                <input type='text' onChange={this.handleChange}/>
                <button>Add</button>
              </form>



            <List handleWatched={this.handleWatched} movies={this.state.movies} currentMovie={this.state.currentMovie}/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));