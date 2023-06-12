/*import { Component} from 'react'


export default class SearchBar extends Component{
//const SearchBar = ({ onSubmit }) => {

    state = {
        searchName:'',
    }
    
    handleChangeName = (event) => {
        this.state({searchName: event.currentTarget.value.toLowerCase()})
    }

    handleSubmit = (event) => {
    event.preventDefault();
    //const searchInput = event.target.elements.searchInput.value;
    //this.props.onSubmit(searchInput);
        this.state({ searchName:''})
  };
    
    render() {
    return (
        <header class="searchbar">
        <form onSubmit={(this.handleSubmit)} class="form">
        <button type="submit" class="button">
        <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      value={this.state.searchName}
      onChange={this.handleChangeName}
      placeholder="Search images and photos"
    />
  </form>
    </header>
        )
        }
    }
    //}
//export default SearchBar;*/

// import React, { Component } from 'react';

// class SearchBar extends Component {
//   state = {
//     searchName: '',
//   };

//   handleChangeName = (event) => {
//     this.setState({ searchName: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = (event) => {
//       event.preventDefault();

//       if (this.state.searchName.trim() === ''){
//           alert("Please use text");
//       return;
//         }
      
//       this.props.onSubmit(this.state.searchName)
//     this.setState({ searchName: '' });
//   };

//   render() {
//     return (
//       <header className="searchbar">
//         <form onSubmit={this.handleSubmit} className="form">
//           <button type="submit" className="button">
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             value={this.state.searchName}
//             onChange={this.handleChangeName}
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default SearchBar;



import React, { useState } from 'react';
import scss from '../searchbar/searchbar.module.css'


const SearchBar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <form className={scss.form} onSubmit={handleSubmit}>
      <input className={scss.input} type="text" value={searchValue} onChange={handleChange} />
      <button className={scss.btn} type="submit">Search</button>
    </form>
  );
};

export default SearchBar;