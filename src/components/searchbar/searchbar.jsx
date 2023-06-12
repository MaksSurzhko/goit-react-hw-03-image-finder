
// import React, { useState } from 'react';
// import scss from '../searchbar/searchbar.module.css'


// const SearchBar = ({ onSubmit }) => {
//   const [searchValue, setSearchValue] = useState('');

//   const handleChange = (e) => {
//     setSearchValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(searchValue);
//   };

//   return (
//     <form className={scss.form} onSubmit={handleSubmit}>
//       <input className={scss.input} type="text" value={searchValue} onChange={handleChange} />
//       <button className={scss.btn} type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchBar;

import React, { Component } from 'react';
import scss from '../searchbar/searchbar.module.css'


class SearchBar extends Component {
  state = {
    searchName: '',
  };

  handleChangeName = (event) => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
      event.preventDefault();

      if (this.state.searchName.trim() === ''){
          alert("Please use text");
      return;
        }
      
      this.props.onSubmit(this.state.searchName)
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className={scss.form} onSubmit={this.handleSubmit} >
          <button type="submit" className={scss.btn}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={scss.input}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.searchName}
            onChange={this.handleChangeName}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;