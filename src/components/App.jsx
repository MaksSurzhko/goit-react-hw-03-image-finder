
// import React, { Component } from 'react';
// import SearchBar from '../components/searchbar/searchbar';
// import ImageGallery from './imageGallery/imageGallery';
// import Button from '../components/button/button';
// import Loader from './loader/loader';
// //import Modal from './modal/modal';

// export default class App extends Component {
//   state = {
//     searchName: '',
//     photos: [],
//     images: [],
//     currentPage: 1,
//   };

//   handleFormSubmit = (searchName) => {
//     if (searchName.trim() === '') {
//       alert('Please, write');
//       return;
//     }


//     this.setState({ searchName, images: [], currentPage: 1 });
//     this.fetchImages(searchName, 1);
//   };

//   componentDidUpdate(prevProps) {
//     const prevName = prevProps.searchName;
//     const nextName = this.props.searchName;

//     if (prevName !== nextName) {
//       this.fetchImages(nextName, 1);
//     }
//   }

//   fetchImages = (searchName, page) => {
//     fetch(
//       `https://pixabay.com/api/?q=${searchName}&page=${page}&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`
//     )
//       .then((response) => response.json())
//       .then((data) => {

//         if (data.hits.length === 0) {
//           alert('Error! Cannot find');
//         }

//         if (page === 1) {
//           this.setState({ images: data.hits });
//         } else {
//           this.setState((prevState) => ({
//             images: [...prevState.images, ...data.hits],
//           }));
//         }
//         this.setState({ currentPage: page });
//       })
//       .catch((error) => {
//         alert('Images not found' + error);
//       });
//   };

//   handleLoadMore = () => {
//     const { searchName, currentPage } = this.state;
//     const nextPage = currentPage + 1;
//     this.fetchImages(searchName, nextPage);
//   };

//   render() {
//     const { images, searchName } = this.state;

//     return (
//       <div>
//         <SearchBar onSubmit={this.handleFormSubmit} />
//         {images.length > 0 && (
//           <>
//             <ImageGallery images={images} />
//             <Button onLoadMore={this.handleLoadMore} />
//           </>
//         )}
//         <Loader searchName={searchName} />
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import SearchBar from '../components/searchbar/searchbar';
import ImageGallery from './imageGallery/imageGallery';
import Button from '../components/button/button';
import Loader from './loader/loader';
//import Modal from './modal/modal';

export default class App extends Component {
  state = {
    searchName: '',
    photos: [],
    images: [],
    currentPage: 1,
  };

  handleFormSubmit = (searchName) => {
    if (searchName.trim() === '') {
      alert('Please, write');
      return;
    }


    this.setState({ searchName, images: [], currentPage: 1 });
    this.fetchImages(searchName, 1);
  };

  componentDidUpdate(prevProps) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;

    if (prevName !== nextName) {
      this.fetchImages(nextName, 1);
    }
  }

  fetchImages = (searchName, page) => {
    fetch(
      `https://pixabay.com/api/?q=${searchName}&page=${page}&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => response.json())
      .then((data) => {

        if (data.hits.length === 0) {
          alert('Error! Cannot find');
        }

        if (page === 1) {
          this.setState({ images: data.hits });
        } else {
          this.setState((prevState) => ({
            images: [...prevState.images, ...data.hits],
          }));
        }
        this.setState({ currentPage: page });
      })
      .catch((error) => {
        alert('Images not found' + error);
      });
  };

  handleLoadMore = () => {
    const { searchName, currentPage } = this.state;
    const nextPage = currentPage + 1;
    this.fetchImages(searchName, nextPage);
  };

  render() {
    const { images, searchName } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && (
          <>
            <ImageGallery images={images} />
            <Button onLoadMore={this.handleLoadMore} />
          </>
        )}
        <Loader searchName={searchName} />
        {/* <Modal images={images}/> */}
      </div>
    );
  }
}


