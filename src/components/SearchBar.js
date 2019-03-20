import React from 'react';

class SearchBar extends React.Component {
 state = { term: ''};
 
 onInputChange = event => {
    this.setState({ term: event.target.value });
 };

 onFormSubmit = event => {
    event.preventDefault();

    // Callback from parent Component
 };

 render () {
    return (
        <div className="search-bar ui segment">
          <form onSubmit={this.onSubmit} className="ui from">
            <div className="field">
                <label>Video Search</label>
                <input 
                  type="text" 
                  value={this.state.term}
                  onChange={this.onInputChange}
                  /> 
            </div>
          </form>
        </div>
    );
  }
}


export default SearchBar;